<<<<<<<< HEAD:public/build/assets/ResetPassword-8074f3cf.js
import{u as f,r as h,j as a,a as s,H as v}from"./app-6ef42842.js";import{T as m,I as n}from"./TextInput-79b04f09.js";import{I as l}from"./InputLabel-d0924ccc.js";import{P as g}from"./PrimaryButton-8704e0e0.js";import"./howler-5aa7ec92.js";function _({token:i,email:d}){const{data:r,setData:p,post:u,processing:c,errors:o,reset:w}=f({token:i,email:d,password:"",password_confirmation:""});h.exports.useEffect(()=>()=>{w("password","password_confirmation")},[]);const t=e=>{p(e.target.name,e.target.value)};return a("div",{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),u(route("password.store"))},children:[a("div",{children:[s(l,{forInput:"email",value:"Email"}),s(m,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:t}),s(n,{message:o.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{forInput:"password",value:"Password"}),s(m,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:t}),s(n,{message:o.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{forInput:"password_confirmation",value:"Confirm Password"}),s(m,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:t}),s(n,{message:o.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(g,{className:"ml-4",processing:c,children:"Reset Password"})})]})]})}export{_ as default};
========
import{u as f,r as h,j as a,a as s,H as v}from"./app-f9ccef28.js";import{T as m,I as n}from"./TextInput-04d999bd.js";import{I as l}from"./InputLabel-22a2558e.js";import{P as g}from"./PrimaryButton-c0700126.js";import"./howler-5aa7ec92.js";function _({token:i,email:d}){const{data:r,setData:p,post:u,processing:c,errors:o,reset:w}=f({token:i,email:d,password:"",password_confirmation:""});h.exports.useEffect(()=>()=>{w("password","password_confirmation")},[]);const t=e=>{p(e.target.name,e.target.value)};return a("div",{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),u(route("password.store"))},children:[a("div",{children:[s(l,{forInput:"email",value:"Email"}),s(m,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:t}),s(n,{message:o.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{forInput:"password",value:"Password"}),s(m,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:t}),s(n,{message:o.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{forInput:"password_confirmation",value:"Confirm Password"}),s(m,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:t}),s(n,{message:o.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(g,{className:"ml-4",processing:c,children:"Reset Password"})})]})]})}export{_ as default};
>>>>>>>> eba4bf5588429c54cd0aa883fae16c93afaba9f1:public/build/assets/ResetPassword-fcf9d74d.js
