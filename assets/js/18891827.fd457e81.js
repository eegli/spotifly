"use strict";(self.webpackChunk_spotifly_docs=self.webpackChunk_spotifly_docs||[]).push([[81],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4826:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(7462),i=(n(7294),n(3905));const o={title:"Overview",sidebar_position:1,hide_table_of_contents:!1},a=void 0,l={unversionedId:"overview",id:"overview",title:"Overview",description:"Spotifly facilitates some common interactions with Spotify's API and services.",source:"@site/docs/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,editUrl:"https://github.com/eegli/spotifly/tree/main/docs/docs/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1,hide_table_of_contents:!1},sidebar:"tutorialSidebar",next:{title:"Authorization",permalink:"/docs/authorization"}},s={},p=[{value:"@spotifly/auth-token npm",id:"spotiflyauth-token-npm",level:3},{value:"@spotifly/library npm",id:"spotiflylibrary-npm",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Spotifly facilitates some common interactions with Spotify's API and services."),(0,i.kt)("h3",{id:"spotiflyauth-token-npm"},(0,i.kt)("a",{parentName:"h3",href:"/docs/packages/auth-token"},"@spotifly/auth-token")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/npm/v/@spotifly/auth-token",alt:"npm"})),(0,i.kt)("p",null,"Easily retrieve Spotify authentication/refresh tokens that are suitable to run in independent apps."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Command Line Interface \u2705"),(0,i.kt)("li",{parentName:"ul"},"Programmatic use \u2705")),(0,i.kt)("h3",{id:"spotiflylibrary-npm"},(0,i.kt)("a",{parentName:"h3",href:"/docs/packages/library"},"@spotifly/library")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/npm/v/@spotifly/library",alt:"npm"})),(0,i.kt)("p",null,"Export your Spotify user library to JSON."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Command Line Interface \u2705"),(0,i.kt)("li",{parentName:"ul"},"Programmatic use \u274c")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All packages that support a CLI can either be used with Spotifly's wrapper CLI or as standalone executable."))))}u.isMDXComponent=!0}}]);