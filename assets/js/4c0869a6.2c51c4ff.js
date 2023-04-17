"use strict";(self.webpackChunk_spotifly_website=self.webpackChunk_spotifly_website||[]).push([[74],{2599:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(7378),r=t(8944);const i="tabItem_wHwb";function s(n){let{children:e,hidden:t,className:s}=n;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:t},e)}},8447:(n,e,t)=>{t.d(e,{Z:()=>C});var a=t(2685),r=t(7378),i=t(8944),s=t(5331),o=t(8981),l=t(56),u=t(8796);function c(n){return function(n){var e,t;return null!=(e=null==(t=r.Children.map(n,(n=>{if(!n||(0,r.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?e:[]}(n).map((n=>{let{props:{value:e,label:t,attributes:a,default:r}}=n;return{value:e,label:t,attributes:a,default:r}}))}function p(n){const{values:e,children:t}=n;return(0,r.useMemo)((()=>{const n=null!=e?e:c(t);return function(n){const e=(0,l.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((n=>n.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(n),n}),[e,t])}function m(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function d(n){let{queryString:e=!1,groupId:t}=n;const a=(0,s.k6)(),i=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,o._X)(i),(0,r.useCallback)((n=>{if(!i)return;const e=new URLSearchParams(a.location.search);e.set(i,n),a.replace({...a.location,search:e.toString()})}),[i,a])]}function f(n){const{defaultValue:e,queryString:t=!1,groupId:a}=n,i=p(n),[s,o]=(0,r.useState)((()=>function(n){var e;let{defaultValue:t,tabValues:a}=n;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((n=>n.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(e=a.find((n=>n.default)))?e:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:i}))),[l,c]=d({queryString:t,groupId:a}),[f,b]=function(n){let{groupId:e}=n;const t=function(n){return n?"docusaurus.tab."+n:null}(e),[a,i]=(0,u.Nk)(t);return[a,(0,r.useCallback)((n=>{t&&i.set(n)}),[t,i])]}({groupId:a}),h=(()=>{const n=null!=l?l:f;return m({value:n,tabValues:i})?n:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:s,selectValue:(0,r.useCallback)((n=>{if(!m({value:n,tabValues:i}))throw new Error("Can't select invalid tab value="+n);o(n),c(n),b(n)}),[c,b,i]),tabValues:i}}var b=t(9169),h=t(362);const y="tabList_J5MA",v="tabItem_l0OV";function E(n){let{className:e,block:t,selectedValue:s,selectValue:o,tabValues:l}=n;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,b.o5)(),p=n=>{const e=n.currentTarget,t=u.indexOf(e),a=l[t].value;a!==s&&(c(e),o(a))},m=n=>{var e;let t=null;switch(n.key){case"Enter":p(n);break;case"ArrowRight":{var a;const e=u.indexOf(n.currentTarget)+1;t=null!=(a=u[e])?a:u[0];break}case"ArrowLeft":{var r;const e=u.indexOf(n.currentTarget)-1;t=null!=(r=u[e])?r:u[u.length-1];break}}null==(e=t)||e.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},e)},l.map((n=>{let{value:e,label:t,attributes:o}=n;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:n=>u.push(n),onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":s===e})}),null!=t?t:e)})))}function g(n){let{lazy:e,children:t,selectedValue:a}=n;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=i.find((n=>n.props.value===a));return n?(0,r.cloneElement)(n,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((n,e)=>(0,r.cloneElement)(n,{key:e,hidden:n.props.value!==a}))))}function M(n){const e=f(n);return r.createElement("div",{className:(0,i.Z)("tabs-container",y)},r.createElement(E,(0,a.Z)({},n,e)),r.createElement(g,(0,a.Z)({},n,e)))}function C(n){const e=(0,h.Z)();return r.createElement(M,(0,a.Z)({key:String(e)},n))}},7902:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=t(2685),r=(t(7378),t(5318)),i=t(8447),s=t(2599);const o={title:"Example Output",id:"example-output",hide_table_of_contents:!0},l=void 0,u={unversionedId:"packages/library/example-output",id:"packages/library/example-output",title:"Example Output",description:"",source:"@site/docs/packages/library/examples.mdx",sourceDirName:"packages/library",slug:"/packages/library/example-output",permalink:"/docs/packages/library/example-output",draft:!1,editUrl:"https://github.com/eegli/spotifly/tree/main/website/docs/packages/library/examples.mdx",tags:[],version:"current",frontMatter:{title:"Example Output",id:"example-output",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Library",permalink:"/docs/packages/library/"}},c={},p=[],m={toc:p};function d(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"output-light",label:"Light output",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "meta": {\n    "date_generated": "2022-01-09T09:19:57.534Z",\n    "output_type": "light"\n  },\n  "library": [\n    {\n      "added_at": "2021-12-06T17:17:57Z",\n      "track": {\n        "id": "6X6Ow0iioCrYQSK1QDHQbC",\n        "name": "The Age Of Love - Charlotte de Witte & Enrico Sangiuliano Remix",\n        "album": {\n          "id": "6Ozmnoay8pclUfUO8CWKLU",\n          "name": "The Age Of Love (Charlotte de Witte & Enrico Sangiuliano Remix)"\n        },\n        "artists": [\n          {\n            "id": "03tes5RhEvH2dX2eDeGnRn",\n            "name": "Age Of Love"\n          },\n          {\n            "id": "1lJhME1ZpzsEa5M0wW6Mso",\n            "name": "Charlotte de Witte"\n          },\n          {\n            "id": "1u7DsNFbakULvxnDGtMm90",\n            "name": "Enrico Sangiuliano"\n          }\n        ],\n        "genres": [\n          ["bubble trance"],\n          ["belgian techno", "electra"],\n          ["dark techno", "italian techno", "minimal techno", "tech house"]\n        ],\n        "features": {\n          "danceability": 0.748,\n          "energy": 0.909,\n          "key": 5,\n          "loudness": -8.322,\n          "mode": 0,\n          "speechiness": 0.0505,\n          "acousticness": 0.0576,\n          "instrumentalness": 0.89,\n          "liveness": 0.0945,\n          "valence": 0.0617,\n          "tempo": 130,\n          "type": "audio_features",\n          "id": "6X6Ow0iioCrYQSK1QDHQbC",\n          "uri": "spotify:track:6X6Ow0iioCrYQSK1QDHQbC",\n          "track_href": "https://api.spotify.com/v1/tracks/6X6Ow0iioCrYQSK1QDHQbC",\n          "analysis_url": "https://api.spotify.com/v1/audio-analysis/6X6Ow0iioCrYQSK1QDHQbC",\n          "duration_ms": 489480,\n          "time_signature": 4\n        }\n      }\n    }\n  ]\n}\n'))),(0,r.kt)(s.Z,{value:"output-full",label:"Full output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "meta": {\n    "date_generated": "2022-01-09T09:21:54.586Z",\n    "output_type": "full"\n  },\n  "library": [\n    {\n      "added_at": "2021-12-06T17:17:57Z",\n      "track": {\n        "album": {\n          "album_type": "single",\n          "artists": [\n            {\n              "external_urls": {\n                "spotify": "https://open.spotify.com/artist/03tes5RhEvH2dX2eDeGnRn"\n              },\n              "href": "https://api.spotify.com/v1/artists/03tes5RhEvH2dX2eDeGnRn",\n              "id": "03tes5RhEvH2dX2eDeGnRn",\n              "name": "Age Of Love",\n              "type": "artist",\n              "uri": "spotify:artist:03tes5RhEvH2dX2eDeGnRn"\n            },\n            {\n              "external_urls": {\n                "spotify": "https://open.spotify.com/artist/1lJhME1ZpzsEa5M0wW6Mso"\n              },\n              "href": "https://api.spotify.com/v1/artists/1lJhME1ZpzsEa5M0wW6Mso",\n              "id": "1lJhME1ZpzsEa5M0wW6Mso",\n              "name": "Charlotte de Witte",\n              "type": "artist",\n              "uri": "spotify:artist:1lJhME1ZpzsEa5M0wW6Mso"\n            },\n            {\n              "external_urls": {\n                "spotify": "https://open.spotify.com/artist/1u7DsNFbakULvxnDGtMm90"\n              },\n              "href": "https://api.spotify.com/v1/artists/1u7DsNFbakULvxnDGtMm90",\n              "id": "1u7DsNFbakULvxnDGtMm90",\n              "name": "Enrico Sangiuliano",\n              "type": "artist",\n              "uri": "spotify:artist:1u7DsNFbakULvxnDGtMm90"\n            }\n          ],\n          "available_markets": [\n            "AD",\n            "AE",\n            "AG",\n            "AL",\n            "AM",\n            "AO",\n            "AR",\n            "AT",\n            "AU",\n            "AZ",\n            "BA",\n            "BB",\n            "BD",\n            "BE",\n            "BF",\n            "BG",\n            "BH",\n            "BI",\n            "BJ",\n            "BN",\n            "BO",\n            "BR",\n            "BS",\n            "BT",\n            "BW",\n            "BY",\n            "BZ",\n            "CA",\n            "CD",\n            "CG",\n            "CH",\n            "CI",\n            "CL",\n            "CM",\n            "CO",\n            "CR",\n            "CV",\n            "CW",\n            "CY",\n            "CZ",\n            "DE",\n            "DJ",\n            "DK",\n            "DM",\n            "DO",\n            "DZ",\n            "EC",\n            "EE",\n            "EG",\n            "ES",\n            "FI",\n            "FJ",\n            "FM",\n            "FR",\n            "GA",\n            "GB",\n            "GD",\n            "GE",\n            "GH",\n            "GM",\n            "GN",\n            "GQ",\n            "GR",\n            "GT",\n            "GW",\n            "GY",\n            "HK",\n            "HN",\n            "HR",\n            "HT",\n            "HU",\n            "ID",\n            "IE",\n            "IL",\n            "IN",\n            "IQ",\n            "IS",\n            "IT",\n            "JM",\n            "JO",\n            "JP",\n            "KE",\n            "KG",\n            "KH",\n            "KI",\n            "KM",\n            "KN",\n            "KR",\n            "KW",\n            "KZ",\n            "LA",\n            "LB",\n            "LC",\n            "LI",\n            "LK",\n            "LR",\n            "LS",\n            "LT",\n            "LU",\n            "LV",\n            "LY",\n            "MA",\n            "MC",\n            "MD",\n            "ME",\n            "MG",\n            "MH",\n            "MK",\n            "ML",\n            "MN",\n            "MO",\n            "MR",\n            "MT",\n            "MU",\n            "MV",\n            "MW",\n            "MX",\n            "MY",\n            "MZ",\n            "NA",\n            "NE",\n            "NG",\n            "NI",\n            "NL",\n            "NO",\n            "NP",\n            "NR",\n            "NZ",\n            "OM",\n            "PA",\n            "PE",\n            "PG",\n            "PH",\n            "PK",\n            "PL",\n            "PS",\n            "PT",\n            "PW",\n            "PY",\n            "QA",\n            "RO",\n            "RS",\n            "RU",\n            "RW",\n            "SA",\n            "SB",\n            "SC",\n            "SE",\n            "SG",\n            "SI",\n            "SK",\n            "SL",\n            "SM",\n            "SN",\n            "SR",\n            "ST",\n            "SV",\n            "SZ",\n            "TD",\n            "TG",\n            "TH",\n            "TJ",\n            "TL",\n            "TN",\n            "TO",\n            "TR",\n            "TT",\n            "TV",\n            "TW",\n            "TZ",\n            "UA",\n            "UG",\n            "US",\n            "UY",\n            "UZ",\n            "VC",\n            "VE",\n            "VN",\n            "VU",\n            "WS",\n            "XK",\n            "ZA",\n            "ZM",\n            "ZW"\n          ],\n          "external_urls": {\n            "spotify": "https://open.spotify.com/album/6Ozmnoay8pclUfUO8CWKLU"\n          },\n          "href": "https://api.spotify.com/v1/albums/6Ozmnoay8pclUfUO8CWKLU",\n          "id": "6Ozmnoay8pclUfUO8CWKLU",\n          "images": [\n            {\n              "height": 640,\n              "url": "https://i.scdn.co/image/ab67616d0000b273c0eed84753e3e6a37e1b064e",\n              "width": 640\n            },\n            {\n              "height": 300,\n              "url": "https://i.scdn.co/image/ab67616d00001e02c0eed84753e3e6a37e1b064e",\n              "width": 300\n            },\n            {\n              "height": 64,\n              "url": "https://i.scdn.co/image/ab67616d00004851c0eed84753e3e6a37e1b064e",\n              "width": 64\n            }\n          ],\n          "name": "The Age Of Love (Charlotte de Witte & Enrico Sangiuliano Remix)",\n          "release_date": "2021-08-13",\n          "release_date_precision": "day",\n          "total_tracks": 1,\n          "type": "album",\n          "uri": "spotify:album:6Ozmnoay8pclUfUO8CWKLU"\n        },\n        "artists": [\n          {\n            "external_urls": {\n              "spotify": "https://open.spotify.com/artist/03tes5RhEvH2dX2eDeGnRn"\n            },\n            "href": "https://api.spotify.com/v1/artists/03tes5RhEvH2dX2eDeGnRn",\n            "id": "03tes5RhEvH2dX2eDeGnRn",\n            "name": "Age Of Love",\n            "type": "artist",\n            "uri": "spotify:artist:03tes5RhEvH2dX2eDeGnRn"\n          },\n          {\n            "external_urls": {\n              "spotify": "https://open.spotify.com/artist/1lJhME1ZpzsEa5M0wW6Mso"\n            },\n            "href": "https://api.spotify.com/v1/artists/1lJhME1ZpzsEa5M0wW6Mso",\n            "id": "1lJhME1ZpzsEa5M0wW6Mso",\n            "name": "Charlotte de Witte",\n            "type": "artist",\n            "uri": "spotify:artist:1lJhME1ZpzsEa5M0wW6Mso"\n          },\n          {\n            "external_urls": {\n              "spotify": "https://open.spotify.com/artist/1u7DsNFbakULvxnDGtMm90"\n            },\n            "href": "https://api.spotify.com/v1/artists/1u7DsNFbakULvxnDGtMm90",\n            "id": "1u7DsNFbakULvxnDGtMm90",\n            "name": "Enrico Sangiuliano",\n            "type": "artist",\n            "uri": "spotify:artist:1u7DsNFbakULvxnDGtMm90"\n          }\n        ],\n        "available_markets": [\n          "AD",\n          "AE",\n          "AG",\n          "AL",\n          "AM",\n          "AO",\n          "AR",\n          "AT",\n          "AU",\n          "AZ",\n          "BA",\n          "BB",\n          "BD",\n          "BE",\n          "BF",\n          "BG",\n          "BH",\n          "BI",\n          "BJ",\n          "BN",\n          "BO",\n          "BR",\n          "BS",\n          "BT",\n          "BW",\n          "BY",\n          "BZ",\n          "CA",\n          "CD",\n          "CG",\n          "CH",\n          "CI",\n          "CL",\n          "CM",\n          "CO",\n          "CR",\n          "CV",\n          "CW",\n          "CY",\n          "CZ",\n          "DE",\n          "DJ",\n          "DK",\n          "DM",\n          "DO",\n          "DZ",\n          "EC",\n          "EE",\n          "EG",\n          "ES",\n          "FI",\n          "FJ",\n          "FM",\n          "FR",\n          "GA",\n          "GB",\n          "GD",\n          "GE",\n          "GH",\n          "GM",\n          "GN",\n          "GQ",\n          "GR",\n          "GT",\n          "GW",\n          "GY",\n          "HK",\n          "HN",\n          "HR",\n          "HT",\n          "HU",\n          "ID",\n          "IE",\n          "IL",\n          "IN",\n          "IQ",\n          "IS",\n          "IT",\n          "JM",\n          "JO",\n          "JP",\n          "KE",\n          "KG",\n          "KH",\n          "KI",\n          "KM",\n          "KN",\n          "KR",\n          "KW",\n          "KZ",\n          "LA",\n          "LB",\n          "LC",\n          "LI",\n          "LK",\n          "LR",\n          "LS",\n          "LT",\n          "LU",\n          "LV",\n          "LY",\n          "MA",\n          "MC",\n          "MD",\n          "ME",\n          "MG",\n          "MH",\n          "MK",\n          "ML",\n          "MN",\n          "MO",\n          "MR",\n          "MT",\n          "MU",\n          "MV",\n          "MW",\n          "MX",\n          "MY",\n          "MZ",\n          "NA",\n          "NE",\n          "NG",\n          "NI",\n          "NL",\n          "NO",\n          "NP",\n          "NR",\n          "NZ",\n          "OM",\n          "PA",\n          "PE",\n          "PG",\n          "PH",\n          "PK",\n          "PL",\n          "PS",\n          "PT",\n          "PW",\n          "PY",\n          "QA",\n          "RO",\n          "RS",\n          "RU",\n          "RW",\n          "SA",\n          "SB",\n          "SC",\n          "SE",\n          "SG",\n          "SI",\n          "SK",\n          "SL",\n          "SM",\n          "SN",\n          "SR",\n          "ST",\n          "SV",\n          "SZ",\n          "TD",\n          "TG",\n          "TH",\n          "TJ",\n          "TL",\n          "TN",\n          "TO",\n          "TR",\n          "TT",\n          "TV",\n          "TW",\n          "TZ",\n          "UA",\n          "UG",\n          "US",\n          "UY",\n          "UZ",\n          "VC",\n          "VE",\n          "VN",\n          "VU",\n          "WS",\n          "XK",\n          "ZA",\n          "ZM",\n          "ZW"\n        ],\n        "disc_number": 1,\n        "duration_ms": 489480,\n        "explicit": false,\n        "external_ids": {\n          "isrc": "BEN582100445"\n        },\n        "external_urls": {\n          "spotify": "https://open.spotify.com/track/6X6Ow0iioCrYQSK1QDHQbC"\n        },\n        "href": "https://api.spotify.com/v1/tracks/6X6Ow0iioCrYQSK1QDHQbC",\n        "id": "6X6Ow0iioCrYQSK1QDHQbC",\n        "is_local": false,\n        "name": "The Age Of Love - Charlotte de Witte & Enrico Sangiuliano Remix",\n        "popularity": 68,\n        "preview_url": "https://p.scdn.co/mp3-preview/4780ea982916a094f338b7af896e96e12cccdf44?cid=38b0480fd0224dc187294a0730ee8098",\n        "track_number": 1,\n        "type": "track",\n        "uri": "spotify:track:6X6Ow0iioCrYQSK1QDHQbC",\n        "genres": [\n          ["bubble trance"],\n          ["belgian techno", "electra"],\n          ["dark techno", "italian techno", "minimal techno", "tech house"]\n        ],\n        "features": {\n          "danceability": 0.748,\n          "energy": 0.909,\n          "key": 5,\n          "loudness": -8.322,\n          "mode": 0,\n          "speechiness": 0.0505,\n          "acousticness": 0.0576,\n          "instrumentalness": 0.89,\n          "liveness": 0.0945,\n          "valence": 0.0617,\n          "tempo": 130,\n          "type": "audio_features",\n          "id": "6X6Ow0iioCrYQSK1QDHQbC",\n          "uri": "spotify:track:6X6Ow0iioCrYQSK1QDHQbC",\n          "track_href": "https://api.spotify.com/v1/tracks/6X6Ow0iioCrYQSK1QDHQbC",\n          "analysis_url": "https://api.spotify.com/v1/audio-analysis/6X6Ow0iioCrYQSK1QDHQbC",\n          "duration_ms": 489480,\n          "time_signature": 4\n        }\n      }\n    }\n  ]\n}\n')))))}d.isMDXComponent=!0},5318:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>d});var a=t(7378);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=a.createContext({}),u=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},c=function(n){var e=u(n.components);return a.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,l=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),m=u(t),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(f,s(s({ref:e},c),{},{components:t})):a.createElement(f,s({ref:e},c))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o.mdxType="string"==typeof n?n:r,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);