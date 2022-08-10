"use strict";(self.webpackChunk_spotifly_website=self.webpackChunk_spotifly_website||[]).push([[107],{4614:(e,o,t)=>{t.d(o,{Z:()=>L});var a=t(1244),n=t(2685),r=t(7378),l=t(2267),c=t(7818),i=t(8944),s=t(1640),d=t(5608),p=t(9780),u=t(6683),m=t(8045),b=t(6749),h=t(4124);function v(e){return(0,b.Z)("PrivateSwitchBase",e)}(0,h.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var f=t(4246);const Z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=(0,d.ZP)(m.Z)((({ownerState:e})=>(0,n.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),k=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=r.forwardRef((function(e,o){const{autoFocus:t,checked:r,checkedIcon:c,className:d,defaultChecked:m,disabled:b,disableFocusRipple:h=!1,edge:x=!1,icon:P,id:C,inputProps:y,inputRef:w,name:R,onBlur:F,onChange:S,onFocus:z,readOnly:B,required:I,tabIndex:$,type:j,value:L}=e,M=(0,a.Z)(e,Z),[N,O]=(0,p.Z)({controlled:r,default:Boolean(m),name:"SwitchBase",state:"checked"}),E=(0,u.Z)();let H=b;E&&void 0===H&&(H=E.disabled);const q="checkbox"===j||"radio"===j,T=(0,n.Z)({},e,{checked:N,disabled:H,disableFocusRipple:h,edge:x}),V=(e=>{const{classes:o,checked:t,disabled:a,edge:n}=e,r={root:["root",t&&"checked",a&&"disabled",n&&`edge${(0,s.Z)(n)}`],input:["input"]};return(0,l.Z)(r,v,o)})(T);return(0,f.jsxs)(g,(0,n.Z)({component:"span",className:(0,i.Z)(V.root,d),centerRipple:!0,focusRipple:!h,disabled:H,tabIndex:null,role:void 0,onFocus:e=>{z&&z(e),E&&E.onFocus&&E.onFocus(e)},onBlur:e=>{F&&F(e),E&&E.onBlur&&E.onBlur(e)},ownerState:T,ref:o},M,{children:[(0,f.jsx)(k,(0,n.Z)({autoFocus:t,checked:r,defaultChecked:m,className:V.input,disabled:H,id:q&&C,name:R,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const o=e.target.checked;O(o),S&&S(e,o)},readOnly:B,ref:w,required:I,ownerState:T,tabIndex:$,type:j},"checkbox"===j&&void 0===L?{}:{value:L},y)),N?c:P]}))}));var P=t(6576);const C=(0,P.Z)((0,f.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),y=(0,P.Z)((0,f.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),w=(0,P.Z)((0,f.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var R=t(6716);function F(e){return(0,b.Z)("MuiCheckbox",e)}const S=(0,h.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),z=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],B=(0,d.ZP)(x,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,"default"!==t.color&&o[`color${(0,s.Z)(t.color)}`]]}})((({theme:e,ownerState:o})=>(0,n.Z)({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===o.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)("default"===o.color?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&{[`&.${S.checked}, &.${S.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${S.disabled}`]:{color:(e.vars||e).palette.action.disabled}}))),I=(0,f.jsx)(y,{}),$=(0,f.jsx)(C,{}),j=(0,f.jsx)(w,{}),L=r.forwardRef((function(e,o){var t,c;const i=(0,R.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=I,color:p="primary",icon:u=$,indeterminate:m=!1,indeterminateIcon:b=j,inputProps:h,size:v="medium"}=i,Z=(0,a.Z)(i,z),g=m?b:u,k=m?b:d,x=(0,n.Z)({},i,{color:p,indeterminate:m,size:v}),P=(e=>{const{classes:o,indeterminate:t,color:a}=e,r={root:["root",t&&"indeterminate",`color${(0,s.Z)(a)}`]},c=(0,l.Z)(r,F,o);return(0,n.Z)({},o,c)})(x);return(0,f.jsx)(B,(0,n.Z)({type:"checkbox",inputProps:(0,n.Z)({"data-indeterminate":m},h),icon:r.cloneElement(g,{fontSize:null!=(t=g.props.fontSize)?t:v}),checkedIcon:r.cloneElement(k,{fontSize:null!=(c=k.props.fontSize)?c:v}),ownerState:x,ref:o},Z,{classes:P}))}))},3876:(e,o,t)=>{t.d(o,{Z:()=>k});var a=t(1244),n=t(2685),r=t(7378),l=t(8944),c=t(2267),i=t(6683),s=t(8389),d=t(1640),p=t(5608),u=t(6716),m=t(6749);function b(e){return(0,m.Z)("MuiFormControlLabel",e)}const h=(0,t(4124).Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]);var v=t(3567),f=t(4246);const Z=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],g=(0,p.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${h.label}`]:o.label},o.root,o[`labelPlacement${(0,d.Z)(t.labelPlacement)}`]]}})((({theme:e,ownerState:o})=>(0,n.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${h.disabled}`]:{cursor:"default"}},"start"===o.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===o.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===o.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${h.label}`]:{[`&.${h.disabled}`]:{color:(e.vars||e).palette.text.disabled}}}))),k=r.forwardRef((function(e,o){const t=(0,u.Z)({props:e,name:"MuiFormControlLabel"}),{className:p,componentsProps:m={},control:h,disabled:k,disableTypography:x,label:P,labelPlacement:C="end"}=t,y=(0,a.Z)(t,Z),w=(0,i.Z)();let R=k;void 0===R&&void 0!==h.props.disabled&&(R=h.props.disabled),void 0===R&&w&&(R=w.disabled);const F={disabled:R};["checked","name","onChange","value","inputRef"].forEach((e=>{void 0===h.props[e]&&void 0!==t[e]&&(F[e]=t[e])}));const S=(0,v.Z)({props:t,muiFormControl:w,states:["error"]}),z=(0,n.Z)({},t,{disabled:R,labelPlacement:C,error:S.error}),B=(e=>{const{classes:o,disabled:t,labelPlacement:a,error:n}=e,r={root:["root",t&&"disabled",`labelPlacement${(0,d.Z)(a)}`,n&&"error"],label:["label",t&&"disabled"]};return(0,c.Z)(r,b,o)})(z);let I=P;return null==I||I.type===s.Z||x||(I=(0,f.jsx)(s.Z,(0,n.Z)({component:"span",className:B.label},m.typography,{children:I}))),(0,f.jsxs)(g,(0,n.Z)({className:(0,l.Z)(B.root,p),ownerState:z,ref:o},y,{children:[r.cloneElement(h,F),I]}))}))}}]);