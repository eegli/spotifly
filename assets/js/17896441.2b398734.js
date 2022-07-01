"use strict";(self.webpackChunk_spotifly_docs=self.webpackChunk_spotifly_docs||[]).push([[918],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,v=u["".concat(c,".").concat(p)]||u[p]||d[p]||l;return n?a.createElement(v,i(i({ref:t},m),{},{components:n})):a.createElement(v,i({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5222:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ie}});var a=n(7294),r=n(6010),l=n(1944),i=n(7524),o=n(5281),c=n(7462),s=n(5999),m=n(9960);function d(e){const{permalink:t,title:n,subLabel:l,isNext:i}=e;return a.createElement(m.Z,{className:(0,r.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function u(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(d,(0,c.Z)({},t,{subLabel:a.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(d,(0,c.Z)({},n,{subLabel:a.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var p=n(2263),v=n(143),f=n(373),h=n(4477);const b={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function E(e){const t=b[e.versionMetadata.banner];return a.createElement(t,e)}function g(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(m.Z,{to:n,onClick:r},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function y(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,p.Z)(),{pluginId:i}=(0,v.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,f.J)(i),{latestDocSuggestion:s,latestVersionSuggestion:m}=(0,v.Jo)(i),d=null!=s?s:(u=m).docs.find((e=>e.id===u.mainDocId));var u;return a.createElement("div",{className:(0,r.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(E,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(g,{versionLabel:m.label,to:d.path,onClick:()=>c(m.name)})))}function N(e){let{className:t}=e;const n=(0,h.E)();return n.banner?a.createElement(y,{className:t,versionMetadata:n}):null}function L(e){let{className:t}=e;const n=(0,h.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,o.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function Z(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function _(e){let{lastUpdatedBy:t}=e;return a.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function k(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:r}=e;return a.createElement("span",{className:o.k.common.lastUpdated},a.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(Z,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(_,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var T="iconEdit_eYIM";function C(e){let{className:t,...n}=e;return a.createElement("svg",(0,c.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(T,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function x(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.k.common.editThisPage},a.createElement(C,null),a.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var w=n(3008),O="tags_jXut",H="tag_QGVx";function U(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(O,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:H},a.createElement(w.Z,{label:t,permalink:n}))}))))}var A="lastUpdated_vbeJ";function M(e){return a.createElement("div",{className:(0,r.Z)(o.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(U,e)))}function P(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:i}=e;return a.createElement("div",{className:(0,r.Z)(o.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(x,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",A)},(n||l)&&a.createElement(k,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function S(e){const{content:t}=e,{metadata:n}=t,{editUrl:l,lastUpdatedAt:i,formattedLastUpdatedAt:c,lastUpdatedBy:s,tags:m}=n,d=m.length>0,u=!!(l||i||s);return d||u?a.createElement("footer",{className:(0,r.Z)(o.k.docs.docFooter,"docusaurus-mt-lg")},d&&a.createElement(M,{tags:m}),u&&a.createElement(P,{editUrl:l,lastUpdatedAt:i,lastUpdatedBy:s,formattedLastUpdatedAt:c})):null}var I=n(6668);function B(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function j(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=j({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function D(e){const t=e.getBoundingClientRect();return t.top===t.bottom?D(e.parentNode):t}function V(e,t){var n;let{anchorTopOffset:a}=t;const r=e.find((e=>D(e).top>=a));if(r){var l;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(D(r))?r:null!=(l=e[e.indexOf(r)-1])?l:null}return null!=(n=e[e.length-1])?n:null}function R(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,I.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function z(e){const t=(0,a.useRef)(void 0),n=R();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=V(o,{anchorTopOffset:n.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function F(e){let{toc:t,className:n,linkClassName:r,isChild:l}=e;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(F,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}var q=a.memo(F);function W(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:i,maxHeadingLevel:o,...s}=e;const m=(0,I.L)(),d=null!=i?i:m.tableOfContents.minHeadingLevel,u=null!=o?o:m.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>j({toc:B(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:d,maxHeadingLevel:u});return z((0,a.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:d,maxHeadingLevel:u}}),[r,l,d,u])),a.createElement(q,(0,c.Z)({toc:p,className:n,linkClassName:r},s))}var G="tableOfContents_bqdL";function J(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,r.Z)(G,"thin-scrollbar",t)},a.createElement(W,(0,c.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var Y=n(6043),X="tocCollapsibleButton_TO0P",Q="tocCollapsibleButtonExpanded_MG3E";function K(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,c.Z)({type:"button"},n,{className:(0,r.Z)("clean-btn",X,!t&&Q,n.className)}),a.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var $="tocCollapsible_ETCw",ee="tocCollapsibleContent_vkbj",te="tocCollapsibleExpanded_sAul";function ne(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:i}=e;const{collapsed:o,toggleCollapsed:c}=(0,Y.u)({initialState:!0});return a.createElement("div",{className:(0,r.Z)($,!o&&te,n)},a.createElement(K,{collapsed:o,onClick:c}),a.createElement(Y.z,{lazy:!0,className:ee,collapsed:o},a.createElement(W,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}var ae="anchorWithStickyNavbar_LWe7",re="anchorWithHideOnScrollNavbar_WYt5";function le(e){let{as:t,id:n,...l}=e;const{navbar:{hideOnScroll:i}}=(0,I.L)();return"h1"!==t&&n?a.createElement(t,(0,c.Z)({},l,{className:(0,r.Z)("anchor",i?re:ae),id:n}),l.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,c.Z)({},l,{id:void 0}))}var ie=n(3438),oe=n(8596),ce=n(4996);function se(e){return a.createElement("svg",(0,c.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var me={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function de(e){let{children:t,href:n,isLast:r}=e;const l="breadcrumbs__link";return r?a.createElement("span",{className:l,itemProp:"name"},t):n?a.createElement(m.Z,{className:l,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:l},t)}function ue(e){let{children:t,active:n,index:l,addMicrodata:i}=e;return a.createElement("li",(0,c.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function pe(){const e=(0,ce.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(m.Z,{"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",me.breadcrumbsItemLink),href:e},a.createElement(se,{className:me.breadcrumbHomeIcon})))}function ve(){const e=(0,ie.s1)(),t=(0,oe.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(o.k.docs.docBreadcrumbs,me.breadcrumbsContainer),"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(pe,null),e.map(((t,n)=>{const r=n===e.length-1;return a.createElement(ue,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(de,{href:t.href,isLast:r},t.label))})))):null}var fe=n(3905),he=n(5742);var be=n(2554);var Ee=n(2389),ge="details_lb9f",ye="isBrowser_bmU9",Ne="collapsibleContent_i85q";function Le(e){return!!e&&("SUMMARY"===e.tagName||Le(e.parentElement))}function Ze(e,t){return!!e&&(e===t||Ze(e.parentElement,t))}function _e(e){let{summary:t,children:n,...l}=e;const i=(0,Ee.Z)(),o=(0,a.useRef)(null),{collapsed:s,setCollapsed:m}=(0,Y.u)({initialState:!l.open}),[d,u]=(0,a.useState)(l.open);return a.createElement("details",(0,c.Z)({},l,{ref:o,open:d,"data-collapsed":s,className:(0,r.Z)(ge,i&&ye,l.className),onMouseDown:e=>{Le(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Le(t)&&Ze(t,o.current)&&(e.preventDefault(),s?(m(!1),u(!0)):m(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(Y.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),u(!e)}},a.createElement("div",{className:Ne},n)))}var ke="details_b_Ee";function Te(e){let{...t}=e;return a.createElement(_e,(0,c.Z)({},t,{className:(0,r.Z)("alert alert--info",ke,t.className)}))}function Ce(e){return a.createElement(le,e)}var xe="containsTaskList_mC6p";var we="img_ev3q";var Oe={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(he.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)))?a.createElement("code",e):a.createElement(be.Z,e)},a:function(e){return a.createElement(m.Z,e)},pre:function(e){var t;return a.createElement(be.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(Te,(0,c.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,c.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&xe))}));var t},img:function(e){return a.createElement("img",(0,c.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,we))}));var t},h1:e=>a.createElement(Ce,(0,c.Z)({as:"h1"},e)),h2:e=>a.createElement(Ce,(0,c.Z)({as:"h2"},e)),h3:e=>a.createElement(Ce,(0,c.Z)({as:"h3"},e)),h4:e=>a.createElement(Ce,(0,c.Z)({as:"h4"},e)),h5:e=>a.createElement(Ce,(0,c.Z)({as:"h5"},e)),h6:e=>a.createElement(Ce,(0,c.Z)({as:"h6"},e))};function He(e){let{children:t}=e;return a.createElement(fe.Zo,{components:Oe},t)}var Ue="docItemContainer_Adtb",Ae="docItemCol_GujU",Me="tocMobile_aoJ5";function Pe(e){var t;const{content:n}=e,{metadata:r,frontMatter:i,assets:o}=n,{keywords:c}=i,{description:s,title:m}=r,d=null!=(t=o.image)?t:i.image;return a.createElement(l.d,{title:m,description:s,keywords:c,image:d})}function Se(e){const{content:t}=e,{metadata:n,frontMatter:l}=t,{hide_title:c,hide_table_of_contents:s,toc_min_heading_level:m,toc_max_heading_level:d}=l,{title:p}=n,v=!c&&void 0===t.contentTitle,f=(0,i.i)(),h=!s&&t.toc&&t.toc.length>0,b=h&&("desktop"===f||"ssr"===f);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!s&&Ae)},a.createElement(N,null),a.createElement("div",{className:Ue},a.createElement("article",null,a.createElement(ve,null),a.createElement(L,null),h&&a.createElement(ne,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:d,className:(0,r.Z)(o.k.docs.docTocMobile,Me)}),a.createElement("div",{className:(0,r.Z)(o.k.docs.docMarkdown,"markdown")},v&&a.createElement("header",null,a.createElement(le,{as:"h1"},p)),a.createElement(He,null,a.createElement(t,null))),a.createElement(S,e)),a.createElement(u,{previous:n.previous,next:n.next}))),b&&a.createElement("div",{className:"col col--3"},a.createElement(J,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:d,className:o.k.docs.docTocDesktop})))}function Ie(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(l.FG,{className:t},a.createElement(Pe,e),a.createElement(Se,e))}},3008:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),l=n(9960),i="tag_zVej",o="tagRegular_sFm0",c="tagWithCount_h2kH";function s(e){let{permalink:t,label:n,count:s}=e;return a.createElement(l.Z,{href:t,className:(0,r.Z)(i,s?c:o)},n,s&&a.createElement("span",null,s))}},4477:function(e,t,n){n.d(t,{E:function(){return o},q:function(){return i}});var a=n(7294),r=n(902);const l=a.createContext(null);function i(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function o(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);