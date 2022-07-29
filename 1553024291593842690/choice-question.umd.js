var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,a)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,__spreadValues=(e,t)=>{for(var a in t||(t={}))__hasOwnProp.call(t,a)&&__defNormalProp(e,a,t[a]);if(__getOwnPropSymbols)for(var a of __getOwnPropSymbols(t))__propIsEnum.call(t,a)&&__defNormalProp(e,a,t[a]);return e},__spreadProps=(e,t)=>__defProps(e,__getOwnPropDescs(t));!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ChoiceQuestion=t()}(this,(function(){"use strict";var e="_Question-Box_19xez_1",t="_Question_19xez_1",a="_Input-Box_19xez_11",o="_Icon_19xez_16",c="_Input_19xez_11",s="_OptionList_19xez_32",r="_Item_19xez_32",n="_Selected_19xez_42",l="_Action_19xez_48",i="_Button_19xez_57";return({options:p})=>{const{input:_,onExecuted:u,onChange:m,mode:d="display",api:{showRichText:f,showRichEditor:b}}=p,[R,h]=React.useState(),[x,y]=React.useState(!1),[g,E]=React.useState([]),[P,w]=React.useState(),[O,N]=React.useState("edit"===d),v=React.useRef(),C=React.useCallback((e=>b(e)),[]);React.useEffect((()=>{if(!v.current)try{const e=JSON.parse(_);e.question&&h(e.question),e.multiple&&y(e.multiple),e.optionList&&E(e.optionList.map((e=>({text:e,selected:!1})))),v.current=!0}catch(e){console.log(e)}}),[_]),React.useEffect((()=>{if(!m)return;const e={question:R,multiple:x,optionList:g.map((e=>e.text))};m(JSON.stringify(e))}),[R,x,g]);const k=React.useMemo((()=>{const e=g.map(((e,t)=>__spreadProps(__spreadValues({},e),{index:t}))).filter(((e,t)=>e.selected)).map((e=>e.index)).sort();if(0!==e.length)return x?e.join():`${e[0]}`}),[x,g]),z=React.useCallback((()=>{w(k),u(k)}),[k]),S=React.useCallback((()=>{E((e=>e.concat([{}])))}),[]),j=React.useCallback((e=>{E((t=>(t.splice(e,1),Array.from(t))))}),[]),I=React.useCallback(((e,t)=>{E(x?e=>(e.forEach(((e,a)=>{a===t&&(e.selected=!e.selected)})),Array.from(e)):e=>(e.forEach(((e,a)=>{e.selected=a===t&&!e.selected})),Array.from(e)))}),[x]);return React.createElement("div",{className:e},React.createElement("div",{className:t},O?React.createElement(C,{placeholder:"问题",defaultValue:R,onChange:e=>{h(e),console.log(e)},className:c,options:{image:!0,heading:!0,codeBlock:!0,blockQuote:!0,subscript:!0}}):f({html:R})),React.createElement("div",{className:s},g.map(((e,t)=>O?React.createElement("div",{key:t,className:a},React.createElement("textarea",{placeholder:"选项",className:`${c} ${r}`,value:e.text,onChange:e=>{E((a=>{const o=Array.from(a);return o[t]=__spreadProps(__spreadValues({},o[t]),{text:e.target.value}),o}))}}),React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",onClick:()=>{j(t)},className:o,fill:"#ef4444"},React.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),React.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"}))):React.createElement("div",{key:t,className:`${r} ${e.selected?n:""}`,onClick:()=>{I(e,t)}},f({html:e.text}))))),React.createElement("div",{className:l},React.createElement("button",{disabled:!k||k===P,type:"button",onClick:z,className:i},"提交"),O&&React.createElement("button",{type:"button",onClick:S,className:i},"新增"),O&&React.createElement("button",{type:"button",onClick:()=>{y((e=>!e))},className:i},x?"多选":"单选"),"edit"===d&&React.createElement("button",{type:"button",onClick:()=>{N((e=>!e))},className:i},O?"普通模式":"编辑模式")))}}));
