(function(m,p){typeof exports=="object"&&typeof module!="undefined"?module.exports=p():typeof define=="function"&&define.amd?define(p):(m=typeof globalThis!="undefined"?globalThis:m||self,m.ChoiceQuestion=p())})(this,function(){"use strict";var n={"Question-Box":"_Question-Box_19xez_1",Question:"_Question_19xez_1","Input-Box":"_Input-Box_19xez_11",Icon:"_Icon_19xez_16",Input:"_Input_19xez_11",OptionList:"_OptionList_19xez_32",Item:"_Item_19xez_32",Selected:"_Selected_19xez_42",Action:"_Action_19xez_48",Button:"_Button_19xez_57"};return({options:y})=>{const{input:f,onExecuted:B,onChange:R,mode:_="display",api:{showRichText:h,showRichEditor:b}}=y,[d,x]=React.useState(),[s,E]=React.useState(!1),[i,u]=React.useState([]),[A,C]=React.useState(),[l,N]=React.useState(_==="edit"),I=React.useRef();React.useEffect(()=>{if(!I.current)try{const e=JSON.parse(f);e.question&&x(e.question),e.multiple&&E(e.multiple),e.optionList&&u(e.optionList.map(t=>({text:t,selected:!1}))),I.current=!0}catch(e){console.log(e)}},[f]),React.useEffect(()=>{if(!R)return;const e={question:d,multiple:s,optionList:i.map(t=>t.text)};R(JSON.stringify(e))},[d,s,i]);const r=React.useMemo(()=>{const e=i.map((t,c)=>({...t,index:c})).filter((t,c)=>t.selected).map(t=>t.index).sort();if(e.length!==0)return s?e.join():`${e[0]}`},[s,i]),g=React.useCallback(()=>{C(r),B(r)},[r]),v=React.useCallback(()=>{u(e=>e.concat([{}]))},[]),z=React.useCallback(e=>{u(t=>(t.splice(e,1),Array.from(t)))},[]),S=React.useCallback((e,t)=>{u(s?c=>(c.forEach((o,a)=>{a===t&&(o.selected=!o.selected)}),Array.from(c)):c=>(c.forEach((o,a)=>{a===t?o.selected=!o.selected:o.selected=!1}),Array.from(c)))},[s]);return React.createElement("div",{className:n["Question-Box"]},React.createElement("div",{className:n.Question},l?b({placeholder:"\u95EE\u9898",defaultValue:d,onChange:e=>{x(e)},className:n.Input}):h({html:d})),React.createElement("div",{className:n.OptionList},i.map((e,t)=>l?React.createElement("div",{key:t,className:n["Input-Box"]},React.createElement("textarea",{placeholder:"\u9009\u9879",className:`${n.Input} ${n.Item}`,value:e.text,onChange:c=>{u(o=>{const a=Array.from(o);return a[t]={...a[t],text:c.target.value},a})}}),React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",onClick:()=>{z(t)},className:n.Icon,fill:"#ef4444"},React.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),React.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"}))):React.createElement("div",{key:t,className:`${n.Item} ${e.selected?n.Selected:""}`,onClick:()=>{S(e,t)}},h({html:e.text})))),React.createElement("div",{className:n.Action},React.createElement("button",{disabled:!r||r===A,type:"button",onClick:g,className:n.Button},"\u63D0\u4EA4"),l&&React.createElement("button",{type:"button",onClick:v,className:n.Button},"\u65B0\u589E"),l&&React.createElement("button",{type:"button",onClick:()=>{E(e=>!e)},className:n.Button},s?"\u591A\u9009":"\u5355\u9009"),_==="edit"&&React.createElement("button",{type:"button",onClick:()=>{N(e=>!e)},className:n.Button},l?"\u666E\u901A\u6A21\u5F0F":"\u7F16\u8F91\u6A21\u5F0F")))}});