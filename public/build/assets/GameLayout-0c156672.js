import{r as f,j as p,a as r,K as u,d as xe}from"./app-5a95df40.js";import{g as we,h as Se,M as Q,i as qe,j as Ce,k as V,l as ve,m as ye,o as Ue,p as ke,q as ge,r as xt,B as s,e as W,s as Qe,t as Je,v as Ze,f as yt,u as wt}from"./GuestLayout-06ca8965.js";import{n as et,_ as x,a as ue,q as St,r as Ct,t as tt,v as nt,K as De,x as vt,y as Bt,z as Mt,A as It,B as Et,C as zt,S as _t,E as Wt,W as Tt,L as Pt,o as it}from"./dropdown-0d2fe5ad.js";import"./Select-fd27c3a0.js";import{K as Rt,a as At,D as Dt,G as jt}from"./DataGrid-5bfe7777.js";import{G as U}from"./Grid-850cd057.js";let ee;function rt(){if(ee)return ee;const t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),ee="reverse",t.scrollLeft>0?ee="default":(t.scrollLeft=1,t.scrollLeft===0&&(ee="negative")),document.body.removeChild(t),ee}function je(t,e){const n=t.scrollLeft;if(e!=="rtl")return n;switch(rt()){case"negative":return t.scrollWidth-t.clientWidth+n;case"reverse":return t.scrollWidth-t.clientWidth-n;default:return n}}function Nt(t){return Se("MuiTab",t)}const $t=we("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),k=$t,Lt=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],Ft=t=>{const{classes:e,textColor:n,fullWidth:i,wrapped:o,icon:l,label:d,selected:c,disabled:m}=t,y={root:["root",l&&d&&"labelIcon",`textColor${et(n)}`,i&&"fullWidth",o&&"wrapped",c&&"selected",m&&"disabled"],iconWrapper:["iconWrapper"]};return ve(y,Nt,e)},Ht=Q(qe,{name:"MuiTab",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.label&&n.icon&&e.labelIcon,e[`textColor${et(n.textColor)}`],n.fullWidth&&e.fullWidth,n.wrapped&&e.wrapped]}})(({theme:t,ownerState:e})=>x({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.label&&{flexDirection:e.iconPosition==="top"||e.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},e.icon&&e.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${k.iconWrapper}`]:x({},e.iconPosition==="top"&&{marginBottom:6},e.iconPosition==="bottom"&&{marginTop:6},e.iconPosition==="start"&&{marginRight:t.spacing(1)},e.iconPosition==="end"&&{marginLeft:t.spacing(1)})},e.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${k.selected}`]:{opacity:1},[`&.${k.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${k.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${k.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${k.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${k.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},e.wrapped&&{fontSize:t.typography.pxToRem(12)})),Ot=f.exports.forwardRef(function(e,n){const i=Ce({props:e,name:"MuiTab"}),{className:o,disabled:l=!1,disableFocusRipple:d=!1,fullWidth:c,icon:m,iconPosition:y="top",indicator:I,label:E,onChange:S,onClick:B,onFocus:D,selected:T,selectionFollowsFocus:w,textColor:N="inherit",value:M,wrapped:H=!1}=i,P=ue(i,Lt),R=x({},i,{disabled:l,disableFocusRipple:d,selected:T,icon:!!m,iconPosition:y,label:!!E,fullWidth:c,textColor:N,wrapped:H}),$=Ft(R),L=m&&E&&f.exports.isValidElement(m)?f.exports.cloneElement(m,{className:V($.iconWrapper,m.props.className)}):m,C=z=>{!T&&S&&S(z,M),B&&B(z)},F=z=>{w&&!T&&S&&S(z,M),D&&D(z)};return p(Ht,x({focusRipple:!d,className:V($.root,o),ref:n,role:"tab","aria-selected":T,disabled:l,onClick:C,onFocus:F,ownerState:R,tabIndex:T?0:-1},P,{children:[y==="top"||y==="start"?p(f.exports.Fragment,{children:[L,E]}):p(f.exports.Fragment,{children:[E,L]}),I]}))}),Ne=Ot;function Xt(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function Gt(t,e,n,i={},o=()=>{}){const{ease:l=Xt,duration:d=300}=i;let c=null;const m=e[t];let y=!1;const I=()=>{y=!0},E=S=>{if(y){o(new Error("Animation cancelled"));return}c===null&&(c=S);const B=Math.min(1,(S-c)/d);if(e[t]=l(B)*(n-m)+m,B>=1){requestAnimationFrame(()=>{o(null)});return}requestAnimationFrame(E)};return m===n?(o(new Error("Element already at target position")),I):(requestAnimationFrame(E),I)}const Kt=["onChange"],Vt={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Yt(t){const{onChange:e}=t,n=ue(t,Kt),i=f.exports.useRef(),o=f.exports.useRef(null),l=()=>{i.current=o.current.offsetHeight-o.current.clientHeight};return f.exports.useEffect(()=>{const d=ye(()=>{const m=i.current;l(),m!==i.current&&e(i.current)}),c=Ue(o.current);return c.addEventListener("resize",d),()=>{d.clear(),c.removeEventListener("resize",d)}},[e]),f.exports.useEffect(()=>{l(),e(i.current)},[e]),r("div",x({style:Vt,ref:o},n))}function qt(t){return Se("MuiTabScrollButton",t)}const Ut=we("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),kt=Ut;var $e,Le;const Qt=["className","direction","orientation","disabled"],Jt=t=>{const{classes:e,orientation:n,disabled:i}=t;return ve({root:["root",n,i&&"disabled"]},qt,e)},Zt=Q(qe,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.orientation&&e[n.orientation]]}})(({ownerState:t})=>x({width:40,flexShrink:0,opacity:.8,[`&.${kt.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),en=f.exports.forwardRef(function(e,n){const i=Ce({props:e,name:"MuiTabScrollButton"}),{className:o,direction:l}=i,d=ue(i,Qt),m=ke().direction==="rtl",y=x({isRtl:m},i),I=Jt(y);return r(Zt,x({component:"div",className:V(I.root,o),ref:n,role:null,ownerState:y,tabIndex:null},d,{children:l==="left"?$e||($e=r(Rt,{fontSize:"small"})):Le||(Le=r(At,{fontSize:"small"}))}))}),tn=en;function nn(t){return Se("MuiTabs",t)}const rn=we("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),be=rn,on=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Fe=(t,e)=>t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t.firstChild,He=(t,e)=>t===e?t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t.lastChild,de=(t,e,n)=>{let i=!1,o=n(t,e);for(;o;){if(o===t.firstChild){if(i)return;i=!0}const l=o.disabled||o.getAttribute("aria-disabled")==="true";if(!o.hasAttribute("tabindex")||l)o=n(t,o);else{o.focus();return}}},ln=t=>{const{vertical:e,fixed:n,hideScrollbar:i,scrollableX:o,scrollableY:l,centered:d,scrollButtonsHideMobile:c,classes:m}=t;return ve({root:["root",e&&"vertical"],scroller:["scroller",n&&"fixed",i&&"hideScrollbar",o&&"scrollableX",l&&"scrollableY"],flexContainer:["flexContainer",e&&"flexContainerVertical",d&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",c&&"scrollButtonsHideMobile"],scrollableX:[o&&"scrollableX"],hideScrollbar:[i&&"hideScrollbar"]},nn,m)},an=Q("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[{[`& .${be.scrollButtons}`]:e.scrollButtons},{[`& .${be.scrollButtons}`]:n.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,n.vertical&&e.vertical]}})(({ownerState:t,theme:e})=>x({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${be.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}})),sn=Q("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.scroller,n.fixed&&e.fixed,n.hideScrollbar&&e.hideScrollbar,n.scrollableX&&e.scrollableX,n.scrollableY&&e.scrollableY]}})(({ownerState:t})=>x({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),cn=Q("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.flexContainer,n.vertical&&e.flexContainerVertical,n.centered&&e.centered]}})(({ownerState:t})=>x({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),dn=Q("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,e)=>e.indicator})(({ownerState:t,theme:e})=>x({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(e.vars||e).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(e.vars||e).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),un=Q(Yt,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Oe={},hn=f.exports.forwardRef(function(e,n){const i=Ce({props:e,name:"MuiTabs"}),o=ke(),l=o.direction==="rtl",{"aria-label":d,"aria-labelledby":c,action:m,centered:y=!1,children:I,className:E,component:S="div",allowScrollButtonsMobile:B=!1,indicatorColor:D="primary",onChange:T,orientation:w="horizontal",ScrollButtonComponent:N=tn,scrollButtons:M="auto",selectionFollowsFocus:H,TabIndicatorProps:P={},TabScrollButtonProps:R={},textColor:$="primary",value:L,variant:C="standard",visibleScrollbar:F=!1}=i,z=ue(i,on),O=C==="scrollable",_=w==="vertical",te=_?"scrollTop":"scrollLeft",le=_?"top":"left",ae=_?"bottom":"right",he=_?"clientHeight":"clientWidth",ne=_?"height":"width",ie=x({},i,{component:S,allowScrollButtonsMobile:B,indicatorColor:D,orientation:w,vertical:_,scrollButtons:M,textColor:$,variant:C,visibleScrollbar:F,fixed:!O,hideScrollbar:O&&!F,scrollableX:O&&!_,scrollableY:O&&_,centered:y&&!O,scrollButtonsHideMobile:!B}),X=ln(ie),[Ie,ct]=f.exports.useState(!1),[Y,Ee]=f.exports.useState(Oe),[J,dt]=f.exports.useState({start:!1,end:!1}),[ze,ut]=f.exports.useState({overflow:"hidden",scrollbarWidth:0}),_e=new Map,j=f.exports.useRef(null),re=f.exports.useRef(null),We=()=>{const a=j.current;let h;if(a){const b=a.getBoundingClientRect();h={clientWidth:a.clientWidth,scrollLeft:a.scrollLeft,scrollTop:a.scrollTop,scrollLeftNormalized:je(a,o.direction),scrollWidth:a.scrollWidth,top:b.top,bottom:b.bottom,left:b.left,right:b.right}}let g;if(a&&L!==!1){const b=re.current.children;if(b.length>0){const v=b[_e.get(L)];g=v?v.getBoundingClientRect():null}}return{tabsMeta:h,tabMeta:g}},oe=ge(()=>{const{tabsMeta:a,tabMeta:h}=We();let g=0,b;if(_)b="top",h&&a&&(g=h.top-a.top+a.scrollTop);else if(b=l?"right":"left",h&&a){const A=l?a.scrollLeftNormalized+a.clientWidth-a.scrollWidth:a.scrollLeft;g=(l?-1:1)*(h[b]-a[b]+A)}const v={[b]:g,[ne]:h?h[ne]:0};if(isNaN(Y[b])||isNaN(Y[ne]))Ee(v);else{const A=Math.abs(Y[b]-v[b]),Z=Math.abs(Y[ne]-v[ne]);(A>=1||Z>=1)&&Ee(v)}}),me=(a,{animation:h=!0}={})=>{h?Gt(te,j.current,a,{duration:o.transitions.duration.standard}):j.current[te]=a},Te=a=>{let h=j.current[te];_?h+=a:(h+=a*(l?-1:1),h*=l&&rt()==="reverse"?-1:1),me(h)},Pe=()=>{const a=j.current[he];let h=0;const g=Array.from(re.current.children);for(let b=0;b<g.length;b+=1){const v=g[b];if(h+v[he]>a){b===0&&(h=a);break}h+=v[he]}return h},ht=()=>{Te(-1*Pe())},mt=()=>{Te(Pe())},ft=f.exports.useCallback(a=>{ut({overflow:null,scrollbarWidth:a})},[]),pt=()=>{const a={};a.scrollbarSizeListener=O?r(un,{onChange:ft,className:V(X.scrollableX,X.hideScrollbar)}):null;const h=J.start||J.end,g=O&&(M==="auto"&&h||M===!0);return a.scrollButtonStart=g?r(N,x({orientation:w,direction:l?"right":"left",onClick:ht,disabled:!J.start},R,{className:V(X.scrollButtons,R.className)})):null,a.scrollButtonEnd=g?r(N,x({orientation:w,direction:l?"left":"right",onClick:mt,disabled:!J.end},R,{className:V(X.scrollButtons,R.className)})):null,a},Re=ge(a=>{const{tabsMeta:h,tabMeta:g}=We();if(!(!g||!h)){if(g[le]<h[le]){const b=h[te]+(g[le]-h[le]);me(b,{animation:a})}else if(g[ae]>h[ae]){const b=h[te]+(g[ae]-h[ae]);me(b,{animation:a})}}}),q=ge(()=>{if(O&&M!==!1){const{scrollTop:a,scrollHeight:h,clientHeight:g,scrollWidth:b,clientWidth:v}=j.current;let A,Z;if(_)A=a>1,Z=a<h-g-1;else{const ce=je(j.current,o.direction);A=l?ce<b-v-1:ce>1,Z=l?ce>1:ce<b-v-1}(A!==J.start||Z!==J.end)&&dt({start:A,end:Z})}});f.exports.useEffect(()=>{const a=ye(()=>{j.current&&(oe(),q())}),h=Ue(j.current);h.addEventListener("resize",a);let g;return typeof ResizeObserver<"u"&&(g=new ResizeObserver(a),Array.from(re.current.children).forEach(b=>{g.observe(b)})),()=>{a.clear(),h.removeEventListener("resize",a),g&&g.disconnect()}},[oe,q]);const fe=f.exports.useMemo(()=>ye(()=>{q()}),[q]);f.exports.useEffect(()=>()=>{fe.clear()},[fe]),f.exports.useEffect(()=>{ct(!0)},[]),f.exports.useEffect(()=>{oe(),q()}),f.exports.useEffect(()=>{Re(Oe!==Y)},[Re,Y]),f.exports.useImperativeHandle(m,()=>({updateIndicator:oe,updateScrollButtons:q}),[oe,q]);const Ae=r(dn,x({},P,{className:V(X.indicator,P.className),ownerState:ie,style:x({},Y,P.style)}));let se=0;const gt=f.exports.Children.map(I,a=>{if(!f.exports.isValidElement(a))return null;const h=a.props.value===void 0?se:a.props.value;_e.set(h,se);const g=h===L;return se+=1,f.exports.cloneElement(a,x({fullWidth:C==="fullWidth",indicator:g&&!Ie&&Ae,selected:g,selectionFollowsFocus:H,onChange:T,textColor:$,value:h},se===1&&L===!1&&!a.props.tabIndex?{tabIndex:0}:{}))}),bt=a=>{const h=re.current,g=xt(h).activeElement;if(g.getAttribute("role")!=="tab")return;let v=w==="horizontal"?"ArrowLeft":"ArrowUp",A=w==="horizontal"?"ArrowRight":"ArrowDown";switch(w==="horizontal"&&l&&(v="ArrowRight",A="ArrowLeft"),a.key){case v:a.preventDefault(),de(h,g,He);break;case A:a.preventDefault(),de(h,g,Fe);break;case"Home":a.preventDefault(),de(h,null,Fe);break;case"End":a.preventDefault(),de(h,null,He);break}},pe=pt();return p(an,x({className:V(X.root,E),ownerState:ie,ref:n,as:S},z,{children:[pe.scrollButtonStart,pe.scrollbarSizeListener,p(sn,{className:X.scroller,ownerState:ie,style:{overflow:ze.overflow,[_?`margin${l?"Left":"Right"}`:"marginBottom"]:F?void 0:-ze.scrollbarWidth},ref:j,onScroll:fe,children:[r(cn,{"aria-label":d,"aria-labelledby":c,"aria-orientation":w==="vertical"?"vertical":null,className:X.flexContainer,ownerState:ie,onKeyDown:bt,ref:re,role:"tablist",children:gt}),Ie&&Ae]}),pe.scrollButtonEnd]}))}),mn=hn;var fn=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],ot=f.exports.forwardRef(function(t,e){var n,i=t.prefixCls,o=i===void 0?"rc-switch":i,l=t.className,d=t.checked,c=t.defaultChecked,m=t.disabled,y=t.loadingIcon,I=t.checkedChildren,E=t.unCheckedChildren,S=t.onClick,B=t.onChange,D=t.onKeyDown,T=St(t,fn),w=Ct(!1,{value:d,defaultValue:c}),N=tt(w,2),M=N[0],H=N[1];function P(C,F){var z=M;return m||(z=C,H(z),B==null||B(z,F)),z}function R(C){C.which===De.LEFT?P(!1,C):C.which===De.RIGHT&&P(!0,C),D==null||D(C)}function $(C){var F=P(!M,C);S==null||S(F,C)}var L=nt(o,l,(n={},u(n,"".concat(o,"-checked"),M),u(n,"".concat(o,"-disabled"),m),n));return f.exports.createElement("button",x({},T,{type:"button",role:"switch","aria-checked":M,disabled:m,className:L,ref:e,onKeyDown:R,onClick:$}),y,f.exports.createElement("span",{className:"".concat(o,"-inner")},f.exports.createElement("span",{className:"".concat(o,"-inner-checked")},I),f.exports.createElement("span",{className:"".concat(o,"-inner-unchecked")},E)))});ot.displayName="Switch";var pn=function(e){var n,i,o,l,d,c=e.componentCls,m=c+"-inner";return u({},c,u({},"&"+c+"-small",(d={minWidth:e.switchMinWidthSM,height:e.switchHeightSM,lineHeight:e.switchHeightSM+"px"},u(d,c+"-inner",(n={},u(n,m+"-checked",{marginInlineStart:"calc("+e.switchInnerMarginMinSM+"px - 100% + "+(e.switchPinSizeSM+e.switchPadding*2)+"px)",marginInlineEnd:"calc("+e.switchInnerMarginMaxSM+"px + 100% - "+(e.switchPinSizeSM+e.switchPadding*2)+"px)"}),u(n,m+"-unchecked",{marginTop:-e.switchHeightSM,marginInlineStart:e.switchInnerMarginMaxSM,marginInlineEnd:e.switchInnerMarginMinSM}),n)),u(d,c+"-handle",{width:e.switchPinSizeSM,height:e.switchPinSizeSM}),u(d,c+"-loading-icon",{top:(e.switchPinSizeSM-e.switchLoadingIconSize)/2,fontSize:e.switchLoadingIconSize}),u(d,"&"+c+"-checked",(o={},u(o,c+"-inner",(i={},u(i,m+"-checked",{marginInlineStart:e.switchInnerMarginMinSM,marginInlineEnd:e.switchInnerMarginMaxSM}),u(i,m+"-unchecked",{marginInlineStart:"calc("+e.switchInnerMarginMaxSM+"px + 100% - "+(e.switchPinSizeSM+e.switchPadding*2)+"px)",marginInlineEnd:"calc("+e.switchInnerMarginMinSM+"px - 100% + "+(e.switchPinSizeSM+e.switchPadding*2)+"px)"}),i)),u(o,c+"-handle",{insetInlineStart:"calc(100% - "+(e.switchPinSizeSM+e.switchPadding)+"px)"}),o)),u(d,"&:not("+c+"-disabled):active",(l={},u(l,"&:not("+c+"-checked) "+m,u({},m+"-unchecked",{marginInlineStart:e.switchInnerMarginMaxSM+e.marginXXS/2,marginInlineEnd:e.switchInnerMarginMinSM-e.marginXXS/2})),u(l,"&"+c+"-checked "+m,u({},m+"-checked",{marginInlineStart:e.switchInnerMarginMinSM-e.marginXXS/2,marginInlineEnd:e.switchInnerMarginMaxSM+e.marginXXS/2})),l)),d)))},gn=function(e){var n,i=e.componentCls;return u({},i,(n={},u(n,i+"-loading-icon"+e.iconCls,{position:"relative",top:(e.switchPinSize-e.fontSize)/2,color:e.switchLoadingIconColor,verticalAlign:"top"}),u(n,"&"+i+"-checked "+i+"-loading-icon",{color:e.switchColor}),n))},bn=function(e){var n,i,o=e.componentCls,l=o+"-handle";return u({},o,(i={},u(i,l,{position:"absolute",top:e.switchPadding,insetInlineStart:e.switchPadding,width:e.switchPinSize,height:e.switchPinSize,transition:"all "+e.switchDuration+" ease-in-out","&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:e.colorWhite,borderRadius:e.switchPinSize/2,boxShadow:e.switchHandleShadow,transition:"all "+e.switchDuration+" ease-in-out",content:'""'}}),u(i,"&"+o+"-checked "+l,{insetInlineStart:"calc(100% - "+(e.switchPinSize+e.switchPadding)+"px)"}),u(i,"&:not("+o+"-disabled):active",(n={},u(n,l+"::before",{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0}),u(n,"&"+o+"-checked "+l+"::before",{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}),n)),i))},xn=function(e){var n,i,o,l,d=e.componentCls,c=d+"-inner";return u({},d,(l={},u(l,c,(n={display:"block",overflow:"hidden",borderRadius:100,height:"100%"},u(n,c+"-checked, "+c+"-unchecked",{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:"margin-inline-start "+e.switchDuration+" ease-in-out, margin-inline-end "+e.switchDuration+" ease-in-out",pointerEvents:"none"}),u(n,c+"-checked",{marginInlineStart:"calc("+e.switchInnerMarginMin+"px - 100% + "+(e.switchPinSize+e.switchPadding*2)+"px)",marginInlineEnd:"calc("+e.switchInnerMarginMax+"px + 100% - "+(e.switchPinSize+e.switchPadding*2)+"px)"}),u(n,c+"-unchecked",{marginTop:-e.switchHeight,marginInlineStart:e.switchInnerMarginMax,marginInlineEnd:e.switchInnerMarginMin}),n)),u(l,"&"+d+"-checked "+c,(i={},u(i,c+"-checked",{marginInlineStart:e.switchInnerMarginMin,marginInlineEnd:e.switchInnerMarginMax}),u(i,c+"-unchecked",{marginInlineStart:"calc("+e.switchInnerMarginMax+"px + 100% - "+(e.switchPinSize+e.switchPadding*2)+"px)",marginInlineEnd:"calc("+e.switchInnerMarginMin+"px - 100% + "+(e.switchPinSize+e.switchPadding*2)+"px)"}),i)),u(l,"&:not("+d+"-disabled):active",(o={},u(o,"&:not("+d+"-checked) "+c,u({},c+"-unchecked",{marginInlineStart:e.switchInnerMarginMax+e.switchPadding*2,marginInlineEnd:e.switchInnerMarginMin-e.switchPadding*2})),u(o,"&"+d+"-checked "+c,u({},c+"-checked",{marginInlineStart:e.switchInnerMarginMin-e.switchPadding*2,marginInlineEnd:e.switchInnerMarginMax+e.switchPadding*2})),o)),l))},yn=function(e){var n,i=e.componentCls;return u({},i,x(x(x(x({},It(e)),u({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:e.switchMinWidth,height:e.switchHeight,lineHeight:e.switchHeight+"px",verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all "+e.motionDurationMid,userSelect:"none"},"&:hover:not("+i+"-disabled)",{background:e.colorTextTertiary})),Et(e)),(n={},u(n,"&"+i+"-checked",u({background:e.switchColor},"&:hover:not("+i+"-disabled)",{background:e.colorPrimaryHover})),u(n,"&"+i+"-loading, &"+i+"-disabled",{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),u(n,"&"+i+"-rtl",{direction:"rtl"}),n)))};const wn=vt("Switch",function(t){var e=t.fontSize*t.lineHeight,n=t.controlHeight/2,i=2,o=e-i*2,l=n-i*2,d=Bt(t,{switchMinWidth:o*2+i*4,switchHeight:e,switchDuration:t.motionDurationMid,switchColor:t.colorPrimary,switchDisabledOpacity:t.opacityLoading,switchInnerMarginMin:o/2,switchInnerMarginMax:o+i+i*2,switchPadding:i,switchPinSize:o,switchBg:t.colorBgContainer,switchMinWidthSM:l*2+i*2,switchHeightSM:n,switchInnerMarginMinSM:l/2,switchInnerMarginMaxSM:l+i+i*2,switchPinSizeSM:l,switchHandleShadow:"0 2px 4px 0 "+new Mt("#00230b").setAlpha(.2).toRgbString(),switchLoadingIconSize:t.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, "+t.opacityLoading+")",switchHandleActiveInset:"-30%"});return[yn(d),xn(d),bn(d),gn(d),pn(d)]});var Sn=globalThis&&globalThis.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]]);return n},lt=f.exports.forwardRef(function(t,e){var n,i=t.prefixCls,o=t.size,l=t.disabled,d=t.loading,c=t.className,m=c===void 0?"":c,y=Sn(t,["prefixCls","size","disabled","loading","className"]),I=f.exports.useContext(zt),E=I.getPrefixCls,S=I.direction,B=f.exports.useContext(_t),D=f.exports.useContext(Wt),T=(l??D)||d,w=E("switch",i),N=f.exports.createElement("div",{className:w+"-handle"},d&&f.exports.createElement(Pt,{className:w+"-loading-icon"})),M=wn(w),H=tt(M,2),P=H[0],R=H[1],$=nt((n={},u(n,w+"-small",(o||B)==="small"),u(n,w+"-loading",d),u(n,w+"-rtl",S==="rtl"),n),m,R);return P(f.exports.createElement(Tt,{insertExtraNode:!0},f.exports.createElement(ot,x({},y,{prefixCls:w,className:$,disabled:T,ref:e,loadingIcon:N}))))});lt.__ANT_SWITCH=!0;const Xe=lt,Ge="/build/assets/Keyboard-4469f08e.svg",Ke="/build/assets/Volume-bb75af6f.svg",Ve="/build/assets/help-b13ab0f2.svg",Ye="/build/assets/Activity-c9adb182.svg",Cn=()=>{const[t,e]=xe.useState(0),n=(l,d)=>{e(d)};function i(l){const{children:d,value:c,index:m,...y}=l;return r("div",{role:"tabpanel",hidden:c!==m,id:`simple-tabpanel-${m}`,"aria-labelledby":`simple-tab-${m}`,style:{width:"100%"},...y,children:c===m&&r(s,{sx:{},children:r(s,{sx:{width:"100%",marginTop:"1.25rem"},children:d})})})}function o(l){return{id:`simple-tab-${l}`,"aria-controls":`simple-tabpanel-${l}`}}return r("div",{children:p(s,{sx:{width:"100%",marginTop:"1.875rem",padding:"0.625rem, 0",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[r(s,{children:p(mn,{value:t,onChange:n,"aria-label":"lab API tabs example",indicatorColor:"primary",children:[r(Ne,{label:"Manual",...o(0)}),r(Ne,{label:"Auto",...o(1)})]})}),r(i,{value:t,index:0}),r(i,{value:t,index:1,children:r(s,{sx:{height:{xs:"30rem",md:"14.9375rem"},background:"#272C4B",borderRadius:"0.625rem",flexGrow:1,padding:"1.2rem"},children:p(U,{container:!0,spacing:2,children:[r(U,{item:!0,xs:6,md:4,children:p(s,{sx:{width:"100%"},children:[r(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Number of Bets"}),p(s,{sx:{height:"4.0625rem",borderRadius:"0.625rem",pl:".9375rem",background:"#333965",display:"flex",justifyContent:"space-between"},children:[r(s,{sx:{display:"flex",width:"15%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),r(s,{sx:{display:{xs:"none",md:"flex"},width:"30%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"R$ 0"})]})]})}),r(U,{item:!0,xs:6,md:4,children:p(s,{sx:{width:"100%"},children:[r(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Stop on Profits"}),p(s,{sx:{height:"4.0625rem",borderRadius:"0.625rem",pl:".9375rem",background:"#333965",display:"flex",justifyContent:"space-between"},children:[r(s,{sx:{display:{xs:"none",md:"flex"},width:"15%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),r(s,{sx:{display:"flex",width:"30%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"R$ 0"})]})]})}),r(U,{item:!0,xs:6,md:4,children:p(s,{sx:{width:"100%"},children:[r(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Stop the Loss"}),p(s,{sx:{height:"4.0625rem",borderRadius:"0.625rem",pl:".9375rem",background:"#333965",display:"flex",justifyContent:"space-between"},children:[r(s,{sx:{display:{xs:"none",md:"flex"},width:"15%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),r(s,{sx:{display:"flex",width:"30%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"R$ 0"})]})]})}),r(U,{item:!0,xs:6,md:4,children:p(s,{sx:{width:"100%"},children:[r(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".375rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Maximum Value of Bet"}),r(s,{sx:{height:"4.0625rem",borderRadius:"0.625rem",pl:".9375rem",background:"#333965",display:"flex",justifyContent:"flex-start"},children:r(s,{sx:{display:"flex",width:"30%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"R$ 0"})})]})}),r(U,{item:!0,xs:12,md:4,children:p(s,{sx:{width:"100%"},children:[r(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Stop When Winning"}),p(s,{sx:{height:"4.0625rem",display:"flex",justifyContent:"flex-start"},children:[p(s,{sx:{display:"flex",width:{xs:"50%",md:"60%"},alignItems:"center",justifyContent:"space-between"},children:[r(Xe,{defaultChecked:!0,style:{transform:"rotate(90deg)"}}),p(s,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"80%"},children:[r(W,{sx:{fontWeight:700,fontSize:"0.625rem",marginBottom:".5rem",color:"#A6B0DA"},children:"Reset"}),r(W,{sx:{fontWeight:700,fontSize:"0.625rem",color:"#A6B0DA"},children:"Automentor"})]})]}),r(s,{sx:{display:"flex",width:{xs:"48%",md:"40%"},alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem",borderRadius:"0.625rem",ml:"auto",mr:"auto"},children:p(s,{sx:{height:"4.0625rem",borderRadius:"0.625rem",width:"100%",background:"#333965",display:"flex",justifyContent:"space-between",pl:{xs:".9375rem",md:0}},children:[r(s,{sx:{display:"flex",width:"25%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),r(s,{sx:{display:"flex",width:"50%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"%"})]})})]})]})}),r(U,{item:!0,xs:12,md:4,children:p(s,{sx:{width:"100%"},children:[r(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Stop When Losing"}),p(s,{sx:{height:"4.0625rem",display:"flex",justifyContent:"flex-start"},children:[p(s,{sx:{display:"flex",width:{xs:"50%",md:"60%"},alignItems:"center",justifyContent:"space-between"},children:[r(Xe,{defaultChecked:!0,style:{transform:"rotate(90deg)"}}),p(s,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"80%"},children:[r(W,{sx:{fontWeight:700,fontSize:"0.625rem",marginBottom:".5rem",color:"#A6B0DA"},children:"Reset"}),r(W,{sx:{fontWeight:700,fontSize:"0.625rem",color:"#A6B0DA"},children:"Automentor"})]})]}),r(s,{sx:{display:"flex",width:{xs:"48%",md:"40%"},alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem",borderRadius:"0.625rem",ml:"auto",mr:"auto"},children:p(s,{sx:{height:"4.0625rem",borderRadius:"0.625rem",width:"100%",background:"#333965",display:"flex",justifyContent:"space-between",pl:{xs:".9375rem",md:0}},children:[r(s,{sx:{display:"flex",width:"25%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),r(s,{sx:{display:"flex",width:"50%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"%"})]})})]})]})})]})})})]})})},vn="/build/assets/IconPurple-7f1a9f12.svg",Bn="/build/assets/IconYellow-db1448ed.svg",Mn="/build/assets/IconGreen-e8bba944.svg",In="/build/assets/IconBlue-0557801b.svg",En=[{field:"player",headerName:"Player",type:"number",sortable:!1,width:"25%",flex:1,cellClassName:"player-column--cell",renderCell:({row:{amount:t,player:e}})=>p(s,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r("img",{src:t>=23&&t<25?In:t>=25&&t<35?Bn:t>=35&&t<55?Mn:t>=55?vn:null}),r(W,{sx:{marginLeft:".5rem",fontWeight:"600",fontSize:"0.625rem"},children:e})]})},{field:"cash_out",headerName:"Cash Out",type:"text",sortable:!1,width:"25%",flex:1,cellClassName:"cash-column--cell"},{field:"amount",headerName:"Amount",type:"text",width:"25%",sortable:"false",flex:1,cellClassName:"amount-column--cell",renderCell:({row:{amount:t}})=>p(s,{children:[r(s,{sx:{color:"#43BB41",fontWeight:700,fontStyle:"italic",fontSize:".625rem",mr:".3rem"},component:"span",children:"R$"}),r(s,{sx:{color:"#FFFFFF",fontWeight:700,fontSize:".625rem"},component:"span",children:t})]})},{field:"profit",headerName:"Profit",type:"text",sortable:!1,width:"25%",flex:1,cellClassName:"profit-column--cell"}],zn=[{id:1,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:2,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:3,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:4,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:5,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:6,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:6,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:8,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:9,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:10,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:11,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:12,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:13,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:14,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:15,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:16,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:17,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:18,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:19,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:20,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:21,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:22,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:23,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:24,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:25,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:26,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:27,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:28,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:29,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:30,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:31,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:32,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:33,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:34,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:35,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:36,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:37,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:38,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:39,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:40,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:41,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:42,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:43,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:44,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:45,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:46,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:47,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:48,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:49,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:50,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:51,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:52,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"}],Vn=[{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13}];var Be={},_n=Je.exports;Object.defineProperty(Be,"__esModule",{value:!0});var at=Be.default=void 0,Wn=_n(Qe()),Tn=Ze,Pn=(0,Wn.default)((0,Tn.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");at=Be.default=Pn;var Me={},Rn=Je.exports;Object.defineProperty(Me,"__esModule",{value:!0});var st=Me.default=void 0,An=Rn(Qe()),Dn=Ze,jn=(0,An.default)((0,Dn.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");st=Me.default=jn;const Nn="/build/assets/candidates-348c4d9c.svg",$n="/build/assets/Ellipse 93-a55c9fb9.svg",Ln=()=>{const[t,e]=xe.useState("36.4rem"),[n,i]=xe.useState(!0);function o(){return p(jt,{children:[p(s,{sx:{display:"flex",height:"1rem",width:"120px",mr:"7.4375rem",justifyContent:"space-between",alignItems:"center"},children:[p(s,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[r("img",{src:$n,style:{marginRight:".2rem"}}),r("img",{src:Nn})]}),r(s,{sx:{fontSize:"0.875rem",color:"#A6B0DA",fontWeight:"600"},children:"0/50 Players"})]}),r(yt,{endIcon:n?r(st,{}):r(at,{}),sx:{color:"white",fontWeight:"600",fontSize:"0.625rem",borderRadius:"1.875rem",background:"#1D2036"},onClick:()=>{i(!n),e(n?"52rem":"36.4rem")},children:n?"Show More":"Show Less"})]})}return r(s,{sx:{width:"100%",height:t,display:"flex",justifyContent:"center","& .MuiDataGrid-columnHeaders":{backgroundColor:"#272C4B",borderBottom:"none"},"& .MuiDataGrid-columnHeaderTitleContainer":{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center",fontWeight:"700"},"& .MuiDataGrid-columnHeaderTitleContainerContent":{fontSize:"0.75rem",fontWeight:600,color:"#A6B0DA"},"& .profit-column--cell":{backgroundColor:"#272C4B",fontFamily:"Montserrat",fontWeight:"600",fontSize:"0.625rem",color:"#A7B0D6",textAlign:"center",display:"flex",justifyContent:"center !important",alignItems:"center",borderBottom:"none"},"& .cash-column--cell":{backgroundColor:"#272C4B",fontFamily:"Montserrat",fontWeight:"600",fontSize:"0.625rem",color:"#A7B0D6",textAlign:"center",display:"flex",justifyContent:"center !important",alignItems:"center",borderBottom:"none"},"& .player-column--cell":{backgroundColor:"#272C4B",fontFamily:"Montserrat",fontWeight:"600",fontSize:"0.625rem",color:"#FFFFFF",textAlign:"center",display:"flex",justifyContent:"center !important",alignItems:"center",borderBottom:"none"},"& .amount-column--cell":{backgroundColor:"#272C4B",fontFamily:"Montserrat",fontWeight:"700",fontSize:"0.9375rem",color:"#FFF96A",textAlign:"center",display:"flex",justifyContent:"center !important",alignItems:"center",borderBottom:"none"},"& .MuiDataGrid-virtualScroller":{backgroundColor:"#272C4B"},"&  .MuiDataGrid-columnSeparator":{visibility:"hidden"},"& .MuiDataGrid-footerContainer":{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center",backgroundColor:"#3B4271"}},children:r(Dt,{sx:{borderRadius:"0.625rem",borderLeft:"none",borderRight:"none",borderTop:"1px solid transparent",borderBottom:"none",overflowX:"hidden"},rows:zn,columns:En,disableColumnFilter:!0,disableColumnMenu:!0,autoPageSize:!0,components:{Footer:o}})})},G=it("div")(()=>({cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",width:"25%",padding:".1875rem, 0.0625rem"})),K=it("img")(()=>({cursor:"pointer"})),Yn=({GameFrame:t,ButtonGrid:e,GameFrameText:n,displayPanel:i=!0,customFrameStyles:o,customFrameBoxStyles:l,customFrameHeader:d=!1,innerHeader:c=!1})=>{const{isMobile:m}=wt();return p("div",{children:[r(s,{sx:{width:`${m?"6rem":"9rem"}`,height:`${m?"5.1875rem":"7.1875rem"}`,borderTopLeftRadius:"0.625rem",background:"linear-gradient(103.93deg, #337CFF 3.76%, #154BB2 71.62%)",clipPath:"polygon(0 0, 100% 7%, 93% 36%, 0 42%)",position:"absolute",top:0,left:0,transform:"translateY(-20%)",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",mt:".1875rem"},children:r(W,{sx:{fontFamily:"GROBOLD, montserrat",fontStyle:"normal",fontWeight:"500",fontSize:`${m?"1rem":"1.5rem"}`,position:"absolute",top:"4px",left:"1rem"},children:n})}),p(s,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:[p(s,{sx:{width:{xs:"100%",md:"65%"},display:"flex",paddingRight:"1rem",flexDirection:"column"},children:[r(s,{sx:{height:"1.5rem",width:"100%",justifyContent:"flex-end",alignItems:"center",display:{xs:`${d?"flex":"none"}`,md:"none"},mt:"-1.5rem",mb:".5rem"},children:p(s,{sx:{display:`${m?"flex":"none"}`,width:"34%"},children:[r(G,{children:r(K,{src:Ge})}),r(G,{children:r(K,{src:Ye})}),r(G,{children:r(K,{src:Ve})}),r(G,{children:r(K,{src:Ke})})]})}),p(s,{sx:{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:".625rem",flexDirection:"column",background:"#2E3565",padding:`${d?0:"1.12rem"}`,...o},children:[r(s,{sx:{height:"1.5rem",width:"100%",justifyContent:"flex-end",alignItems:"center",display:{xs:"none",md:`${c?"flex":"none"}`}},children:p(s,{sx:{display:"flex",width:"20%",mt:"1rem"},children:[r(G,{children:r(K,{src:Ge})}),r(G,{children:r(K,{src:Ye})}),r(G,{children:r(K,{src:Ve})}),r(G,{children:r(K,{src:Ke})})]})}),r(s,{sx:{width:"100%",display:"flex",justifyContent:"center",...l},children:t?t():null})]}),e?e():null,i&&r(Cn,{})]}),r(s,{sx:{width:"35%",display:{xs:"none",md:"flex"}},children:r(Ln,{})})]})]})};export{Yn as G,Xe as S,st as d,Vn as m};
