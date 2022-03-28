"use strict";(self.webpackChunk_spotifly_docs=self.webpackChunk_spotifly_docs||[]).push([[588],{9303:function(e,t,o){o.d(t,{C:function(){return s}});var n=o(7927),a=o(2905),i=o(9703),r=o(7378),s=function(e){var t=e.children,o=(0,n.If)().colorMode,s=(0,r.useMemo)((function(){return(0,a.Z)(function(e){return{palette:Object.assign({mode:e},"light"===e?{primary:{main:"#4a44a2",light:"#514bb2",dark:"#433d92"}}:{primary:{main:"#e6b2e2",light:"#f0d1ee",dark:"#dc93d6"}})}}(o))}),[o]);return r.createElement(i.Z,{theme:s},t)}},8660:function(e,t,o){o.d(t,{_F:function(){return n},g8:function(){return i},p1:function(){return a}});var n=function(e,t){return e+" "+Object.entries(t).reduce((function(e,t){var o=t[0],n=t[1];return!1===n||""===n||(e+=(o="--"+o)+" ",Array.isArray(n)?e+=n[0]+" ":"string"==typeof n?(n.indexOf(" ")>-1&&" "!==n.slice(-1)&&(n='"'+n+'"'),e+=n+" "):"number"==typeof n&&(e+=n+" ")),e}),"").trim()},a=function(e,t){var o=e.indexOf(t);if(o>-1){var n=[e[o],e[0]];e[0]=n[0],e[o]=n[1]}return e},i=["ugc-image-upload","user-read-playback-state","user-modify-playback-state","user-read-currently-playing","user-read-private","user-read-email","user-follow-modify","user-follow-read","user-library-modify","user-library-read","app-remote-control","user-read-playback-position","user-top-read","user-read-recently-played","playlist-modify-private","playlist-read-collaborative","playlist-read-private","playlist-modify-public"]},2596:function(e,t,o){o.r(t),o.d(t,{assets:function(){return de},contentTitle:function(){return se},default:function(){return pe},frontMatter:function(){return re},metadata:function(){return le},toc:function(){return ce}});var n=o(2685),a=o(1244),i=o(7378),r=o(5318),s=o(5310),l=o(8666),d=o(1230),c=o(1015),u=o(7090),p=o(3990),m=o(7802),b=o(4591),g=o(8389),y=function(){};var f="undefined"!=typeof window,h=function(e,t,o){if(!f)return[t,y,y];if(!e)throw new Error("useLocalStorage key may not be falsy");var n=o?o.raw?function(e){return e}:o.deserializer:JSON.parse,a=(0,i.useRef)((function(e){try{var a=o?o.raw?String:o.serializer:JSON.stringify,i=localStorage.getItem(e);return null!==i?n(i):(t&&localStorage.setItem(e,a(t)),t)}catch(r){return t}})),r=(0,i.useState)((function(){return a.current(e)})),s=r[0],l=r[1];(0,i.useLayoutEffect)((function(){return l(a.current(e))}),[e]);var d=(0,i.useCallback)((function(t){try{var a="function"==typeof t?t(s):t;if(void 0===a)return;var i=void 0;i=o?o.raw?"string"==typeof a?a:JSON.stringify(a):o.serializer?o.serializer(a):JSON.stringify(a):JSON.stringify(a),localStorage.setItem(e,i),l(n(i))}catch(r){}}),[e,l]),c=(0,i.useCallback)((function(){try{localStorage.removeItem(e),l(void 0)}catch(r){}}),[e,l]);return[s,d,c]},v=o(9303),x=o(8660),S=o(8944),Z=o(3892),w=o(7818),k=o(5608),C=o(6716),I=o(8045),z=o(6758),R=o(1183),P=o(8849),L=o(765),N=o(2897);function E(e){return(0,L.Z)("MuiListItemButton",e)}var $=(0,N.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),M=o(4246);const F=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected"],T=(0,k.ZP)(I.Z,{shouldForwardProp:e=>(0,k.FO)(e)||"classes"===e,name:"MuiListItemButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,"flex-start"===o.alignItems&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${$.selected}`]:{backgroundColor:(0,w.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${$.focusVisible}`]:{backgroundColor:(0,w.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${$.selected}:hover`]:{backgroundColor:(0,w.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,w.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${$.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${$.disabled}`]:{opacity:e.palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${e.palette.divider}`,backgroundClip:"padding-box"},"flex-start"===t.alignItems&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})));var O=i.forwardRef((function(e,t){const o=(0,C.Z)({props:e,name:"MuiListItemButton"}),{alignItems:r="center",autoFocus:s=!1,component:l="div",children:d,dense:c=!1,disableGutters:u=!1,divider:p=!1,focusVisibleClassName:m,selected:b=!1}=o,g=(0,a.Z)(o,F),y=i.useContext(P.Z),f={dense:c||y.dense||!1,alignItems:r,disableGutters:u},h=i.useRef(null);(0,z.Z)((()=>{s&&h.current&&h.current.focus()}),[s]);const v=(0,n.Z)({},o,{alignItems:r,dense:f.dense,disableGutters:u,divider:p,selected:b}),x=(e=>{const{alignItems:t,classes:o,dense:a,disabled:i,disableGutters:r,divider:s,selected:l}=e,d={root:["root",a&&"dense",!r&&"gutters",s&&"divider",i&&"disabled","flex-start"===t&&"alignItemsFlexStart",l&&"selected"]},c=(0,Z.Z)(d,E,o);return(0,n.Z)({},o,c)})(v),w=(0,R.Z)(h,t);return(0,M.jsx)(P.Z.Provider,{value:f,children:(0,M.jsx)(T,(0,n.Z)({ref:w,component:l,focusVisibleClassName:(0,S.Z)(x.focusVisible,m),ownerState:v},g,{classes:x,children:d}))})})),A=o(872),G=o(3207),j=o(4942);function B(e){return(0,L.Z)("MuiListItem",e)}var V=(0,N.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);function D(e){return(0,L.Z)("MuiListItemSecondaryAction",e)}(0,N.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);const q=["className"],W=(0,k.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.disableGutters&&t.disableGutters]}})((({ownerState:e})=>(0,n.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0}))),_=i.forwardRef((function(e,t){const o=(0,C.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:r}=o,s=(0,a.Z)(o,q),l=i.useContext(P.Z),d=(0,n.Z)({},o,{disableGutters:l.disableGutters}),c=(e=>{const{disableGutters:t,classes:o}=e,n={root:["root",t&&"disableGutters"]};return(0,Z.Z)(n,D,o)})(d);return(0,M.jsx)(W,(0,n.Z)({className:(0,S.Z)(c.root,r),ownerState:d,ref:t},s))}));_.muiName="ListItemSecondaryAction";var J=_;const U=["className"],X=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],Y=(0,k.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,"flex-start"===o.alignItems&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.button&&t.button,o.hasSecondaryAction&&t.secondaryAction]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,n.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${$.root}`]:{paddingRight:48}},{[`&.${V.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${V.selected}`]:{backgroundColor:(0,w.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${V.focusVisible}`]:{backgroundColor:(0,w.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${V.disabled}`]:{opacity:e.palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${e.palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${V.selected}:hover`]:{backgroundColor:(0,w.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,w.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48}))),H=(0,k.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"});var K=i.forwardRef((function(e,t){const o=(0,C.Z)({props:e,name:"MuiListItem"}),{alignItems:r="center",autoFocus:s=!1,button:l=!1,children:d,className:c,component:u,components:p={},componentsProps:m={},ContainerComponent:b="li",ContainerProps:{className:g}={},dense:y=!1,disabled:f=!1,disableGutters:h=!1,disablePadding:v=!1,divider:x=!1,focusVisibleClassName:w,secondaryAction:k,selected:L=!1}=o,N=(0,a.Z)(o.ContainerProps,U),E=(0,a.Z)(o,X),$=i.useContext(P.Z),F={dense:y||$.dense||!1,alignItems:r,disableGutters:h},T=i.useRef(null);(0,z.Z)((()=>{s&&T.current&&T.current.focus()}),[s]);const O=i.Children.toArray(d),A=O.length&&(0,j.Z)(O[O.length-1],["ListItemSecondaryAction"]),D=(0,n.Z)({},o,{alignItems:r,autoFocus:s,button:l,dense:F.dense,disabled:f,disableGutters:h,disablePadding:v,divider:x,hasSecondaryAction:A,selected:L}),q=(e=>{const{alignItems:t,button:o,classes:n,dense:a,disabled:i,disableGutters:r,disablePadding:s,divider:l,hasSecondaryAction:d,selected:c}=e,u={root:["root",a&&"dense",!r&&"gutters",!s&&"padding",l&&"divider",i&&"disabled",o&&"button","flex-start"===t&&"alignItemsFlexStart",d&&"secondaryAction",c&&"selected"],container:["container"]};return(0,Z.Z)(u,B,n)})(D),W=(0,R.Z)(T,t),_=p.Root||Y,K=m.root||{},Q=(0,n.Z)({className:(0,S.Z)(q.root,K.className,c),disabled:f},E);let ee=u||"li";return l&&(Q.component=u||"div",Q.focusVisibleClassName=(0,S.Z)(V.focusVisible,w),ee=I.Z),A?(ee=Q.component||u?ee:"div","li"===b&&("li"===ee?ee="div":"li"===Q.component&&(Q.component="div")),(0,M.jsx)(P.Z.Provider,{value:F,children:(0,M.jsxs)(H,(0,n.Z)({as:b,className:(0,S.Z)(q.container,g),ref:W,ownerState:D},N,{children:[(0,M.jsx)(_,(0,n.Z)({},K,!(0,G.Z)(_)&&{as:ee,ownerState:(0,n.Z)({},D,K.ownerState)},Q,{children:O})),O.pop()]}))})):(0,M.jsx)(P.Z.Provider,{value:F,children:(0,M.jsxs)(_,(0,n.Z)({},K,{as:ee,ref:W,ownerState:D},!(0,G.Z)(_)&&{ownerState:(0,n.Z)({},D,K.ownerState)},Q,{children:[O,k&&(0,M.jsx)(J,{children:k})]}))})})),Q=o(4662);const ee=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],te=(0,k.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${Q.Z.primary}`]:t.primary},{[`& .${Q.Z.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})((({ownerState:e})=>(0,n.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})));var oe=i.forwardRef((function(e,t){const o=(0,C.Z)({props:e,name:"MuiListItemText"}),{children:r,className:s,disableTypography:l=!1,inset:d=!1,primary:c,primaryTypographyProps:u,secondary:p,secondaryTypographyProps:m}=o,b=(0,a.Z)(o,ee),{dense:y}=i.useContext(P.Z);let f=null!=c?c:r,h=p;const v=(0,n.Z)({},o,{disableTypography:l,inset:d,primary:!!f,secondary:!!h,dense:y}),x=(e=>{const{classes:t,inset:o,primary:n,secondary:a,dense:i}=e,r={root:["root",o&&"inset",i&&"dense",n&&a&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,Z.Z)(r,Q.L,t)})(v);return null==f||f.type===g.Z||l||(f=(0,M.jsx)(g.Z,(0,n.Z)({variant:y?"body2":"body1",className:x.primary,component:"span",display:"block"},u,{children:f}))),null==h||h.type===g.Z||l||(h=(0,M.jsx)(g.Z,(0,n.Z)({variant:"body2",className:x.secondary,color:"text.secondary",display:"block"},m,{children:h}))),(0,M.jsxs)(te,(0,n.Z)({className:(0,S.Z)(x.root,s),ownerState:v,ref:t},b,{children:[f,h]}))})),ne=function(e){var t=e.expires,o=e.token,n=e.scopes;return i.createElement(A.Z,null,i.createElement(K,{disablePadding:!0},i.createElement(oe,{primary:"Expires",secondary:"In "+new Date(t-Date.now()).getMinutes()+" minutes (at "+new Date(t).toLocaleTimeString()+")"})),i.createElement(K,{disablePadding:!0},i.createElement(oe,{primary:"Scopes",secondary:n})),i.createElement(K,{disablePadding:!0},i.createElement(O,{disableGutters:!0},i.createElement(oe,{sx:{wordBreak:"break-all"},onClick:function(){return navigator.clipboard.writeText(o)},primary:"Token - Click to copy",secondary:o}))))},ae=function(){var e=(0,i.useState)(""),t=e[0],o=e[1],n=(0,i.useState)(""),a=n[0],r=n[1],y=(0,i.useState)([]),f=y[0],S=y[1],Z=(0,i.useState)(""),w=Z[0],k=Z[1],C=h("token"),I=C[0],z=C[1],R=C[2];I&&I.expires<Date.now()&&R(),(0,i.useEffect)((function(){if(window.opener&&"function"==typeof window.opener.spotifyCallback){var e=new URLSearchParams(window.location.search).get("error")||"",t=window.location.hash.slice(1).split("&")[0].split("=")[1];window.opener.spotifyCallback(t,e)}}),[]);var P=t&&a&&f.length>0;return i.createElement(v.C,null,i.createElement(s.Z,{component:"form",sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"15px 10px","& > *":{width:"100%"},mb:2}},i.createElement(b.Z,{value:t,label:"Client ID",key:"id",onChange:function(e){return o(e.target.value)}}),i.createElement(b.Z,{value:a,label:"Client Secret",key:"secret",onChange:function(e){return r(e.target.value)}}),i.createElement(d.Z,null,i.createElement(c.Z,null,"Scopes"),i.createElement(m.Z,{multiple:!0,value:f,onChange:function(e){var t=e.target.value;S("string"==typeof t?[t]:t)},input:i.createElement(p.Z,{label:"Scope"})},x.g8.map((function(e){return i.createElement(u.Z,{key:e,value:e},e)}))))),P&&i.createElement(l.Z,{sx:{mb:2},variant:"contained",onClick:function(){var e="https://accounts.spotify.com/authorize?"+new URLSearchParams({response_type:"token",show_dialog:"true",client_id:encodeURIComponent(t),redirect_uri:window.location.href,scope:f.join(" ")}).toString(),o=window.open(e,"Login with Spotify","width=500,height=800");window.spotifyCallback=function(e,t){e?(z({scopes:f.join(", "),token:e,expires:new Date(Date.now()+36e5).getTime()}),k("")):k(t),null==o||o.close()}}},"Login with Spotify"),w?i.createElement(s.Z,{py:2,px:1},i.createElement(g.Z,null,"Error login in with Spotify. Reason: ",w,'. Did you click "cancel" in the popup?')):I?i.createElement(ne,I):null)},ie=["components"],re={title:"Authentication",sidebar_position:2},se=void 0,le={unversionedId:"authentication",id:"authentication",title:"Authentication",description:"In order to access Spotify's data, you will need a dedicated Spotify application (and, of course, a Spotify account).",source:"@site/docs/authentication.mdx",sourceDirName:".",slug:"/authentication",permalink:"/docs/authentication",editUrl:"https://github.com/eegli/spotifly/tree/main/docs/docs/authentication.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Authentication",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Command Line",permalink:"/docs/command-line"}},de={},ce=[{value:"Getting an access token",id:"getting-an-access-token",level:2}],ue={toc:ce};function pe(e){var t=e.components,o=(0,a.Z)(e,ie);return(0,r.kt)("wrapper",(0,n.Z)({},ue,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to access Spotify's data, you will need a dedicated Spotify application (and, of course, a Spotify account)."),(0,r.kt)("p",null,"If you don't have one already, click the link below and create one. It's free!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.spotify.com/dashboard/"},"https://developer.spotify.com/dashboard/"),"."),(0,r.kt)("h2",{id:"getting-an-access-token"},"Getting an access token"),(0,r.kt)("p",null,"Some of the packages require a short-lived user token. The helper below can be used to generate such a token that is bound to your Spotify application. Packages that require a token will list what scopes are needed."),(0,r.kt)("p",null,"Previously generated tokens are saved locally in your browser as long as their are valid (1h)."),(0,r.kt)(ae,{mdxType:"AuthTokenForm"}))}pe.isMDXComponent=!0},8666:function(e,t,o){o.d(t,{Z:function(){return k}});var n=o(1244),a=o(2685),i=o(7378),r=o(8944),s=o(1923),l=o(3892),d=o(7818),c=o(5608),u=o(6716),p=o(8045),m=o(1640),b=o(765);function g(e){return(0,b.Z)("MuiButton",e)}var y=(0,o(2897).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var f=i.createContext({}),h=o(4246);const v=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=e=>(0,a.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,m.Z)(o.color)}`],t[`size${(0,m.Z)(o.size)}`],t[`${o.variant}Size${(0,m.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${e.palette[t.color].main}`,backgroundColor:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.palette[t.color].dark,"@media (hover: none)":{backgroundColor:e.palette[t.color].main}}),"&:active":(0,a.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[8]}),[`&.${y.focusVisible}`]:(0,a.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[6]}),[`&.${y.disabled}`]:(0,a.Z)({color:e.palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===t.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main,border:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${y.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${y.disabled}`]:{boxShadow:"none"}})),Z=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,m.Z)(o.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},x(e)))),w=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,m.Z)(o.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},x(e))));var k=i.forwardRef((function(e,t){const o=i.useContext(f),d=(0,s.Z)(o,e),c=(0,u.Z)({props:d,name:"MuiButton"}),{children:p,color:b="primary",component:y="button",className:x,disabled:k=!1,disableElevation:C=!1,disableFocusRipple:I=!1,endIcon:z,focusVisibleClassName:R,fullWidth:P=!1,size:L="medium",startIcon:N,type:E,variant:$="text"}=c,M=(0,n.Z)(c,v),F=(0,a.Z)({},c,{color:b,component:y,disabled:k,disableElevation:C,disableFocusRipple:I,fullWidth:P,size:L,type:E,variant:$}),T=(e=>{const{color:t,disableElevation:o,fullWidth:n,size:i,variant:r,classes:s}=e,d={root:["root",r,`${r}${(0,m.Z)(t)}`,`size${(0,m.Z)(i)}`,`${r}Size${(0,m.Z)(i)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,m.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,m.Z)(i)}`]},c=(0,l.Z)(d,g,s);return(0,a.Z)({},s,c)})(F),O=N&&(0,h.jsx)(Z,{className:T.startIcon,ownerState:F,children:N}),A=z&&(0,h.jsx)(w,{className:T.endIcon,ownerState:F,children:z});return(0,h.jsxs)(S,(0,a.Z)({ownerState:F,className:(0,r.Z)(x,o.className),component:y,disabled:k,focusRipple:!I,focusVisibleClassName:(0,r.Z)(T.focusVisible,R),ref:t,type:E},M,{classes:T,children:[O,p,A]}))}))}}]);