import{a as e,B as t,j as i,e as o,S as s,s as l,b as c,F as h,H as m}from"./app-7b8984da.js";import{d as g,G as x}from"./GameLayout-aef38cc8.js";import{G as r}from"./Grid-6715beeb.js";import{P as f}from"./PageTemplate-4412bf2c.js";import"./Select-651cf063.js";import"./Grow-f73a1ab0.js";import"./DataGrid-0751d89d.js";import"./Tooltip-ecd23651.js";const u="/build/assets/ellipseUp-35a278e4.svg",p="/build/assets/ellipseDown-86547d64.svg",y=()=>e(t,{sx:{width:"100%",mt:"0.6875rem"},children:i(r,{container:!0,spacing:2,children:[i(r,{item:!0,xs:6,md:6,children:[" ",e(o,{endIcon:e(g,{sx:{fontSize:"1rem"}}),sx:{width:"100%",height:"3.5rem",borderRadius:"0.625rem",background:"#333965",fontSize:{xs:".75rem",md:".875rem"},fontWeight:800,backgroundColor:"#333965",color:"#A6B0DA",display:"flex",justifyContent:"space-between",textTransform:"none"},children:i(t,{sx:{display:"flex",justifyContent:"flex-start"},children:[e(s,{sx:{fontSize:{xs:".75rem",md:".875rem"},fontWeight:800,color:"#A6B0DA",mr:".3rem"},children:"Risk:"}),e(s,{sx:{fontSize:{xs:".75rem",md:".875rem"},fontWeight:800,color:"white"},children:"Low"})]})})]}),e(r,{item:!0,xs:6,md:6,children:e(t,{sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#333965",height:"3.5rem",borderRadius:".625rem"},children:i(t,{sx:{width:{xs:"90%",md:"80%"},display:"flex",justifyContent:"space-between",height:"100%"},children:[e(t,{sx:{width:"20%",cursor:"pointer",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:e("img",{src:u})}),e(t,{sx:{height:"100%",display:"flex",width:"50%",justifyContent:"center",alignItems:"center"},children:i(t,{sx:{width:"100%",height:"80%",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},children:[e(s,{sx:{fontSize:".875rem",color:"#A6B0DA",fontWeight:800},children:"Rows"}),e(s,{sx:{fontSize:".875rem",color:"white",fontWeight:800},children:"11"})]})}),e(t,{sx:{width:"20%",cursor:"pointer",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:e("img",{src:p})})]})})}),e(r,{item:!0,xs:8,md:6,children:e(t,{sx:{width:"100%",height:"4rem",borderRadius:"0.625rem",background:"#333965",padding:".4125rem"},children:i(t,{sx:{height:"100%",width:"100%",display:"flex",justifyContent:"space-between",alignContent:"center"},children:[i(t,{sx:{width:"15%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e(t,{sx:{height:"46%",background:"#535D9D",borderRadius:"0.3125rem",width:"100%",color:"#A6B0DA",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:"Min"}),e(t,{sx:{height:"46%",background:"#535D9D",borderRadius:"0.3125rem",width:"100%",color:"#A6B0DA",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:"Max"})]}),e(t,{sx:{width:"65%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:e(t,{sx:{fontSize:{xs:".875rem",md:"1rem"},fontWeight:800,textAlign:"center"},children:"R$ 0.0000000"})}),i(t,{sx:{width:"15%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e(t,{sx:{height:"46%",background:"#535D9D",borderRadius:"0.3125rem",width:"100%",color:"#A6B0DA",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:"1/2"}),e(t,{sx:{height:"46%",background:"#535D9D",borderRadius:"0.3125rem",width:"100%",color:"#A6B0DA",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:"2x"})]})]})})}),e(r,{item:!0,xs:4,md:6,children:e(o,{sx:{width:"100%",height:"4rem",borderRadius:"0.625rem",background:"#333965",fontSize:{xs:"1rem",md:"1.375rem"},fontWeight:800,backgroundColor:"#3585ff",color:"#FFFFFF"},children:"BET"})})]})}),b="/build/assets/plinko_bg-cace3c92.svg",w="/build/assets/plinko_sm-f4c8ba6d.svg",d=l("img")(()=>({})),D=()=>{const{isMobile:n}=c();return e(h,{children:n?e(t,{sx:{},children:e(d,{src:w})}):e(t,{sx:{},children:e(d,{src:b})})})},z=()=>{const{isMobile:n}=c(),a=l("div")(()=>({background:"#1D2036",width:`${n?"99%":"98%"}`,marginLeft:"auto",marginRight:"auto",marginTop:`${n?"1.3rem":"2rem"}`,paddingTop:"2.125rem",paddingLeft:`${n?"0.8rem":"1rem"}`,paddingRight:`${n?"0":"1rem"}`,paddingBottom:"2.125rem",height:"80%",position:"relative"}));return i("div",{children:[e(m,{title:"Game Wheel"}),e(f,{innerHeader:!0,children:e(a,{children:e(x,{GameFrameText:"Plinko",GameFrame:D,ButtonGrid:y,displayPanel:!0,customFrameHeader:!0})})})]})};export{z as default};