import{u,r as l,j as r,a as s,H as p}from"./app-6b85c219.js";import{G as c}from"./GuestLayout-c4fb794c.js";import{T as f,I as w}from"./TextInput-857dde85.js";import{I as h}from"./InputLabel-256b55e0.js";import{P as g}from"./PrimaryButton-54eee5d7.js";import"./dropdown-1a7d737f.js";function C(){const{data:e,setData:t,post:o,processing:m,errors:n,reset:i}=u({password:""});l.exports.useEffect(()=>()=>{i("password")},[]);const d=a=>{t(a.target.name,a.target.value)};return r(c,{children:[s(p,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),r("form",{onSubmit:a=>{a.preventDefault(),o(route("password.confirm"))},children:[r("div",{className:"mt-4",children:[s(h,{forInput:"password",value:"Password"}),s(f,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(w,{message:n.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(g,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}export{C as default};