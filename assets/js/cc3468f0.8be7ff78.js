"use strict";(self.webpackChunk_spotifly_docs=self.webpackChunk_spotifly_docs||[]).push([[588],{9303:function(e,t,o){o.d(t,{C:function(){return d}});var n=o(7927),a=o(2905),i=o(9703),r=o(7378),s=(0,a.Z)({palette:{mode:"dark",primary:{main:"#e6b2e2",light:"#f0d1ee",dark:"#dc93d6"}}}),l=(0,a.Z)({palette:{mode:"light",primary:{main:"#4a44a2",light:"#514bb2",dark:"#433d92"}}}),d=function(e){var t=e.children,o=(0,n.If)().colorMode,a=(0,r.useMemo)((function(){return"light"===o?l:s}),[o]);return r.createElement(i.Z,{theme:a},t)}},8660:function(e,t,o){o.d(t,{_F:function(){return n},g8:function(){return i},p1:function(){return a}});var n=function(e,t){return e+" "+Object.entries(t).reduce((function(e,t){var o=t[0],n=t[1];return!1===n||""===n||(e+=(o="--"+o)+" ",Array.isArray(n)?e+=n[0]+" ":"string"==typeof n?(n.indexOf(" ")>-1&&" "!==n.slice(-1)&&(n='"'+n+'"'),e+=n+" "):"number"==typeof n&&(e+=n+" ")),e}),"").trim()},a=function(e,t){var o=e.indexOf(t);if(o>-1){var n=[e[o],e[0]];e[0]=n[0],e[o]=n[1]}return e},i=["ugc-image-upload","user-read-playback-state","user-modify-playback-state","user-read-currently-playing","user-read-private","user-read-email","user-follow-modify","user-follow-read","user-library-modify","user-library-read","app-remote-control","user-read-playback-position","user-top-read","user-read-recently-played","playlist-modify-private","playlist-read-collaborative","playlist-read-private","playlist-modify-public"]},4950:function(e,t,o){o.r(t),o.d(t,{assets:function(){return ve},contentTitle:function(){return fe},default:function(){return Ze},frontMatter:function(){return ye},metadata:function(){return he},toc:function(){return xe}});var n=o(2685),a=o(1244),i=o(7378),r=o(5318),s=o(5310),l=o(8944),d=o(1923),c=o(3892),u=o(7818),p=o(5608),m=o(6716),b=o(8045),g=o(1640),y=o(765),f=o(2897);function h(e){return(0,y.Z)("MuiButton",e)}var v=(0,f.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var x=i.createContext({}),S=o(4246);const Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],w=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),k=(0,p.ZP)(b.Z,{shouldForwardProp:e=>(0,p.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,g.Z)(o.color)}`],t[`size${(0,g.Z)(o.size)}`],t[`${o.variant}Size${(0,g.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:(0,u.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:(0,u.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${e.palette[t.color].main}`,backgroundColor:(0,u.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.palette[t.color].dark,"@media (hover: none)":{backgroundColor:e.palette[t.color].main}}),"&:active":(0,n.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[8]}),[`&.${v.focusVisible}`]:(0,n.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[6]}),[`&.${v.disabled}`]:(0,n.Z)({color:e.palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===t.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main,border:`1px solid ${(0,u.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}})),C=(0,p.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,g.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},w(e)))),I=(0,p.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,g.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},w(e))));var z=i.forwardRef((function(e,t){const o=i.useContext(x),r=(0,d.Z)(o,e),s=(0,m.Z)({props:r,name:"MuiButton"}),{children:u,color:p="primary",component:b="button",className:y,disabled:f=!1,disableElevation:v=!1,disableFocusRipple:w=!1,endIcon:z,focusVisibleClassName:R,fullWidth:P=!1,size:L="medium",startIcon:N,type:E,variant:$="text"}=s,M=(0,a.Z)(s,Z),F=(0,n.Z)({},s,{color:p,component:b,disabled:f,disableElevation:v,disableFocusRipple:w,fullWidth:P,size:L,type:E,variant:$}),T=(e=>{const{color:t,disableElevation:o,fullWidth:a,size:i,variant:r,classes:s}=e,l={root:["root",r,`${r}${(0,g.Z)(t)}`,`size${(0,g.Z)(i)}`,`${r}Size${(0,g.Z)(i)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,g.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,g.Z)(i)}`]},d=(0,c.Z)(l,h,s);return(0,n.Z)({},s,d)})(F),O=N&&(0,S.jsx)(C,{className:T.startIcon,ownerState:F,children:N}),A=z&&(0,S.jsx)(I,{className:T.endIcon,ownerState:F,children:z});return(0,S.jsxs)(k,(0,n.Z)({ownerState:F,className:(0,l.Z)(y,o.className),component:b,disabled:f,focusRipple:!w,focusVisibleClassName:(0,l.Z)(T.focusVisible,R),ref:t,type:E},M,{classes:T,children:[O,u,A]}))})),R=o(1230),P=o(1015),L=o(7090),N=o(3990),E=o(7802),$=o(4591),M=o(8389),F=function(){};var T="undefined"!=typeof window,O=function(e,t,o){if(!T)return[t,F,F];if(!e)throw new Error("useLocalStorage key may not be falsy");var n=o?o.raw?function(e){return e}:o.deserializer:JSON.parse,a=(0,i.useRef)((function(e){try{var a=o?o.raw?String:o.serializer:JSON.stringify,i=localStorage.getItem(e);return null!==i?n(i):(t&&localStorage.setItem(e,a(t)),t)}catch(r){return t}})),r=(0,i.useState)((function(){return a.current(e)})),s=r[0],l=r[1];(0,i.useLayoutEffect)((function(){return l(a.current(e))}),[e]);var d=(0,i.useCallback)((function(t){try{var a="function"==typeof t?t(s):t;if(void 0===a)return;var i=void 0;i=o?o.raw?"string"==typeof a?a:JSON.stringify(a):o.serializer?o.serializer(a):JSON.stringify(a):JSON.stringify(a),localStorage.setItem(e,i),l(n(i))}catch(r){}}),[e,l]),c=(0,i.useCallback)((function(){try{localStorage.removeItem(e),l(void 0)}catch(r){}}),[e,l]);return[s,d,c]},A=o(9303),G=o(8660),B=o(6758),V=o(1183),j=o(8849);function D(e){return(0,y.Z)("MuiListItemButton",e)}var q=(0,f.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);const W=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected"],_=(0,p.ZP)(b.Z,{shouldForwardProp:e=>(0,p.FO)(e)||"classes"===e,name:"MuiListItemButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,"flex-start"===o.alignItems&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${q.selected}`]:{backgroundColor:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${q.focusVisible}`]:{backgroundColor:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${q.selected}:hover`]:{backgroundColor:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${q.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${q.disabled}`]:{opacity:e.palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${e.palette.divider}`,backgroundClip:"padding-box"},"flex-start"===t.alignItems&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})));var J=i.forwardRef((function(e,t){const o=(0,m.Z)({props:e,name:"MuiListItemButton"}),{alignItems:r="center",autoFocus:s=!1,component:d="div",children:u,dense:p=!1,disableGutters:b=!1,divider:g=!1,focusVisibleClassName:y,selected:f=!1}=o,h=(0,a.Z)(o,W),v=i.useContext(j.Z),x={dense:p||v.dense||!1,alignItems:r,disableGutters:b},Z=i.useRef(null);(0,B.Z)((()=>{s&&Z.current&&Z.current.focus()}),[s]);const w=(0,n.Z)({},o,{alignItems:r,dense:x.dense,disableGutters:b,divider:g,selected:f}),k=(e=>{const{alignItems:t,classes:o,dense:a,disabled:i,disableGutters:r,divider:s,selected:l}=e,d={root:["root",a&&"dense",!r&&"gutters",s&&"divider",i&&"disabled","flex-start"===t&&"alignItemsFlexStart",l&&"selected"]},u=(0,c.Z)(d,D,o);return(0,n.Z)({},o,u)})(w),C=(0,V.Z)(Z,t);return(0,S.jsx)(j.Z.Provider,{value:x,children:(0,S.jsx)(_,(0,n.Z)({ref:C,component:d,focusVisibleClassName:(0,l.Z)(k.focusVisible,y),ownerState:w},h,{classes:k,children:u}))})})),U=o(872),X=o(3207),Y=o(4942);function H(e){return(0,y.Z)("MuiListItem",e)}var K=(0,f.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);function Q(e){return(0,y.Z)("MuiListItemSecondaryAction",e)}(0,f.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);const ee=["className"],te=(0,p.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.disableGutters&&t.disableGutters]}})((({ownerState:e})=>(0,n.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0}))),oe=i.forwardRef((function(e,t){const o=(0,m.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:r}=o,s=(0,a.Z)(o,ee),d=i.useContext(j.Z),u=(0,n.Z)({},o,{disableGutters:d.disableGutters}),p=(e=>{const{disableGutters:t,classes:o}=e,n={root:["root",t&&"disableGutters"]};return(0,c.Z)(n,Q,o)})(u);return(0,S.jsx)(te,(0,n.Z)({className:(0,l.Z)(p.root,r),ownerState:u,ref:t},s))}));oe.muiName="ListItemSecondaryAction";var ne=oe;const ae=["className"],ie=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],re=(0,p.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,"flex-start"===o.alignItems&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.button&&t.button,o.hasSecondaryAction&&t.secondaryAction]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,n.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${q.root}`]:{paddingRight:48}},{[`&.${K.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${K.selected}`]:{backgroundColor:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${K.focusVisible}`]:{backgroundColor:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${K.disabled}`]:{opacity:e.palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${e.palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${K.selected}:hover`]:{backgroundColor:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48}))),se=(0,p.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"});var le=i.forwardRef((function(e,t){const o=(0,m.Z)({props:e,name:"MuiListItem"}),{alignItems:r="center",autoFocus:s=!1,button:d=!1,children:u,className:p,component:g,components:y={},componentsProps:f={},ContainerComponent:h="li",ContainerProps:{className:v}={},dense:x=!1,disabled:Z=!1,disableGutters:w=!1,disablePadding:k=!1,divider:C=!1,focusVisibleClassName:I,secondaryAction:z,selected:R=!1}=o,P=(0,a.Z)(o.ContainerProps,ae),L=(0,a.Z)(o,ie),N=i.useContext(j.Z),E={dense:x||N.dense||!1,alignItems:r,disableGutters:w},$=i.useRef(null);(0,B.Z)((()=>{s&&$.current&&$.current.focus()}),[s]);const M=i.Children.toArray(u),F=M.length&&(0,Y.Z)(M[M.length-1],["ListItemSecondaryAction"]),T=(0,n.Z)({},o,{alignItems:r,autoFocus:s,button:d,dense:E.dense,disabled:Z,disableGutters:w,disablePadding:k,divider:C,hasSecondaryAction:F,selected:R}),O=(e=>{const{alignItems:t,button:o,classes:n,dense:a,disabled:i,disableGutters:r,disablePadding:s,divider:l,hasSecondaryAction:d,selected:u}=e,p={root:["root",a&&"dense",!r&&"gutters",!s&&"padding",l&&"divider",i&&"disabled",o&&"button","flex-start"===t&&"alignItemsFlexStart",d&&"secondaryAction",u&&"selected"],container:["container"]};return(0,c.Z)(p,H,n)})(T),A=(0,V.Z)($,t),G=y.Root||re,D=f.root||{},q=(0,n.Z)({className:(0,l.Z)(O.root,D.className,p),disabled:Z},L);let W=g||"li";return d&&(q.component=g||"div",q.focusVisibleClassName=(0,l.Z)(K.focusVisible,I),W=b.Z),F?(W=q.component||g?W:"div","li"===h&&("li"===W?W="div":"li"===q.component&&(q.component="div")),(0,S.jsx)(j.Z.Provider,{value:E,children:(0,S.jsxs)(se,(0,n.Z)({as:h,className:(0,l.Z)(O.container,v),ref:A,ownerState:T},P,{children:[(0,S.jsx)(G,(0,n.Z)({},D,!(0,X.Z)(G)&&{as:W,ownerState:(0,n.Z)({},T,D.ownerState)},q,{children:M})),M.pop()]}))})):(0,S.jsx)(j.Z.Provider,{value:E,children:(0,S.jsxs)(G,(0,n.Z)({},D,{as:W,ref:A,ownerState:T},!(0,X.Z)(G)&&{ownerState:(0,n.Z)({},T,D.ownerState)},q,{children:[M,z&&(0,S.jsx)(ne,{children:z})]}))})})),de=o(4662);const ce=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ue=(0,p.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${de.Z.primary}`]:t.primary},{[`& .${de.Z.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})((({ownerState:e})=>(0,n.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})));var pe=i.forwardRef((function(e,t){const o=(0,m.Z)({props:e,name:"MuiListItemText"}),{children:r,className:s,disableTypography:d=!1,inset:u=!1,primary:p,primaryTypographyProps:b,secondary:g,secondaryTypographyProps:y}=o,f=(0,a.Z)(o,ce),{dense:h}=i.useContext(j.Z);let v=null!=p?p:r,x=g;const Z=(0,n.Z)({},o,{disableTypography:d,inset:u,primary:!!v,secondary:!!x,dense:h}),w=(e=>{const{classes:t,inset:o,primary:n,secondary:a,dense:i}=e,r={root:["root",o&&"inset",i&&"dense",n&&a&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,c.Z)(r,de.L,t)})(Z);return null==v||v.type===M.Z||d||(v=(0,S.jsx)(M.Z,(0,n.Z)({variant:h?"body2":"body1",className:w.primary,component:"span",display:"block"},b,{children:v}))),null==x||x.type===M.Z||d||(x=(0,S.jsx)(M.Z,(0,n.Z)({variant:"body2",className:w.secondary,color:"text.secondary",display:"block"},y,{children:x}))),(0,S.jsxs)(ue,(0,n.Z)({className:(0,l.Z)(w.root,s),ownerState:Z,ref:t},f,{children:[v,x]}))})),me=function(e){var t=e.expires,o=e.token,n=e.scopes;return i.createElement(U.Z,null,i.createElement(le,{disablePadding:!0},i.createElement(pe,{primary:"Expires",secondary:"In "+new Date(t-Date.now()).getMinutes()+" minutes (at "+new Date(t).toLocaleTimeString()+")"})),i.createElement(le,{disablePadding:!0},i.createElement(pe,{primary:"Scopes",secondary:n})),i.createElement(le,{disablePadding:!0},i.createElement(J,{disableGutters:!0},i.createElement(pe,{sx:{wordBreak:"break-all"},onClick:function(){return navigator.clipboard.writeText(o)},primary:"Token - Click to copy",secondary:o}))))},be=function(){var e=(0,i.useState)(""),t=e[0],o=e[1],n=(0,i.useState)(""),a=n[0],r=n[1],l=(0,i.useState)([]),d=l[0],c=l[1],u=(0,i.useState)(""),p=u[0],m=u[1],b=O("token"),g=b[0],y=b[1],f=b[2];g&&g.expires<Date.now()&&f(),(0,i.useEffect)((function(){if(window.opener&&"function"==typeof window.opener.spotifyCallback){var e=new URLSearchParams(window.location.search).get("error")||"",t=window.location.hash.slice(1).split("&")[0].split("=")[1];window.opener.spotifyCallback(t,e)}}),[]);var h=t&&a&&d.length>0;return i.createElement(A.C,null,i.createElement(s.Z,{component:"form",sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"15px 10px","& > *":{width:"100%"},mb:2}},i.createElement($.Z,{value:t,label:"Client ID",key:"id",onChange:function(e){return o(e.target.value)}}),i.createElement($.Z,{value:a,label:"Client Secret",key:"secret",onChange:function(e){return r(e.target.value)}}),i.createElement(R.Z,null,i.createElement(P.Z,null,"Scopes"),i.createElement(E.Z,{multiple:!0,value:d,onChange:function(e){var t=e.target.value;c("string"==typeof t?[t]:t)},input:i.createElement(N.Z,{label:"Scope"})},G.g8.map((function(e){return i.createElement(L.Z,{key:e,value:e},e)}))))),h&&i.createElement(z,{sx:{mb:2},variant:"contained",onClick:function(){var e="https://accounts.spotify.com/authorize?"+new URLSearchParams({response_type:"token",show_dialog:"true",client_id:encodeURIComponent(t),redirect_uri:window.location.href,scope:d.join(" ")}).toString(),o=window.open(e,"Login with Spotify","width=500,height=800");window.spotifyCallback=function(e,t){e?(y({scopes:d.join(", "),token:e,expires:new Date(Date.now()+36e5).getTime()}),m("")):m(t),null==o||o.close()}}},"Login with Spotify"),p?i.createElement(s.Z,{py:2,px:1},i.createElement(M.Z,null,"Error login in with Spotify. Reason: ",p,'. Did you click "cancel" in the popup?')):g?i.createElement(me,g):null)},ge=["components"],ye={title:"Authentication",sidebar_position:2},fe=void 0,he={unversionedId:"authentication",id:"authentication",title:"Authentication",description:"In order to access Spotify's data, you will need a dedicated Spotify application (and, of course, a Spotify account).",source:"@site/docs/authentication.mdx",sourceDirName:".",slug:"/authentication",permalink:"/docs/authentication",editUrl:"https://github.com/eegli/spotifly/tree/main/docs/docs/authentication.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Authentication",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Command Line",permalink:"/docs/command-line"}},ve={},xe=[{value:"Getting an access token",id:"getting-an-access-token",level:2}],Se={toc:xe};function Ze(e){var t=e.components,o=(0,a.Z)(e,ge);return(0,r.kt)("wrapper",(0,n.Z)({},Se,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to access Spotify's data, you will need a dedicated Spotify application (and, of course, a Spotify account)."),(0,r.kt)("p",null,"If you don't have one already, click the link below and create one. It's free!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.spotify.com/dashboard/"},"https://developer.spotify.com/dashboard/"),"."),(0,r.kt)("h2",{id:"getting-an-access-token"},"Getting an access token"),(0,r.kt)("p",null,"Some of the packages require a short-lived user token. The helper below can be used to generate such a token that is bound to your Spotify application. Packages that require a token will list what scopes are needed."),(0,r.kt)("p",null,"Previously generated tokens are saved locally in your browser as long as their are valid (1h)."),(0,r.kt)(be,{mdxType:"AuthTokenForm"}))}Ze.isMDXComponent=!0}}]);