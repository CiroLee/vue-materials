import{d as c,g as a,o as _,h as f,b as e,q as h,J as d,D as p,a as i,w as s}from"./index-3f37773a.js";const x=e("div",{class:"resize-line"},null,-1),z={class:"resize-content"},l=c({__name:"resizableBox",props:{width:{},height:{},resize:{}},setup(r){const t=r,n=a(()=>t.resize.includes("horizontal")?{height:t.height||"12px"}:{width:t.width||"12px"}),u=a(()=>t.resize.includes("horizontal")?{width:t.width||"12px"}:{height:t.height||"12px"});return(o,S)=>(_(),f("div",{class:h(["resizable-box",o.resize]),style:d(n.value)},[e("div",{class:h(["resize",o.resize]),style:d(u.value)},null,6),x,e("div",z,[p(o.$slots,"default")])],6))}});const g=e("h2",{"font-bold":""},"可调整大小盒子",-1),m={"mt-16px":"","w-full":"","h-600px":"",flex:"","flex-col":"","overflow-hidden":""},v=e("h1",{flex:"","h-full":"","justify-center":"","items-center":"",bg:"red"},"header",-1),w={flex:"","flex-1":"","overflow-hidden":"",relative:"","w-full":""},y=e("div",{flex:"","h-full":"","justify-center":"","items-center":""},"aside",-1),b=e("main",{bg:"orange","flex-1":"",flex:"","justify-center":"","items-center":""},"main",-1),j=e("div",{flex:"","h-full":"","justify-center":"","items-center":""},"aside",-1),B=e("div",{flex:"","justify-center":"","items-center":"","h-full":""},"footer",-1),C=c({__name:"index",setup(r){return(t,n)=>(_(),f("div",null,[g,e("div",m,[i(l,{width:"100%",height:"64px",resize:"vertical-bottom"},{default:s(()=>[v]),_:1}),e("div",w,[i(l,{resize:"horizontal-right",bg:"purple",width:"100px",height:"100%%"},{default:s(()=>[y]),_:1}),b,i(l,{resize:"horizontal-left",bg:"green",width:"100px",height:"100%%"},{default:s(()=>[j]),_:1})]),i(l,{resize:"vertical-top",height:"66px",width:"100%",bg:"gray"},{default:s(()=>[B]),_:1})])]))}});export{C as default};
