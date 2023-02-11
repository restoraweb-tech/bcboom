import{m as ye,o as Se,M as J,p as Ue,q as ke,_ as w,r as p,t as Ce,v as ue,w as V,j as f,x as ve,y as xe,z as Je,a as r,A as Qe,D as ge,E as wt,G as yt,I as St,J as Ze,K as et,N as u,O as De,P as Ct,R as vt,S as Bt,V as It,W as Mt,X as Et,Y as zt,Z as _t,$ as Wt,a0 as Pt,a1 as we,e as je,B as c,k as W,a2 as Rt,a3 as tt,a4 as nt,a5 as it,l as Tt,s as rt,b as At}from"./app-02877d79.js";import"./Select-6c081d13.js";import{K as Dt,a as jt,D as Nt,G as $t}from"./DataGrid-8f7e1074.js";import{G as U}from"./Grid-05203873.js";let ee;function ot(){if(ee)return ee;const t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),ee="reverse",t.scrollLeft>0?ee="default":(t.scrollLeft=1,t.scrollLeft===0&&(ee="negative")),document.body.removeChild(t),ee}function Ne(t,e){const n=t.scrollLeft;if(e!=="rtl")return n;switch(ot()){case"negative":return t.scrollWidth-t.clientWidth+n;case"reverse":return t.scrollWidth-t.clientWidth-n;default:return n}}function Ft(t){return Se("MuiTab",t)}const Lt=ye("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),k=Lt,Ht=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],Ot=t=>{const{classes:e,textColor:n,fullWidth:i,wrapped:o,icon:l,label:s,selected:d,disabled:m}=t,x={root:["root",l&&s&&"labelIcon",`textColor${ke(n)}`,i&&"fullWidth",o&&"wrapped",d&&"selected",m&&"disabled"],iconWrapper:["iconWrapper"]};return ve(x,Ft,e)},Xt=J(Ue,{name:"MuiTab",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.label&&n.icon&&e.labelIcon,e[`textColor${ke(n.textColor)}`],n.fullWidth&&e.fullWidth,n.wrapped&&e.wrapped]}})(({theme:t,ownerState:e})=>w({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.label&&{flexDirection:e.iconPosition==="top"||e.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},e.icon&&e.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${k.iconWrapper}`]:w({},e.iconPosition==="top"&&{marginBottom:6},e.iconPosition==="bottom"&&{marginTop:6},e.iconPosition==="start"&&{marginRight:t.spacing(1)},e.iconPosition==="end"&&{marginLeft:t.spacing(1)})},e.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${k.selected}`]:{opacity:1},[`&.${k.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${k.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${k.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${k.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${k.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},e.wrapped&&{fontSize:t.typography.pxToRem(12)})),Gt=p.exports.forwardRef(function(e,n){const i=Ce({props:e,name:"MuiTab"}),{className:o,disabled:l=!1,disableFocusRipple:s=!1,fullWidth:d,icon:m,iconPosition:x="top",indicator:B,label:E,onChange:S,onClick:I,onFocus:D,selected:P,selectionFollowsFocus:y,textColor:N="inherit",value:M,wrapped:H=!1}=i,R=ue(i,Ht),T=w({},i,{disabled:l,disableFocusRipple:s,selected:P,icon:!!m,iconPosition:x,label:!!E,fullWidth:d,textColor:N,wrapped:H}),$=Ot(T),F=m&&E&&p.exports.isValidElement(m)?p.exports.cloneElement(m,{className:V($.iconWrapper,m.props.className)}):m,C=z=>{!P&&S&&S(z,M),I&&I(z)},L=z=>{y&&!P&&S&&S(z,M),D&&D(z)};return f(Xt,w({focusRipple:!s,className:V($.root,o),ref:n,role:"tab","aria-selected":P,disabled:l,onClick:C,onFocus:L,ownerState:T,tabIndex:P?0:-1},R,{children:[x==="top"||x==="start"?f(p.exports.Fragment,{children:[F,E]}):f(p.exports.Fragment,{children:[E,F]}),B]}))}),$e=Gt;function Kt(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function Vt(t,e,n,i={},o=()=>{}){const{ease:l=Kt,duration:s=300}=i;let d=null;const m=e[t];let x=!1;const B=()=>{x=!0},E=S=>{if(x){o(new Error("Animation cancelled"));return}d===null&&(d=S);const I=Math.min(1,(S-d)/s);if(e[t]=l(I)*(n-m)+m,I>=1){requestAnimationFrame(()=>{o(null)});return}requestAnimationFrame(E)};return m===n?(o(new Error("Element already at target position")),B):(requestAnimationFrame(E),B)}const Yt=["onChange"],qt={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Ut(t){const{onChange:e}=t,n=ue(t,Yt),i=p.exports.useRef(),o=p.exports.useRef(null),l=()=>{i.current=o.current.offsetHeight-o.current.clientHeight};return p.exports.useEffect(()=>{const s=xe(()=>{const m=i.current;l(),m!==i.current&&e(i.current)}),d=Je(o.current);return d.addEventListener("resize",s),()=>{s.clear(),d.removeEventListener("resize",s)}},[e]),p.exports.useEffect(()=>{l(),e(i.current)},[e]),r("div",w({style:qt,ref:o},n))}function kt(t){return Se("MuiTabScrollButton",t)}const Jt=ye("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Qt=Jt;var Fe,Le;const Zt=["className","direction","orientation","disabled"],en=t=>{const{classes:e,orientation:n,disabled:i}=t;return ve({root:["root",n,i&&"disabled"]},kt,e)},tn=J(Ue,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.orientation&&e[n.orientation]]}})(({ownerState:t})=>w({width:40,flexShrink:0,opacity:.8,[`&.${Qt.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),nn=p.exports.forwardRef(function(e,n){const i=Ce({props:e,name:"MuiTabScrollButton"}),{className:o,direction:l}=i,s=ue(i,Zt),m=Qe().direction==="rtl",x=w({isRtl:m},i),B=en(x);return r(tn,w({component:"div",className:V(B.root,o),ref:n,role:null,ownerState:x,tabIndex:null},s,{children:l==="left"?Fe||(Fe=r(Dt,{fontSize:"small"})):Le||(Le=r(jt,{fontSize:"small"}))}))}),rn=nn;function on(t){return Se("MuiTabs",t)}const ln=ye("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),be=ln,an=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],He=(t,e)=>t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t.firstChild,Oe=(t,e)=>t===e?t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t.lastChild,de=(t,e,n)=>{let i=!1,o=n(t,e);for(;o;){if(o===t.firstChild){if(i)return;i=!0}const l=o.disabled||o.getAttribute("aria-disabled")==="true";if(!o.hasAttribute("tabindex")||l)o=n(t,o);else{o.focus();return}}},sn=t=>{const{vertical:e,fixed:n,hideScrollbar:i,scrollableX:o,scrollableY:l,centered:s,scrollButtonsHideMobile:d,classes:m}=t;return ve({root:["root",e&&"vertical"],scroller:["scroller",n&&"fixed",i&&"hideScrollbar",o&&"scrollableX",l&&"scrollableY"],flexContainer:["flexContainer",e&&"flexContainerVertical",s&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",d&&"scrollButtonsHideMobile"],scrollableX:[o&&"scrollableX"],hideScrollbar:[i&&"hideScrollbar"]},on,m)},cn=J("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[{[`& .${be.scrollButtons}`]:e.scrollButtons},{[`& .${be.scrollButtons}`]:n.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,n.vertical&&e.vertical]}})(({ownerState:t,theme:e})=>w({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${be.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}})),dn=J("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.scroller,n.fixed&&e.fixed,n.hideScrollbar&&e.hideScrollbar,n.scrollableX&&e.scrollableX,n.scrollableY&&e.scrollableY]}})(({ownerState:t})=>w({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),un=J("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.flexContainer,n.vertical&&e.flexContainerVertical,n.centered&&e.centered]}})(({ownerState:t})=>w({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),hn=J("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,e)=>e.indicator})(({ownerState:t,theme:e})=>w({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(e.vars||e).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(e.vars||e).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),mn=J(Ut,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Xe={},pn=p.exports.forwardRef(function(e,n){const i=Ce({props:e,name:"MuiTabs"}),o=Qe(),l=o.direction==="rtl",{"aria-label":s,"aria-labelledby":d,action:m,centered:x=!1,children:B,className:E,component:S="div",allowScrollButtonsMobile:I=!1,indicatorColor:D="primary",onChange:P,orientation:y="horizontal",ScrollButtonComponent:N=rn,scrollButtons:M="auto",selectionFollowsFocus:H,TabIndicatorProps:R={},TabScrollButtonProps:T={},textColor:$="primary",value:F,variant:C="standard",visibleScrollbar:L=!1}=i,z=ue(i,an),O=C==="scrollable",_=y==="vertical",te=_?"scrollTop":"scrollLeft",le=_?"top":"left",ae=_?"bottom":"right",he=_?"clientHeight":"clientWidth",ne=_?"height":"width",ie=w({},i,{component:S,allowScrollButtonsMobile:I,indicatorColor:D,orientation:y,vertical:_,scrollButtons:M,textColor:$,variant:C,visibleScrollbar:L,fixed:!O,hideScrollbar:O&&!L,scrollableX:O&&!_,scrollableY:O&&_,centered:x&&!O,scrollButtonsHideMobile:!I}),X=sn(ie),[Me,dt]=p.exports.useState(!1),[Y,Ee]=p.exports.useState(Xe),[Q,ut]=p.exports.useState({start:!1,end:!1}),[ze,ht]=p.exports.useState({overflow:"hidden",scrollbarWidth:0}),_e=new Map,j=p.exports.useRef(null),re=p.exports.useRef(null),We=()=>{const a=j.current;let h;if(a){const b=a.getBoundingClientRect();h={clientWidth:a.clientWidth,scrollLeft:a.scrollLeft,scrollTop:a.scrollTop,scrollLeftNormalized:Ne(a,o.direction),scrollWidth:a.scrollWidth,top:b.top,bottom:b.bottom,left:b.left,right:b.right}}let g;if(a&&F!==!1){const b=re.current.children;if(b.length>0){const v=b[_e.get(F)];g=v?v.getBoundingClientRect():null}}return{tabsMeta:h,tabMeta:g}},oe=ge(()=>{const{tabsMeta:a,tabMeta:h}=We();let g=0,b;if(_)b="top",h&&a&&(g=h.top-a.top+a.scrollTop);else if(b=l?"right":"left",h&&a){const A=l?a.scrollLeftNormalized+a.clientWidth-a.scrollWidth:a.scrollLeft;g=(l?-1:1)*(h[b]-a[b]+A)}const v={[b]:g,[ne]:h?h[ne]:0};if(isNaN(Y[b])||isNaN(Y[ne]))Ee(v);else{const A=Math.abs(Y[b]-v[b]),Z=Math.abs(Y[ne]-v[ne]);(A>=1||Z>=1)&&Ee(v)}}),me=(a,{animation:h=!0}={})=>{h?Vt(te,j.current,a,{duration:o.transitions.duration.standard}):j.current[te]=a},Pe=a=>{let h=j.current[te];_?h+=a:(h+=a*(l?-1:1),h*=l&&ot()==="reverse"?-1:1),me(h)},Re=()=>{const a=j.current[he];let h=0;const g=Array.from(re.current.children);for(let b=0;b<g.length;b+=1){const v=g[b];if(h+v[he]>a){b===0&&(h=a);break}h+=v[he]}return h},mt=()=>{Pe(-1*Re())},pt=()=>{Pe(Re())},ft=p.exports.useCallback(a=>{ht({overflow:null,scrollbarWidth:a})},[]),gt=()=>{const a={};a.scrollbarSizeListener=O?r(mn,{onChange:ft,className:V(X.scrollableX,X.hideScrollbar)}):null;const h=Q.start||Q.end,g=O&&(M==="auto"&&h||M===!0);return a.scrollButtonStart=g?r(N,w({orientation:y,direction:l?"right":"left",onClick:mt,disabled:!Q.start},T,{className:V(X.scrollButtons,T.className)})):null,a.scrollButtonEnd=g?r(N,w({orientation:y,direction:l?"left":"right",onClick:pt,disabled:!Q.end},T,{className:V(X.scrollButtons,T.className)})):null,a},Te=ge(a=>{const{tabsMeta:h,tabMeta:g}=We();if(!(!g||!h)){if(g[le]<h[le]){const b=h[te]+(g[le]-h[le]);me(b,{animation:a})}else if(g[ae]>h[ae]){const b=h[te]+(g[ae]-h[ae]);me(b,{animation:a})}}}),q=ge(()=>{if(O&&M!==!1){const{scrollTop:a,scrollHeight:h,clientHeight:g,scrollWidth:b,clientWidth:v}=j.current;let A,Z;if(_)A=a>1,Z=a<h-g-1;else{const ce=Ne(j.current,o.direction);A=l?ce<b-v-1:ce>1,Z=l?ce>1:ce<b-v-1}(A!==Q.start||Z!==Q.end)&&ut({start:A,end:Z})}});p.exports.useEffect(()=>{const a=xe(()=>{j.current&&(oe(),q())}),h=Je(j.current);h.addEventListener("resize",a);let g;return typeof ResizeObserver<"u"&&(g=new ResizeObserver(a),Array.from(re.current.children).forEach(b=>{g.observe(b)})),()=>{a.clear(),h.removeEventListener("resize",a),g&&g.disconnect()}},[oe,q]);const pe=p.exports.useMemo(()=>xe(()=>{q()}),[q]);p.exports.useEffect(()=>()=>{pe.clear()},[pe]),p.exports.useEffect(()=>{dt(!0)},[]),p.exports.useEffect(()=>{oe(),q()}),p.exports.useEffect(()=>{Te(Xe!==Y)},[Te,Y]),p.exports.useImperativeHandle(m,()=>({updateIndicator:oe,updateScrollButtons:q}),[oe,q]);const Ae=r(hn,w({},R,{className:V(X.indicator,R.className),ownerState:ie,style:w({},Y,R.style)}));let se=0;const bt=p.exports.Children.map(B,a=>{if(!p.exports.isValidElement(a))return null;const h=a.props.value===void 0?se:a.props.value;_e.set(h,se);const g=h===F;return se+=1,p.exports.cloneElement(a,w({fullWidth:C==="fullWidth",indicator:g&&!Me&&Ae,selected:g,selectionFollowsFocus:H,onChange:P,textColor:$,value:h},se===1&&F===!1&&!a.props.tabIndex?{tabIndex:0}:{}))}),xt=a=>{const h=re.current,g=wt(h).activeElement;if(g.getAttribute("role")!=="tab")return;let v=y==="horizontal"?"ArrowLeft":"ArrowUp",A=y==="horizontal"?"ArrowRight":"ArrowDown";switch(y==="horizontal"&&l&&(v="ArrowRight",A="ArrowLeft"),a.key){case v:a.preventDefault(),de(h,g,Oe);break;case A:a.preventDefault(),de(h,g,He);break;case"Home":a.preventDefault(),de(h,null,He);break;case"End":a.preventDefault(),de(h,null,Oe);break}},fe=gt();return f(cn,w({className:V(X.root,E),ownerState:ie,ref:n,as:S},z,{children:[fe.scrollButtonStart,fe.scrollbarSizeListener,f(dn,{className:X.scroller,ownerState:ie,style:{overflow:ze.overflow,[_?`margin${l?"Left":"Right"}`:"marginBottom"]:L?void 0:-ze.scrollbarWidth},ref:j,onScroll:pe,children:[r(un,{"aria-label":s,"aria-labelledby":d,"aria-orientation":y==="vertical"?"vertical":null,className:X.flexContainer,ownerState:ie,onKeyDown:xt,ref:re,role:"tablist",children:bt}),Me&&Ae]}),fe.scrollButtonEnd]}))}),fn=pn;var gn=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],lt=p.exports.forwardRef(function(t,e){var n,i=t.prefixCls,o=i===void 0?"rc-switch":i,l=t.className,s=t.checked,d=t.defaultChecked,m=t.disabled,x=t.loadingIcon,B=t.checkedChildren,E=t.unCheckedChildren,S=t.onClick,I=t.onChange,D=t.onKeyDown,P=yt(t,gn),y=St(!1,{value:s,defaultValue:d}),N=Ze(y,2),M=N[0],H=N[1];function R(C,L){var z=M;return m||(z=C,H(z),I==null||I(z,L)),z}function T(C){C.which===De.LEFT?R(!1,C):C.which===De.RIGHT&&R(!0,C),D==null||D(C)}function $(C){var L=R(!M,C);S==null||S(L,C)}var F=et(o,l,(n={},u(n,"".concat(o,"-checked"),M),u(n,"".concat(o,"-disabled"),m),n));return p.exports.createElement("button",w({},P,{type:"button",role:"switch","aria-checked":M,disabled:m,className:F,ref:e,onKeyDown:T,onClick:$}),x,p.exports.createElement("span",{className:"".concat(o,"-inner")},p.exports.createElement("span",{className:"".concat(o,"-inner-checked")},B),p.exports.createElement("span",{className:"".concat(o,"-inner-unchecked")},E)))});lt.displayName="Switch";var bn=function(e){var n,i,o,l,s,d=e.componentCls,m=d+"-inner";return u({},d,u({},"&"+d+"-small",(s={minWidth:e.switchMinWidthSM,height:e.switchHeightSM,lineHeight:e.switchHeightSM+"px"},u(s,d+"-inner",(n={},u(n,m+"-checked",{marginInlineStart:"calc("+e.switchInnerMarginMinSM+"px - 100% + "+(e.switchPinSizeSM+e.switchPadding*2)+"px)",marginInlineEnd:"calc("+e.switchInnerMarginMaxSM+"px + 100% - "+(e.switchPinSizeSM+e.switchPadding*2)+"px)"}),u(n,m+"-unchecked",{marginTop:-e.switchHeightSM,marginInlineStart:e.switchInnerMarginMaxSM,marginInlineEnd:e.switchInnerMarginMinSM}),n)),u(s,d+"-handle",{width:e.switchPinSizeSM,height:e.switchPinSizeSM}),u(s,d+"-loading-icon",{top:(e.switchPinSizeSM-e.switchLoadingIconSize)/2,fontSize:e.switchLoadingIconSize}),u(s,"&"+d+"-checked",(o={},u(o,d+"-inner",(i={},u(i,m+"-checked",{marginInlineStart:e.switchInnerMarginMinSM,marginInlineEnd:e.switchInnerMarginMaxSM}),u(i,m+"-unchecked",{marginInlineStart:"calc("+e.switchInnerMarginMaxSM+"px + 100% - "+(e.switchPinSizeSM+e.switchPadding*2)+"px)",marginInlineEnd:"calc("+e.switchInnerMarginMinSM+"px - 100% + "+(e.switchPinSizeSM+e.switchPadding*2)+"px)"}),i)),u(o,d+"-handle",{insetInlineStart:"calc(100% - "+(e.switchPinSizeSM+e.switchPadding)+"px)"}),o)),u(s,"&:not("+d+"-disabled):active",(l={},u(l,"&:not("+d+"-checked) "+m,u({},m+"-unchecked",{marginInlineStart:e.switchInnerMarginMaxSM+e.marginXXS/2,marginInlineEnd:e.switchInnerMarginMinSM-e.marginXXS/2})),u(l,"&"+d+"-checked "+m,u({},m+"-checked",{marginInlineStart:e.switchInnerMarginMinSM-e.marginXXS/2,marginInlineEnd:e.switchInnerMarginMaxSM+e.marginXXS/2})),l)),s)))},xn=function(e){var n,i=e.componentCls;return u({},i,(n={},u(n,i+"-loading-icon"+e.iconCls,{position:"relative",top:(e.switchPinSize-e.fontSize)/2,color:e.switchLoadingIconColor,verticalAlign:"top"}),u(n,"&"+i+"-checked "+i+"-loading-icon",{color:e.switchColor}),n))},wn=function(e){var n,i,o=e.componentCls,l=o+"-handle";return u({},o,(i={},u(i,l,{position:"absolute",top:e.switchPadding,insetInlineStart:e.switchPadding,width:e.switchPinSize,height:e.switchPinSize,transition:"all "+e.switchDuration+" ease-in-out","&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:e.colorWhite,borderRadius:e.switchPinSize/2,boxShadow:e.switchHandleShadow,transition:"all "+e.switchDuration+" ease-in-out",content:'""'}}),u(i,"&"+o+"-checked "+l,{insetInlineStart:"calc(100% - "+(e.switchPinSize+e.switchPadding)+"px)"}),u(i,"&:not("+o+"-disabled):active",(n={},u(n,l+"::before",{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0}),u(n,"&"+o+"-checked "+l+"::before",{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}),n)),i))},yn=function(e){var n,i,o,l,s=e.componentCls,d=s+"-inner";return u({},s,(l={},u(l,d,(n={display:"block",overflow:"hidden",borderRadius:100,height:"100%"},u(n,d+"-checked, "+d+"-unchecked",{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:"margin-inline-start "+e.switchDuration+" ease-in-out, margin-inline-end "+e.switchDuration+" ease-in-out",pointerEvents:"none"}),u(n,d+"-checked",{marginInlineStart:"calc("+e.switchInnerMarginMin+"px - 100% + "+(e.switchPinSize+e.switchPadding*2)+"px)",marginInlineEnd:"calc("+e.switchInnerMarginMax+"px + 100% - "+(e.switchPinSize+e.switchPadding*2)+"px)"}),u(n,d+"-unchecked",{marginTop:-e.switchHeight,marginInlineStart:e.switchInnerMarginMax,marginInlineEnd:e.switchInnerMarginMin}),n)),u(l,"&"+s+"-checked "+d,(i={},u(i,d+"-checked",{marginInlineStart:e.switchInnerMarginMin,marginInlineEnd:e.switchInnerMarginMax}),u(i,d+"-unchecked",{marginInlineStart:"calc("+e.switchInnerMarginMax+"px + 100% - "+(e.switchPinSize+e.switchPadding*2)+"px)",marginInlineEnd:"calc("+e.switchInnerMarginMin+"px - 100% + "+(e.switchPinSize+e.switchPadding*2)+"px)"}),i)),u(l,"&:not("+s+"-disabled):active",(o={},u(o,"&:not("+s+"-checked) "+d,u({},d+"-unchecked",{marginInlineStart:e.switchInnerMarginMax+e.switchPadding*2,marginInlineEnd:e.switchInnerMarginMin-e.switchPadding*2})),u(o,"&"+s+"-checked "+d,u({},d+"-checked",{marginInlineStart:e.switchInnerMarginMin-e.switchPadding*2,marginInlineEnd:e.switchInnerMarginMax+e.switchPadding*2})),o)),l))},Sn=function(e){var n,i=e.componentCls;return u({},i,w(w(w(w({},It(e)),u({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:e.switchMinWidth,height:e.switchHeight,lineHeight:e.switchHeight+"px",verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all "+e.motionDurationMid,userSelect:"none"},"&:hover:not("+i+"-disabled)",{background:e.colorTextTertiary})),Mt(e)),(n={},u(n,"&"+i+"-checked",u({background:e.switchColor},"&:hover:not("+i+"-disabled)",{background:e.colorPrimaryHover})),u(n,"&"+i+"-loading, &"+i+"-disabled",{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),u(n,"&"+i+"-rtl",{direction:"rtl"}),n)))};const Cn=Ct("Switch",function(t){var e=t.fontSize*t.lineHeight,n=t.controlHeight/2,i=2,o=e-i*2,l=n-i*2,s=vt(t,{switchMinWidth:o*2+i*4,switchHeight:e,switchDuration:t.motionDurationMid,switchColor:t.colorPrimary,switchDisabledOpacity:t.opacityLoading,switchInnerMarginMin:o/2,switchInnerMarginMax:o+i+i*2,switchPadding:i,switchPinSize:o,switchBg:t.colorBgContainer,switchMinWidthSM:l*2+i*2,switchHeightSM:n,switchInnerMarginMinSM:l/2,switchInnerMarginMaxSM:l+i+i*2,switchPinSizeSM:l,switchHandleShadow:"0 2px 4px 0 "+new Bt("#00230b").setAlpha(.2).toRgbString(),switchLoadingIconSize:t.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, "+t.opacityLoading+")",switchHandleActiveInset:"-30%"});return[Sn(s),yn(s),wn(s),xn(s),bn(s)]});var vn=globalThis&&globalThis.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]]);return n},at=p.exports.forwardRef(function(t,e){var n,i=t.prefixCls,o=t.size,l=t.disabled,s=t.loading,d=t.className,m=d===void 0?"":d,x=vn(t,["prefixCls","size","disabled","loading","className"]),B=p.exports.useContext(Et),E=B.getPrefixCls,S=B.direction,I=p.exports.useContext(zt),D=p.exports.useContext(_t),P=(l??D)||s,y=E("switch",i),N=p.exports.createElement("div",{className:y+"-handle"},s&&p.exports.createElement(Pt,{className:y+"-loading-icon"})),M=Cn(y),H=Ze(M,2),R=H[0],T=H[1],$=et((n={},u(n,y+"-small",(o||I)==="small"),u(n,y+"-loading",s),u(n,y+"-rtl",S==="rtl"),n),m,T);return R(p.exports.createElement(Wt,{insertExtraNode:!0},p.exports.createElement(lt,w({},x,{prefixCls:y,className:$,disabled:P,ref:e,loadingIcon:N}))))});at.__ANT_SWITCH=!0;const Ge=at,Ke="/build/assets/Keyboard-4469f08e.svg",Ve="/build/assets/Volume-bb75af6f.svg",Ye="/build/assets/help-b13ab0f2.svg",qe="/build/assets/Activity-c9adb182.svg",Bn=()=>{const[t,e]=we.useState(1),n=(s,d)=>{e(d)};function i(s){const{children:d,value:m,index:x,...B}=s;return r("div",{role:"tabpanel",hidden:m!==x,id:`simple-tabpanel-${x}`,"aria-labelledby":`simple-tab-${x}`,style:{width:"100%"},...B,children:m===x&&r(c,{sx:{},children:r(c,{sx:{width:"100%",marginTop:"1.25rem"},children:d})})})}function o(s){return{id:`simple-tab-${s}`,"aria-controls":`simple-tabpanel-${s}`}}je(s=>s.game);const{wallet:l}=je(s=>s.wallet);return r("div",{children:f(c,{sx:{width:"100%",marginTop:"1.875rem",padding:"0.625rem, 0",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[r(c,{children:f(fn,{value:t,onChange:n,"aria-label":"lab API tabs example",indicatorColor:"primary",children:[r($e,{label:"Manual",...o(0)}),r($e,{label:"Auto",...o(1)})]})}),r(i,{value:t,index:0}),r(i,{value:t,index:1,children:r(c,{sx:{height:{xs:"30rem",md:"14.9375rem"},background:"#272C4B",borderRadius:"0.625rem",flexGrow:1,padding:"1.2rem"},children:f(U,{container:!0,spacing:2,children:[r(U,{item:!0,xs:6,md:4,children:f(c,{sx:{width:"100%"},children:[r(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Number of Bets"}),f(c,{sx:{height:"4.0625rem",borderRadius:"0.625rem",pl:".9375rem",background:"#333965",display:"flex",justifyContent:"space-between"},children:[r(c,{sx:{display:"flex",width:"15%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),r(c,{sx:{display:{xs:"none",md:"flex"},width:"30%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"R$ 0"})]})]})}),r(U,{item:!0,xs:6,md:4,children:f(c,{sx:{width:"100%"},children:[r(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Stop on Profits"}),f(c,{sx:{height:"4.0625rem",borderRadius:"0.625rem",pl:".9375rem",background:"#333965",display:"flex",justifyContent:"space-between"},children:[r(c,{sx:{display:{xs:"none",md:"flex"},width:"15%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),r(c,{sx:{display:"flex",width:"30%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"R$ 0"})]})]})}),r(U,{item:!0,xs:6,md:4,children:f(c,{sx:{width:"100%"},children:[r(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Stop the Loss"}),f(c,{sx:{height:"4.0625rem",borderRadius:"0.625rem",pl:".9375rem",background:"#333965",display:"flex",justifyContent:"space-between"},children:[r(c,{sx:{display:{xs:"none",md:"flex"},width:"15%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),r(c,{sx:{display:"flex",width:"30%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"R$ 0"})]})]})}),r(U,{item:!0,xs:6,md:4,children:f(c,{sx:{width:"100%"},children:[r(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".375rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Maximum Value of Bet"}),r(c,{sx:{height:"4.0625rem",borderRadius:"0.625rem",pl:".9375rem",background:"#333965",display:"flex",justifyContent:"flex-start"},children:f(c,{sx:{display:"flex",width:"30%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:["R$"," ",Rt.format(l.withdrawable_balance).replace("$","")]})})]})}),r(U,{item:!0,xs:12,md:4,children:f(c,{sx:{width:"100%"},children:[r(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Stop When Winning"}),f(c,{sx:{height:"4.0625rem",display:"flex",justifyContent:"flex-start"},children:[f(c,{sx:{display:"flex",width:{xs:"50%",md:"60%"},alignItems:"center",justifyContent:"space-between"},children:[r(Ge,{defaultChecked:!0,style:{transform:"rotate(90deg)"}}),f(c,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"80%"},children:[r(W,{sx:{fontWeight:700,fontSize:"0.625rem",marginBottom:".5rem",color:"#A6B0DA"},children:"Reset"}),r(W,{sx:{fontWeight:700,fontSize:"0.625rem",color:"#A6B0DA"},children:"Automentor"})]})]}),r(c,{sx:{display:"flex",width:{xs:"48%",md:"40%"},alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem",borderRadius:"0.625rem",ml:"auto",mr:"auto"},children:f(c,{sx:{height:"4.0625rem",borderRadius:"0.625rem",width:"100%",background:"#333965",display:"flex",justifyContent:"space-between",pl:{xs:".9375rem",md:0}},children:[r(c,{sx:{display:"flex",width:"25%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),r(c,{sx:{display:"flex",width:"50%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"%"})]})})]})]})}),r(U,{item:!0,xs:12,md:4,children:f(c,{sx:{width:"100%"},children:[r(W,{sx:{fontWeight:"700",fontSize:{xs:".8rem",md:".6rem",lg:".875rem"},color:"#A6B0DA",mb:"0.3125rem"},children:"Stop When Losing"}),f(c,{sx:{height:"4.0625rem",display:"flex",justifyContent:"flex-start"},children:[f(c,{sx:{display:"flex",width:{xs:"50%",md:"60%"},alignItems:"center",justifyContent:"space-between"},children:[r(Ge,{defaultChecked:!0,style:{transform:"rotate(90deg)"}}),f(c,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"80%"},children:[r(W,{sx:{fontWeight:700,fontSize:"0.625rem",marginBottom:".5rem",color:"#A6B0DA"},children:"Reset"}),r(W,{sx:{fontWeight:700,fontSize:"0.625rem",color:"#A6B0DA"},children:"Automentor"})]})]}),r(c,{sx:{display:"flex",width:{xs:"48%",md:"40%"},alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem",borderRadius:"0.625rem",ml:"auto",mr:"auto"},children:f(c,{sx:{height:"4.0625rem",borderRadius:"0.625rem",width:"100%",background:"#333965",display:"flex",justifyContent:"space-between",pl:{xs:".9375rem",md:0}},children:[r(c,{sx:{display:"flex",width:"25%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"0"}),r(c,{sx:{display:"flex",width:"50%",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:"%"})]})})]})]})})]})})})]})})},In="/build/assets/IconPurple-7f1a9f12.svg",Mn="/build/assets/IconYellow-db1448ed.svg",En="/build/assets/IconGreen-e8bba944.svg",zn="/build/assets/IconBlue-0557801b.svg",_n=[{field:"player",headerName:"Player",type:"number",sortable:!1,width:"25%",flex:1,cellClassName:"player-column--cell",renderCell:({row:{amount:t,player:e}})=>f(c,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r("img",{src:t>=23&&t<25?zn:t>=25&&t<35?Mn:t>=35&&t<55?En:t>=55?In:null}),r(W,{sx:{marginLeft:".5rem",fontWeight:"600",fontSize:"0.625rem"},children:e})]})},{field:"cash_out",headerName:"Cash Out",type:"text",sortable:!1,width:"25%",flex:1,cellClassName:"cash-column--cell"},{field:"amount",headerName:"Amount",type:"text",width:"25%",sortable:"false",flex:1,cellClassName:"amount-column--cell",renderCell:({row:{amount:t}})=>f(c,{children:[r(c,{sx:{color:"#43BB41",fontWeight:700,fontStyle:"italic",fontSize:".625rem",mr:".3rem"},component:"span",children:"R$"}),r(c,{sx:{color:"#FFFFFF",fontWeight:700,fontSize:".625rem"},component:"span",children:t})]})},{field:"profit",headerName:"Profit",type:"text",sortable:!1,width:"25%",flex:1,cellClassName:"profit-column--cell"}],Wn=[{id:1,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:2,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:3,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:4,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:5,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:6,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:6,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:8,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:9,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:10,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:11,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:12,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:13,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:14,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:15,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:16,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:17,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:18,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:19,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:20,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:21,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:22,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:23,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:24,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:25,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:26,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:27,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:28,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:29,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:30,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:31,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:32,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:33,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:34,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:35,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:36,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:37,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:38,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:39,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:40,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:41,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:42,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:43,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:44,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:45,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:46,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:47,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:48,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"},{id:49,player:"Emma",cash_out:"Betting",amount:23,profit:"Betting"},{id:50,player:"Emma",cash_out:"Betting",amount:25,profit:"Betting"},{id:51,player:"Emma",cash_out:"Betting",amount:35,profit:"Betting"},{id:52,player:"Emma",cash_out:"Betting",amount:55,profit:"Betting"}],Vn=[{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13},{multiplier:1.15,hits:13}];var Be={},Pn=nt.exports;Object.defineProperty(Be,"__esModule",{value:!0});var st=Be.default=void 0,Rn=Pn(tt()),Tn=it,An=(0,Rn.default)((0,Tn.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");st=Be.default=An;var Ie={},Dn=nt.exports;Object.defineProperty(Ie,"__esModule",{value:!0});var ct=Ie.default=void 0,jn=Dn(tt()),Nn=it,$n=(0,jn.default)((0,Nn.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");ct=Ie.default=$n;const Fn="/build/assets/candidates-348c4d9c.svg",Ln="/build/assets/Ellipse 93-a55c9fb9.svg",Hn=()=>{const[t,e]=we.useState("36.4rem"),[n,i]=we.useState(!0);function o(){return f($t,{children:[f(c,{sx:{display:"flex",height:"1rem",width:"120px",mr:"7.4375rem",justifyContent:"space-between",alignItems:"center",position:"relative",zIndex:100},children:[f(c,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[r("img",{src:Ln,style:{marginRight:".2rem"}}),r("img",{src:Fn})]}),r(c,{sx:{fontSize:"0.875rem",color:"#A6B0DA",fontWeight:"600"},children:"0/50 Players"})]}),r(Tt,{endIcon:n?r(ct,{}):r(st,{}),sx:{color:"white",fontWeight:"600",fontSize:"0.625rem",borderRadius:"1.875rem",background:"#1D2036"},onClick:()=>{i(!n),e(n?"52rem":"36.4rem")},children:n?"Show More":"Show Less"})]})}return r(c,{sx:{width:"100%",height:t,display:"flex",justifyContent:"center","& .MuiDataGrid-columnHeaders":{backgroundColor:"#272C4B",borderBottom:"none"},"& .MuiDataGrid-columnHeaderTitleContainer":{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center",fontWeight:"700"},"& .MuiDataGrid-columnHeaderTitleContainerContent":{fontSize:"0.75rem",fontWeight:600,color:"#A6B0DA"},"& .profit-column--cell":{backgroundColor:"#272C4B",fontFamily:"Montserrat",fontWeight:"600",fontSize:"0.625rem",color:"#A7B0D6",textAlign:"center",display:"flex",justifyContent:"center !important",alignItems:"center",borderBottom:"none"},"& .cash-column--cell":{backgroundColor:"#272C4B",fontFamily:"Montserrat",fontWeight:"600",fontSize:"0.625rem",color:"#A7B0D6",textAlign:"center",display:"flex",justifyContent:"center !important",alignItems:"center",borderBottom:"none"},"& .player-column--cell":{backgroundColor:"#272C4B",fontFamily:"Montserrat",fontWeight:"600",fontSize:"0.625rem",color:"#FFFFFF",textAlign:"center",display:"flex",justifyContent:"center !important",alignItems:"center",borderBottom:"none"},"& .amount-column--cell":{backgroundColor:"#272C4B",fontFamily:"Montserrat",fontWeight:"700",fontSize:"0.9375rem",color:"#FFF96A",textAlign:"center",display:"flex",justifyContent:"center !important",alignItems:"center",borderBottom:"none"},"& .MuiDataGrid-virtualScroller":{backgroundColor:"#272C4B"},"&  .MuiDataGrid-columnSeparator":{visibility:"hidden"},"& .MuiDataGrid-footerContainer":{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center",backgroundColor:"#3B4271"}},children:r(Nt,{sx:{borderRadius:"0.625rem",borderLeft:"none",borderRight:"none",borderTop:"1px solid transparent",borderBottom:"none",overflowX:"hidden"},rows:Wn,columns:_n,disableColumnFilter:!0,disableColumnMenu:!0,autoPageSize:!0,components:{Footer:o}})})},G=rt("div")(()=>({cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",width:"25%",padding:".1875rem, 0.0625rem"})),K=rt("img")(()=>({cursor:"pointer"})),Yn=({GameFrame:t,ButtonGrid:e,GameFrameText:n,displayPanel:i=!0,customFrameStyles:o,customFrameBoxStyles:l,customFrameHeader:s=!1,innerHeader:d=!1,GameBg:m})=>{const{isMobile:x}=At();return f("div",{children:[r(c,{sx:{width:`${x?"6rem":"9rem"}`,height:`${x?"5.1875rem":"7.1875rem"}`,borderTopLeftRadius:"0.625rem",background:"linear-gradient(103.93deg, #337CFF 3.76%, #154BB2 71.62%)",clipPath:"polygon(0 0, 100% 7%, 93% 36%, 0 42%)",position:"absolute",top:0,left:0,transform:"translateY(-20%)",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",mt:".1875rem"},children:r(W,{sx:{fontFamily:"GROBOLD, montserrat",fontStyle:"normal",fontWeight:"500",fontSize:`${x?"1rem":"1.5rem"}`,position:"absolute",top:"4px",left:"1rem"},children:n})}),f(c,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:[f(c,{sx:{width:{xs:"100%",md:"65%"},display:"flex",paddingRight:"1rem",flexDirection:"column"},children:[r(c,{sx:{height:"1.5rem",width:"100%",justifyContent:"flex-end",alignItems:"center",display:{xs:`${s?"flex":"none"}`,md:"none"},mt:"-1.5rem",mb:".5rem"},children:f(c,{sx:{display:`${x?"flex":"none"}`,width:"34%"},children:[r(G,{children:r(K,{src:Ke})}),r(G,{children:r(K,{src:qe})}),r(G,{children:r(K,{src:Ye})}),r(G,{children:r(K,{src:Ve})})]})}),f(c,{sx:{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:".625rem",flexDirection:"column",background:"#2E3565",padding:`${s?0:"1.12rem"}`,...o},children:[m&&m,r(c,{sx:{height:"1.5rem",width:"100%",justifyContent:"flex-end",alignItems:"center",display:{xs:"none",md:`${d?"flex":"none"}`},zIndex:1e3,position:"relative"},children:f(c,{sx:{display:"flex",width:"20%",mt:"1rem"},children:[r(G,{children:r(K,{src:Ke})}),r(G,{children:r(K,{src:qe})}),r(G,{children:r(K,{src:Ye})}),r(G,{children:r(K,{src:Ve})})]})}),r(c,{sx:{width:"100%",display:"flex",justifyContent:"center",zIndex:100,...l},children:t||null})]}),e||null,i&&r(Bn,{})]}),r(c,{sx:{width:"35%",display:{xs:"none",md:"flex"},zIndex:100},children:r(Hn,{})})]})]})};export{Yn as G,Ge as S,ct as d,Vn as m};