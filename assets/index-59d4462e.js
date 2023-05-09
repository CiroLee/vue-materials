import{d as g,C as K,u as p,l as k,o as v,g as f,b as t,q as w,_ as M,f as L,x as B,c as z,I as U,D as R,F as S,h as D,w as h,E as _,t as F,a as i}from"./index-f393927b.js";const y={small:{width:"26px",height:"16px",circle2Radius:"12px",circleAniLen:"2px",marginLeftAni:"10px"},medium:{width:"38px",height:"24px",circle2Radius:"20px",circleAniLen:"3px",marginLeftAni:"14px"},large:{width:"50px",height:"30px",circle2Radius:"26px",circleAniLen:"4px",marginLeftAni:"20px"}},N=o=>y[o]?y[o]:y.medium,E={class:"switch"},q=["checked","disabled"],G=g({__name:"index",props:{size:{default:"medium"},checked:{type:Boolean},disabled:{type:Boolean}},emits:["change"],setup(o,{emit:s}){const c=o;K(x=>({c4893878:p(r),"003bca2e":p(l),"92f09462":p(u),"2f9f80da":p(d),"962e6f3e":p(a)}));const{width:r,height:l,circle2Radius:u,circleAniLen:d,marginLeftAni:a}=N(c.size),e=k(!1);let n;const $=()=>{let x=0;n=setInterval(()=>{x+=200,x>=200&&(e.value=!0,clearInterval(n))},200)},I=()=>{clearInterval(n),e.value=!1},V=x=>{const C=x.target;s("change",C.checked)};return(x,C)=>(v(),f("div",E,[t("input",{checked:o.checked,disabled:o.disabled,type:"checkbox",name:"switch",onMousedown:$,onMouseup:I,onChange:V},null,40,q),t("div",{class:w(["switch-label",{"circle-ani":e.value}])},null,2)]))}});const b=M(G,[["__scopeId","data-v-4c417304"]]),T={class:"r-radio__content"},m=g({__name:"radio",props:{type:{default:"checked"},checked:{type:Boolean},size:{default:"medium"},disabled:{type:Boolean}},emits:["update:checked"],setup(o,{emit:s}){const c=o,r=k(c.checked),l=L({get(){return r.value},set(a){r.value=a}}),u=a=>{switch(a){case"small":return"16px";case"medium":return"20px";case"large":return"24px";default:return"18px"}};B(()=>c.checked,a=>{l.value=a});const d=()=>{c.disabled||(l.value=!l.value,s("update:checked",l.value))};return(a,e)=>(v(),f("div",{class:w(["r-radio",{checked:p(l),disabled:c.disabled}]),onClick:d},[c.type==="circle"?(v(),z(U,{key:0,name:p(l)?"radio-button-fill":"checkbox-blank-circle-line",size:u(c.size)},null,8,["name","size"])):(v(),z(U,{key:1,name:p(l)?"checkbox-circle-fill":"checkbox-blank-circle-line",size:u(c.size)},null,8,["name","size"])),t("div",T,[R(a.$slots,"default")])],2))}});const A=g({__name:"radio-group",props:{type:{default:"checked"},size:{default:"medium"},direction:{default:"horizontal"},defaultKey:{default:""},options:null},emits:["update:value"],setup(o,{emit:s}){const c=o,r=k(c.defaultKey),l=L({get(){return r.value},set(d){r.value=d}}),u=(d,a)=>{d.disabled||(l.value=d.value,s("update:value",{...d,checked:a}))};return B(()=>c.defaultKey,d=>{r.value=d}),(d,a)=>(v(),f("div",{class:w(["r-radio-group",c.direction])},[(v(!0),f(S,null,D(c.options,e=>(v(),z(m,{key:e.value,type:c.type,size:c.size,disable:e.disabled,checked:e.value===p(l),"onUpdate:checked":n=>u(e,n)},{default:h(()=>[_(F(e.label),1)]),_:2},1032,["type","size","disable","checked","onUpdate:checked"]))),128))],2))}});const j={border:"","border-solid":"","border-gray-300":"","p-sm":"","mb-4":""},H={"mt-10px":""},J=t("div",{"font-bold":"","mb-8px":"","text-xl":""},"switch",-1),O={flex:"","content-center":"","mb-12px":""},P=t("span",{"inline-block":"","w-60px":"","mr-16px":"","text-right":""},"large: ",-1),Q={flex:"","content-center":"","mb-12px":""},W=t("span",{"inline-block":"","w-60px":"","mr-16px":"","text-right":""},"default: ",-1),X={flex:"","content-center":"","mb-12px":""},Y=t("span",{"inline-block":"","w-60px":"","mr-16px":"","text-right":""},"small: ",-1),Z={flex:"","content-center":"","mb-12px":""},ee=t("span",{"inline-block":"","w-60px":"","mr-16px":"","text-right":""},"禁用: ",-1),te={border:"","border-solid":"","border-gray-300":"","p-sm":""},ae=t("div",{"font-bold":"","text-xl":"","mb-8px":""},"radio",-1),ce={"mb-2":""},le=t("p",null,"基本使用",-1),ne={"mt-1":"","children:mr-2":""},se={"mt-2":"","children:mr-2":""},de={"mb-2":""},ie=t("p",null,"radio组",-1),oe={"mt-1":"","children:mr-2":""},re=t("p",{"my-1":"","text-sm":"","text-gray-5":""},"水平方向",-1),ue={"mt-1":"","children:mr-2":""},pe=t("p",{"my-1":"","text-sm":"","text-gray-5":""},"垂直方向",-1),_e=g({__name:"index",setup(o){const s=k("peach"),c=k("vue"),r=[{label:"vue",value:"vue"},{label:"react",value:"react"},{label:"angular",value:"angular"},{label:"solid",value:"solid"},{label:"svelete",value:"svelete"}],l=(a,e)=>{s.value=a,console.log(a+":",e)},u=a=>{c.value=a.value,console.log(a)},d=a=>{console.log(a)};return(a,e)=>(v(),f(S,null,[t("div",j,[t("div",H,[J,t("p",O,[P,i(b,{size:"large",checked:"",onChange:d})]),t("p",Q,[W,i(b,{size:"medium"})]),t("p",X,[Y,i(b,{size:"small"})]),t("p",Z,[ee,i(b,{size:"small",disabled:""})])])]),t("div",te,[ae,t("div",ce,[le,t("div",ne,[i(m,{checked:s.value==="peach","onUpdate:checked":e[0]||(e[0]=n=>l("peach",n))},{default:h(()=>[_("桃子")]),_:1},8,["checked"]),i(m,{checked:s.value==="apple","onUpdate:checked":e[1]||(e[1]=n=>l("apple",n))},{default:h(()=>[_("苹果")]),_:1},8,["checked"]),i(m,{checked:s.value==="banana","onUpdate:checked":e[2]||(e[2]=n=>l("banana",n))},{default:h(()=>[_(" 香蕉 ")]),_:1},8,["checked"])]),t("div",se,[i(m,{type:"circle",checked:s.value==="peach","onUpdate:checked":e[3]||(e[3]=n=>l("peach",n))},{default:h(()=>[_(" 桃子 ")]),_:1},8,["checked"]),i(m,{type:"circle",checked:s.value==="apple","onUpdate:checked":e[4]||(e[4]=n=>l("apple",n))},{default:h(()=>[_(" 苹果 ")]),_:1},8,["checked"]),i(m,{type:"circle",checked:s.value==="banana","onUpdate:checked":e[5]||(e[5]=n=>l("banana",n))},{default:h(()=>[_(" 香蕉 ")]),_:1},8,["checked"]),i(m,{type:"circle",checked:s.value==="pineapple",disabled:"","onUpdate:checked":e[6]||(e[6]=n=>l("pineapple",n))},{default:h(()=>[_(" 凤梨 ")]),_:1},8,["checked"])])]),t("div",de,[ie,t("div",oe,[re,i(A,{"default-key":c.value,options:r,"onUpdate:value":u},null,8,["default-key"])]),t("div",ue,[pe,i(A,{direction:"vertical",type:"circle","default-key":c.value,options:r,"onUpdate:value":u},null,8,["default-key"])])])])],64))}});export{_e as default};
