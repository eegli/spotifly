(self.webpackChunk_spotifly_docs=self.webpackChunk_spotifly_docs||[]).push([[237],{9592:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},3007:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(9939),i=n(5310),o=n(8845),a=n(7378),l=n(2685),c=n(5923),u=n(1067),s=n(9551),d=n(1244),m=n(8944),f=n(3892),h=n(7818),p=n(5608),g=n(6716),v=n(8062),Z=n(4246);const b=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],x=(0,p.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,l.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,h.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,l.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,l.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,l.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),w=(0,p.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,l.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})));var y=a.forwardRef((function(e,t){const n=(0,g.Z)({props:e,name:"MuiDivider"}),{absolute:r=!1,children:i,className:o,component:a=(i?"div":"hr"),flexItem:c=!1,light:u=!1,orientation:s="horizontal",role:h=("hr"!==a?"separator":void 0),textAlign:p="center",variant:y="fullWidth"}=n,E=(0,d.Z)(n,b),C=(0,l.Z)({},n,{absolute:r,component:a,flexItem:c,light:u,orientation:s,role:h,textAlign:p,variant:y}),S=(e=>{const{absolute:t,children:n,classes:r,flexItem:i,light:o,orientation:a,textAlign:l,variant:c}=e,u={root:["root",t&&"absolute",c,o&&"light","vertical"===a&&"vertical",i&&"flexItem",n&&"withChildren",n&&"vertical"===a&&"withChildrenVertical","right"===l&&"vertical"!==a&&"textAlignRight","left"===l&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,f.Z)(u,v.V,r)})(C);return(0,Z.jsx)(x,(0,l.Z)({as:a,className:(0,m.Z)(S.root,o),role:h,ref:t,ownerState:C},E,{children:i?(0,Z.jsx)(w,{className:S.wrapper,ownerState:C,children:i}):null}))})),E=[{title:"Easy to Use",image:a.createElement(c.Z,null),description:a.createElement(a.Fragment,null,"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.")},{title:"Focus on What Matters",image:a.createElement(u.Z,null),description:a.createElement(a.Fragment,null,"Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the ",a.createElement("code",null,"docs")," directory.")},{title:"Powered by React",image:a.createElement(s.Z,null),description:a.createElement(a.Fragment,null,"Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.")}];function C(e){var t=e.title,n=e.image,r=e.description;return a.createElement(i.Z,null,a.createElement(i.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",my:2,color:"primary.main"}},n),a.createElement(i.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},a.createElement("h3",null,t),a.createElement("p",null,r)))}function S(){return a.createElement(i.Z,{component:"section",padding:2},E.map((function(e,t){return a.createElement(a.Fragment,null,a.createElement(C,(0,l.Z)({key:t},e)),a.createElement(y,{flexItem:!0}))})))}var I=n(9303);function M(){var e=(0,r.Z)().siteConfig;return a.createElement(i.Z,{component:"header",display:"flex",sx:{justifyContent:"center",flexDirection:"column",alignItems:"center",padding:4,backgroundColor:"primary.main",color:"primary.contrastText"}},a.createElement(i.Z,{component:"h1",fontSize:"4rem"},e.title),a.createElement(i.Z,{component:"p",fontSize:"1.5rem"},e.tagline))}function k(){var e=(0,r.Z)().siteConfig;return a.createElement(o.Z,{title:"Explore "+e.title,description:"Description will go into a meta tag in <head />"},a.createElement(I.C,null,a.createElement(i.Z,{id:"main",my:"auto",height:"100%",display:"flex",flexDirection:"column"},a.createElement(M,null),a.createElement(i.Z,{component:"main",flexGrow:1,height:"100%"},a.createElement(S,null)))))}},9303:function(e,t,n){"use strict";n.d(t,{C:function(){return l}});var r=n(7927),i=n(2905),o=n(9703),a=n(7378),l=function(e){var t=e.children,n=(0,r.If)().colorMode,l=(0,a.useMemo)((function(){return(0,i.Z)(function(e){return{palette:Object.assign({mode:e},"light"===e?{primary:{main:"#4a44a2",light:"#514bb2",dark:"#433d92"}}:{primary:{main:"#e6b2e2",light:"#f0d1ee",dark:"#dc93d6"}})}}(n))}),[n]);return a.createElement(o.Z,{theme:l},t)}},5923:function(e,t,n){"use strict";var r=n(9592);t.Z=void 0;var i=r(n(9124)),o=n(4246),a=(0,i.default)((0,o.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen");t.Z=a},1067:function(e,t,n){"use strict";var r=n(9592);t.Z=void 0;var i=r(n(9124)),o=n(4246),a=(0,i.default)((0,o.jsx)("path",{d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"}),"MusicNote");t.Z=a},9551:function(e,t,n){"use strict";var r=n(9592);t.Z=void 0;var i=r(n(9124)),o=n(4246),a=(0,i.default)((0,o.jsx)("path",{d:"M17.41 6.59 15 5.5l2.41-1.09L18.5 2l1.09 2.41L22 5.5l-2.41 1.09L18.5 9l-1.09-2.41zm3.87 6.13L20.5 11l-.78 1.72-1.72.78 1.72.78.78 1.72.78-1.72L23 13.5l-1.72-.78zm-5.04 1.65 1.94 1.47-2.5 4.33-2.24-.94c-.2.13-.42.26-.64.37l-.3 2.4h-5l-.3-2.41c-.22-.11-.43-.23-.64-.37l-2.24.94-2.5-4.33 1.94-1.47c-.01-.11-.01-.24-.01-.36s0-.25.01-.37l-1.94-1.47 2.5-4.33 2.24.94c.2-.13.42-.26.64-.37L7.5 6h5l.3 2.41c.22.11.43.23.64.37l2.24-.94 2.5 4.33-1.94 1.47c.01.12.01.24.01.37s0 .24-.01.36zM13 14c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3z"}),"SettingsSuggest");t.Z=a},9124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(999)},999:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return i.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return a.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return u.Z},ownerDocument:function(){return s.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return m},setRef:function(){return f},unstable_ClassNameGenerator:function(){return w},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return p},unsupportedProp:function(){return g},useControlled:function(){return v.Z},useEventCallback:function(){return Z.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return x.Z}});var r=n(4907),i=n(1640),o=n(6397).Z,a=n(6576),l=n(7999);var c=function(e,t){return()=>null},u=n(4942),s=n(2444),d=n(4255);n(2685);var m=function(e,t){return()=>null},f=n(514).Z,h=n(6758),p=n(6320).Z;var g=function(e,t,n,r,i){return null},v=n(9780),Z=n(7151),b=n(1183),x=n(285);const w={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}}}]);