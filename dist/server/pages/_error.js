(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},8826:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>f,default:()=>o,getServerSideProps:()=>h,getStaticPaths:()=>u,getStaticProps:()=>d,reportWebVitals:()=>x,routeModule:()=>A,unstable_getServerProps:()=>g,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>m,unstable_getStaticProps:()=>p});var s=r(7093),l=r(5244),i=r(1323),a=r(956),n=r(9593),c=r(1879);let o=(0,i.l)(c,"default"),d=(0,i.l)(c,"getStaticProps"),u=(0,i.l)(c,"getStaticPaths"),h=(0,i.l)(c,"getServerSideProps"),f=(0,i.l)(c,"config"),x=(0,i.l)(c,"reportWebVitals"),p=(0,i.l)(c,"unstable_getStaticProps"),m=(0,i.l)(c,"unstable_getStaticPaths"),j=(0,i.l)(c,"unstable_getStaticParams"),g=(0,i.l)(c,"unstable_getServerProps"),b=(0,i.l)(c,"unstable_getServerSideProps"),A=new s.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:n.default,Document:a.default},userland:c})},1879:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return Error}});let s=r(167),l=s._(r(6689)),i=s._(r(650)),a={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function n(e){let{res:t,err:r}=e,s=t&&t.statusCode?t.statusCode:r?r.statusCode:404;return{statusCode:s}}let c={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class Error extends l.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||a[e]||"An unexpected error has occurred";return l.default.createElement("div",{style:c.error},l.default.createElement(i.default,null,l.default.createElement("title",null,e?e+": "+r:"Application error: a client-side exception has occurred")),l.default.createElement("div",{style:c.desc},l.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?l.default.createElement("h1",{className:"next-error-h1",style:c.h1},e):null,l.default.createElement("div",{style:c.wrap},l.default.createElement("h2",{style:c.h2},this.props.title||e?r:l.default.createElement(l.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}Error.displayName="ErrorPage",Error.getInitialProps=n,Error.origGetInitialProps=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9593:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(997),l=r(5675),i=r.n(l),a=r(1664),n=r.n(a),c=r(6689),o=r(8193),d=r(9583),u=r(3750);let h={src:"/_next/static/media/logo.8a3ca83b.png",height:746,width:900,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAAAAAAQMlOCAAAASklEQVR42gE/AMD/APXq08/k9PHyAPHX9unt+fTyAPLT7sXN4dvtAPPyvK7NsOX0APXrw/rh0PrxAPTJ3/nC4/XyAOPG9vLt8vPyJMkx8sCnna4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:7},f=()=>{let[e,t]=(0,c.useState)(!1),[r,l]=(0,c.useState)(!1),a=()=>{t(!e)};return(0,c.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>=90?l(!0):l(!1)})},[]),(0,s.jsxs)("div",{className:r?"fixed w-full h-20 shadow-xl bg-[#ecf0f3] z-[100] ease-in-out duration-300":"fixed w-full h-20 z-[100] bg-[#ecf0f3]",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center w-full h-full px-2 2xl:px-16",children:[s.jsx(n(),{href:"/",children:s.jsx(i(),{src:h,alt:"/",width:"105",height:"50",className:"cursor-pointer p-4 mt-2"})}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("ul",{className:"hidden md:flex text-[#1f2937]",children:[s.jsx("li",{className:"ml-10 text-sm uppercase hover:border-b",children:s.jsx(n(),{href:"/",children:"Home"})}),s.jsx("li",{className:"ml-10 text-sm uppercase hover:border-b",children:s.jsx(n(),{href:"/#about",children:"About"})}),s.jsx("li",{className:"ml-10 text-sm uppercase hover:border-b",children:s.jsx(n(),{href:"/#skills",children:"Skills"})}),s.jsx("li",{className:"ml-10 text-sm uppercase hover:border-b",children:s.jsx(n(),{href:"/#projects",children:"Projects"})}),s.jsx("li",{className:"ml-10 text-sm uppercase hover:border-b",children:s.jsx(n(),{href:"/resume",children:"Resume"})}),s.jsx("li",{className:"ml-10 text-sm uppercase hover:border-b",children:s.jsx(n(),{href:"/#contact",children:"Contact"})})]}),s.jsx("div",{onClick:a,className:"md:hidden text-[#1f2937]",children:s.jsx(o.qTj,{size:25})})]})]}),s.jsx("div",{className:e?"md:hidden fixed left-0 top-0 w-full h-screen bg-black/70":"",children:(0,s.jsxs)("div",{className:e?" fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500":"fixed left-[-100%] top-0 p-10 ease-in duration-500",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex w-full items-center justify-between",children:[s.jsx(n(),{href:"/",children:s.jsx(i(),{src:h,width:"87",height:"35",alt:"/"})}),e?s.jsx("div",{onClick:a,className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer",children:s.jsx(o.oHP,{})}):""]}),s.jsx("div",{className:"border-b border-gray-300 my-4",children:s.jsx("p",{className:"w-[85%] md:w-[90%] py-4",children:"Let's build something legendary together"})})]}),(0,s.jsxs)("div",{className:"py-4 flex flex-col",children:[(0,s.jsxs)("ul",{className:"uppercase",children:[s.jsx(n(),{href:"/",children:s.jsx("li",{onClick:()=>t(!1),className:"py-4 text-sm",children:"Home"})}),s.jsx(n(),{href:"/#about",children:s.jsx("li",{onClick:()=>t(!1),className:"py-4 text-sm",children:"About"})}),s.jsx(n(),{href:"/#skills",children:s.jsx("li",{onClick:()=>t(!1),className:"py-4 text-sm",children:"Skills"})}),s.jsx(n(),{href:"/#projects",children:s.jsx("li",{onClick:()=>t(!1),className:"py-4 text-sm",children:"Projects"})}),s.jsx(n(),{href:"/resume",children:s.jsx("li",{onClick:()=>t(!1),className:"py-4 text-sm",children:"Resume"})}),s.jsx(n(),{href:"/#contact",children:s.jsx("li",{onClick:()=>t(!1),className:"py-4 text-sm",children:"Contact"})})]}),(0,s.jsxs)("div",{className:"pt-40",children:[s.jsx("p",{className:"uppercase tracking-widest text-[#5651e5]",children:"Let's Connect"}),(0,s.jsxs)("div",{className:"flex items-center justify-between my-4 w-full sm:w-[80%]",children:[s.jsx("a",{href:"https://www.linkedin.com/in/jayrajshakha01/",target:"_blank",rel:"noreferrer",title:"linkedin",children:s.jsx("div",{className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",children:s.jsx(d.BUd,{})})}),s.jsx("a",{href:"https://github.com/jayrajshakha",target:"_blank",rel:"noreferrer",title:"github",children:s.jsx("div",{className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",children:s.jsx(d.hJX,{})})}),s.jsx(n(),{href:"/#contact",children:s.jsx("div",{onClick:()=>t(!e),className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",children:s.jsx(o.Dme,{})})}),s.jsx(n(),{href:"/resume",children:s.jsx("div",{onClick:()=>t(!e),className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",children:s.jsx(u.z8x,{})})})]})]})]})]})})]})};r(208);let x=function({Component:e,pageProps:t}){return(0,s.jsxs)(s.Fragment,{children:[s.jsx(f,{}),s.jsx(e,{...t})]})}},956:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Document});var s=r(997),l=r(6859);function Document(){return(0,s.jsxs)(l.Html,{children:[s.jsx(l.Head,{children:s.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap",rel:"stylesheet"})}),(0,s.jsxs)("body",{children:[s.jsx(l.Main,{}),s.jsx(l.NextScript,{})]})]})}},208:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[268,469,859],()=>r(8826));module.exports=s})();