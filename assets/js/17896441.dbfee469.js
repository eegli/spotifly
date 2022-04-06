"use strict";(self.webpackChunk_spotifly_docs=self.webpackChunk_spotifly_docs||[]).push([[918],{6263:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ee}});var n=a(7378),r=a(8944),l=a(2685),i=a(7419),s=a(1191);function c(e){var t=e.permalink,a=e.title,r=e.subLabel;return n.createElement(s.Z,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}function o(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(c,(0,l.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(c,(0,l.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var m=a(9939),d=a(8949),u=a(7927);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function f(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:r},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){var t,a=e.className,l=e.versionMetadata,i=(0,m.Z)().siteConfig.title,s=(0,d.gA)({failfast:!0}).pluginId,c=(0,u.J)(s).savePreferredVersionName,o=(0,d.Jo)(s),v=o.latestDocSuggestion,b=o.latestVersionSuggestion,h=null!=v?v:(t=b).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(p,{siteTitle:i,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:b.label,to:h.path,onClick:function(){return c(b.name)}})))}function h(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(b,{className:t,versionMetadata:a}):null}function g(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function E(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function y(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(y,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var Z=a(1244),_="iconEdit_OMbO",k=["className"];function L(e){var t=e.className,a=(0,Z.Z)(e,k);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(_,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function T(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(L,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var C=a(3953),O="tags_WPdo",w="tag_XHyC";function U(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(O,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:w},n.createElement(C.Z,{name:t,permalink:a}))}))))}var x="lastUpdated_vA0S";function A(e){return n.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(U,e)))}function M(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",x)},(a||l)&&n.createElement(N,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function P(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,c=t.tags,o=c.length>0,m=!!(a||l||s);return o||m?n.createElement("footer",{className:(0,r.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(A,{tags:c}),m&&n.createElement(M,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var H=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function j(e){var t=e.toc,a=e.className,r=e.linkClassName,l=e.isChild;return t.length?n.createElement("ul",{className:l?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(j,{isChild:!0,toc:e.children,className:a,linkClassName:r}))}))):null}function S(e){var t=e.toc,a=e.className,r=void 0===a?"table-of-contents table-of-contents__left-border":a,i=e.linkClassName,s=void 0===i?"table-of-contents__link":i,c=e.linkActiveClassName,o=void 0===c?void 0:c,m=e.minHeadingLevel,d=e.maxHeadingLevel,v=(0,Z.Z)(e,H),p=(0,u.LU)(),f=null!=m?m:p.tableOfContents.minHeadingLevel,b=null!=d?d:p.tableOfContents.maxHeadingLevel,h=(0,u.b9)({toc:t,minHeadingLevel:f,maxHeadingLevel:b}),g=(0,n.useMemo)((function(){if(s&&o)return{linkClassName:s,linkActiveClassName:o,minHeadingLevel:f,maxHeadingLevel:b}}),[s,o,f,b]);return(0,u.Si)(g),n.createElement(j,(0,l.Z)({toc:h,className:r,linkClassName:s},v))}var B="tableOfContents_jWtb",D=["className"];function V(e){var t=e.className,a=(0,Z.Z)(e,D);return n.createElement("div",{className:(0,r.Z)(B,"thin-scrollbar",t)},n.createElement(S,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var I="tocCollapsible_aX8Q",F="tocCollapsibleButton_Va7b",z="tocCollapsibleContent_EOAA",R="tocCollapsibleExpanded_mrpG";function W(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,s=e.maxHeadingLevel,c=(0,u.uR)({initialState:!0}),o=c.collapsed,m=c.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(I,!o&&R,a)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",F),onClick:m},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:z,collapsed:o},n.createElement(S,{toc:t,minHeadingLevel:l,maxHeadingLevel:s})))}var G="anchorWithStickyNavbar_YDjN",J="anchorWithHideOnScrollNavbar_c5FC",X=["as","id"],q=["as"];function Y(e){var t=e.as,a=e.id,s=(0,Z.Z)(e,X),c=(0,u.LU)().navbar.hideOnScroll;return a?n.createElement(t,(0,l.Z)({},s,{className:(0,r.Z)("anchor",c?J:G),id:a}),s.children,n.createElement("a",{className:"hash-link",href:"#"+a,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):n.createElement(t,s)}function K(e){var t=e.as,a=(0,Z.Z)(e,q);return"h1"===t?n.createElement("h1",(0,l.Z)({},a,{id:void 0}),a.children):n.createElement(Y,(0,l.Z)({as:t},a))}var Q="docItemContainer_yJzi",$="docItemCol_ygLL",ee="tocMobile_By44",te={breadcrumbsContainer:"breadcrumbsContainer_nmcO"},ae=a(1847);function ne(e){var t=e.children,a=e.href,r="breadcrumbs__link";return a?n.createElement(s.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r,itemProp:"item name"},t)}function re(e){var t=e.children,a=e.active,l=e.index;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function le(){var e=(0,ae.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(s.Z,{className:(0,r.Z)("breadcrumbs__link",te.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function ie(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,r.Z)(u.kM.docs.docBreadcrumbs,te.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(le,null),e.map((function(t,a){return n.createElement(re,{key:a,active:a===e.length-1,index:a},n.createElement(ne,{href:a<e.length-1?t.href:void 0},t.label))})))):null}var se=a(5318),ce=a(2750),oe=["mdxType","originalType"];var me=a(9626);var de="details_TBmf";function ue(e){var t=Object.assign({},e);return n.createElement(u.PO,(0,l.Z)({},t,{className:(0,r.Z)("alert alert--info",de,t.className)}))}function ve(e){return n.createElement(K,e)}var pe="img_PFMr";var fe={head:function(e){var t=n.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,Z.Z)(r,oe));return n.createElement(e.props.originalType,l)}return e}(e)}));return n.createElement(ce.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return n.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,n.isValidElement)(e)&&t.includes(e.props.mdxType)}))?n.createElement("code",e):n.createElement(me.Z,e)},a:function(e){return n.createElement(s.Z,e)},pre:function(e){var t;return n.createElement(me.Z,(0,n.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=n.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=n.createElement(n.Fragment,null,t.filter((function(e){return e!==a})));return n.createElement(ue,(0,l.Z)({},e,{summary:a}),r)},ul:function(e){return n.createElement("ul",(0,l.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_O40l"))}));var t},img:function(e){return n.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,pe))}));var t},h1:function(e){return n.createElement(ve,(0,l.Z)({as:"h1"},e))},h2:function(e){return n.createElement(ve,(0,l.Z)({as:"h2"},e))},h3:function(e){return n.createElement(ve,(0,l.Z)({as:"h3"},e))},h4:function(e){return n.createElement(ve,(0,l.Z)({as:"h4"},e))},h5:function(e){return n.createElement(ve,(0,l.Z)({as:"h5"},e))},h6:function(e){return n.createElement(ve,(0,l.Z)({as:"h6"},e))}};function be(e){var t=e.children;return n.createElement(se.Zo,{components:fe},t)}function he(e){var t,a=e.content,r=a.metadata,l=a.frontMatter,i=a.assets,s=l.keywords,c=r.description,o=r.title,m=null!=(t=i.image)?t:l.image;return n.createElement(u.d,{title:o,description:c,keywords:s,image:m})}function ge(e){var t=e.content,a=t.metadata,l=t.frontMatter,i=l.hide_title,s=l.hide_table_of_contents,c=l.toc_min_heading_level,m=l.toc_max_heading_level,d=a.title,v=!i&&void 0===t.contentTitle,p=(0,u.iP)(),f=!s&&t.toc&&t.toc.length>0,b=f&&("desktop"===p||"ssr"===p);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",!s&&$)},n.createElement(h,null),n.createElement("div",{className:Q},n.createElement("article",null,n.createElement(ie,null),n.createElement(g,null),f&&n.createElement(W,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:m,className:(0,r.Z)(u.kM.docs.docTocMobile,ee)}),n.createElement("div",{className:(0,r.Z)(u.kM.docs.docMarkdown,"markdown")},v&&n.createElement("header",null,n.createElement(K,{as:"h1"},d)),n.createElement(be,null,n.createElement(t,null))),n.createElement(P,e)),n.createElement(o,{previous:a.previous,next:a.next}))),b&&n.createElement("div",{className:"col col--3"},n.createElement(V,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:m,className:u.kM.docs.docTocDesktop})))}function Ee(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(u.FG,{className:t},n.createElement(he,e),n.createElement(ge,e))}},3953:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7378),r=a(8944),l=a(1191),i="tag_VWGF",s="tagRegular_sIPu",c="tagWithCount_YgKf";function o(e){var t=e.permalink,a=e.name,o=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(i,o?c:s)},a,o&&n.createElement("span",null,o))}},5318:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return v}});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=o(a),v=r,p=u["".concat(c,".").concat(v)]||u[v]||d[v]||l;return a?n.createElement(p,i(i({ref:t},m),{},{components:a})):n.createElement(p,i({ref:t},m))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);