"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[944],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),N=m(n),u=l,g=N["".concat(o,".").concat(u)]||N[u]||k[u]||r;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function u(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=N;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},1397:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return k}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],d={title:"Search Matchers"},o=void 0,m={unversionedId:"getting-started/search-matches",id:"getting-started/search-matches",title:"Search Matchers",description:"Search Matchers",source:"@site/docs/getting-started/search-matches.md",sourceDirName:"getting-started",slug:"/getting-started/search-matches",permalink:"/ransack/getting-started/search-matches",editUrl:"https://github.com/activerecord-hackery/ransack/docs/docs/docs/getting-started/search-matches.md",tags:[],version:"current",frontMatter:{title:"Search Matchers"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/ransack/getting-started/configuration"},next:{title:"Sorting",permalink:"/ransack/getting-started/sorting"}},p={},k=[{value:"Search Matchers",id:"search-matchers",level:3}],N={toc:k};function u(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"search-matchers"},"Search Matchers"),(0,r.kt)("p",null,"List of all possible predicates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Predicate"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_eq")),(0,r.kt)("td",{parentName:"tr",align:null},"equal"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_eq")),(0,r.kt)("td",{parentName:"tr",align:null},"not equal"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_matches")),(0,r.kt)("td",{parentName:"tr",align:null},"matches with ",(0,r.kt)("inlineCode",{parentName:"td"},"LIKE")),(0,r.kt)("td",{parentName:"tr",align:null},"e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"q[email_matches]=%@gmail.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_does_not_match")),(0,r.kt)("td",{parentName:"tr",align:null},"does not match with ",(0,r.kt)("inlineCode",{parentName:"td"},"LIKE")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_matches_any")),(0,r.kt)("td",{parentName:"tr",align:null},"Matches any"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_matches_all")),(0,r.kt)("td",{parentName:"tr",align:null},"Matches all"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_does_not_match_any")),(0,r.kt)("td",{parentName:"tr",align:null},"Does not match any"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_does_not_match_all")),(0,r.kt)("td",{parentName:"tr",align:null},"Does not match all"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_lt")),(0,r.kt)("td",{parentName:"tr",align:null},"less than"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_lteq")),(0,r.kt)("td",{parentName:"tr",align:null},"less than or equal"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_gt")),(0,r.kt)("td",{parentName:"tr",align:null},"greater than"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_gteq")),(0,r.kt)("td",{parentName:"tr",align:null},"greater than or equal"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_present")),(0,r.kt)("td",{parentName:"tr",align:null},"not null and not empty"),(0,r.kt)("td",{parentName:"tr",align:null},"Only compatible with string columns. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"q[name_present]=1")," (SQL: ",(0,r.kt)("inlineCode",{parentName:"td"},"col is not null AND col != ''"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_blank")),(0,r.kt)("td",{parentName:"tr",align:null},"is null or empty."),(0,r.kt)("td",{parentName:"tr",align:null},"(SQL: ",(0,r.kt)("inlineCode",{parentName:"td"},"col is null OR col = ''"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_null")),(0,r.kt)("td",{parentName:"tr",align:null},"is null"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_null")),(0,r.kt)("td",{parentName:"tr",align:null},"is not null"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_in")),(0,r.kt)("td",{parentName:"tr",align:null},"match any values in array"),(0,r.kt)("td",{parentName:"tr",align:null},"e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"q[name_in][]=Alice&q[name_in][]=Bob"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_in")),(0,r.kt)("td",{parentName:"tr",align:null},"match none of values in array"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_lt_any")),(0,r.kt)("td",{parentName:"tr",align:null},"Less than any"),(0,r.kt)("td",{parentName:"tr",align:null},"SQL: ",(0,r.kt)("inlineCode",{parentName:"td"},"col < value1 OR col < value2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_lteq_any")),(0,r.kt)("td",{parentName:"tr",align:null},"Less than or equal to any"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_gt_any")),(0,r.kt)("td",{parentName:"tr",align:null},"Greater than any"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_gteq_any")),(0,r.kt)("td",{parentName:"tr",align:null},"Greater than or equal to any"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_lt_all")),(0,r.kt)("td",{parentName:"tr",align:null},"Less than all"),(0,r.kt)("td",{parentName:"tr",align:null},"SQL: ",(0,r.kt)("inlineCode",{parentName:"td"},"col < value1 AND col < value2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_lteq_all")),(0,r.kt)("td",{parentName:"tr",align:null},"Less than or equal to all"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_gt_all")),(0,r.kt)("td",{parentName:"tr",align:null},"Greater than all"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_gteq_all")),(0,r.kt)("td",{parentName:"tr",align:null},"Greater than or equal to all"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_eq_all")),(0,r.kt)("td",{parentName:"tr",align:null},"none of values in a set"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_start")),(0,r.kt)("td",{parentName:"tr",align:null},"Starts with"),(0,r.kt)("td",{parentName:"tr",align:null},"SQL: ",(0,r.kt)("inlineCode",{parentName:"td"},"col LIKE 'value%'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_start")),(0,r.kt)("td",{parentName:"tr",align:null},"Does not start with"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_start_any")),(0,r.kt)("td",{parentName:"tr",align:null},"Starts with any of"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_start_all")),(0,r.kt)("td",{parentName:"tr",align:null},"Starts with all of"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_start_any")),(0,r.kt)("td",{parentName:"tr",align:null},"Does not start with any of"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_start_all")),(0,r.kt)("td",{parentName:"tr",align:null},"Does not start with all of"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_end")),(0,r.kt)("td",{parentName:"tr",align:null},"Ends with"),(0,r.kt)("td",{parentName:"tr",align:null},"SQL: ",(0,r.kt)("inlineCode",{parentName:"td"},"col LIKE '%value'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_end")),(0,r.kt)("td",{parentName:"tr",align:null},"Does not end with"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_end_any")),(0,r.kt)("td",{parentName:"tr",align:null},"Ends with any of"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_end_all")),(0,r.kt)("td",{parentName:"tr",align:null},"Ends with all of"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_end_any")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_end_all")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_cont")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains value"),(0,r.kt)("td",{parentName:"tr",align:null},"uses ",(0,r.kt)("inlineCode",{parentName:"td"},"LIKE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_cont_any")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains any of"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_cont_all")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains all of"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_cont")),(0,r.kt)("td",{parentName:"tr",align:null},"Does not contain"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_cont_any")),(0,r.kt)("td",{parentName:"tr",align:null},"Does not contain any of"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_cont_all")),(0,r.kt)("td",{parentName:"tr",align:null},"Does not contain all of"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_i_cont")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains value with case insensitive"),(0,r.kt)("td",{parentName:"tr",align:null},"uses ",(0,r.kt)("inlineCode",{parentName:"td"},"ILIKE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_i_cont_any")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains any of values with case insensitive"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_i_cont_all")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains all of values with case insensitive"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_i_cont")),(0,r.kt)("td",{parentName:"tr",align:null},"Does not contain with case insensitive"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_i_cont_any")),(0,r.kt)("td",{parentName:"tr",align:null},"Does not contain any of values with case insensitive"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_not_i_cont_all")),(0,r.kt)("td",{parentName:"tr",align:null},"Does not contain all of values with case insensitive"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_true")),(0,r.kt)("td",{parentName:"tr",align:null},"is true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*_false")),(0,r.kt)("td",{parentName:"tr",align:null},"is false"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"See full list: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/activerecord-hackery/ransack/blob/master/lib/ransack/locale/en.yml#L15"},"https://github.com/activerecord-hackery/ransack/blob/master/lib/ransack/locale/en.yml#L15")))}u.isMDXComponent=!0}}]);