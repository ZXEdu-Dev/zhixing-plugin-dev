var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,a,c)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[a]=c,s=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&n(e,a,t[a]);if(c)for(var a of c(t))o.call(t,a)&&n(e,a,t[a]);return e},r=(e,c)=>t(e,a(c));var i="_Question-Box_18tp1_1",p="_Question_18tp1_1",u="_Input-Box_18tp1_11",m="_Icon_18tp1_17",d="_Input_18tp1_11",R="_OptionList_18tp1_32",b="_Item_18tp1_32",_="_Selected_18tp1_46",f="_Action_18tp1_52",h="_Button_18tp1_61";export default({options:e})=>{const{input:t,onExecuted:a,onChange:c,mode:l="display",api:{showRichText:o,showRichEditor:n}}=e,[E,y]=React.useState(""),[k,g]=React.useState(!1),[x,C]=React.useState([]),[v,N]=React.useState(),[w,O]=React.useState("edit"===l),S=React.useRef(),j=React.useCallback((e=>o(e)),[]),B=React.useCallback((e=>n(e)),[]);React.useEffect((()=>{if(!S.current)try{const e=JSON.parse(t);e.question&&y(e.question),e.multiple&&g(e.multiple),e.optionList&&C(e.optionList.map((e=>({text:e,selected:!1})))),S.current=!0}catch(e){console.log(e)}}),[t]),React.useEffect((()=>{if(!c)return;const e={question:E,multiple:k,optionList:x.map((e=>e.text))};c(JSON.stringify(e))}),[E,k,x]);const A=React.useMemo((()=>{const e=x.map(((e,t)=>r(s({},e),{index:t}))).filter(((e,t)=>e.selected)).map((e=>e.index)).sort();if(0!==e.length)return k?e.join():`${e[0]}`}),[k,x]),I=React.useCallback((()=>{N(A),a(A)}),[A]),P=React.useCallback((()=>{C((e=>e.concat([{}])))}),[]),$=React.useCallback((e=>{C((t=>(t.splice(e,1),Array.from(t))))}),[]),L=React.useCallback(((e,t)=>{C(k?e=>(e.forEach(((e,a)=>{a===t&&(e.selected=!e.selected)})),Array.from(e)):e=>(e.forEach(((e,a)=>{e.selected=a===t&&!e.selected})),Array.from(e)))}),[k]);return React.createElement("div",{className:i},React.createElement("div",{className:p},w?React.createElement(B,{className:d,options:{image:!0,heading:!0,codeBlock:!0,blockQuote:!0,subscript:!0},placeholder:"题目",defaultValue:E,onChange:e=>{y(e)}}):React.createElement(j,{html:E})),React.createElement("div",{className:R},x.map(((e,t)=>w?React.createElement("div",{key:t,className:u},React.createElement(B,{className:`${d} ${b}`,options:{image:!0,heading:!0,codeBlock:!0,blockQuote:!0,subscript:!0},placeholder:"题目",defaultValue:e.text,onChange:e=>{C((a=>{const c=Array.from(a);return c[t]=r(s({},c[t]),{text:e}),c}))}}),React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",onClick:()=>{$(t)},className:m,fill:"#ef4444"},React.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),React.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"}))):React.createElement("div",{key:t,className:`${b} ${e.selected?_:""}`,onClick:()=>{L(e,t)}},React.createElement(j,{html:e.text}))))),React.createElement("div",{className:f},React.createElement("button",{disabled:!A||A===v,type:"button",onClick:I,className:h},"提交"),w&&React.createElement("button",{type:"button",onClick:P,className:h},"新增"),w&&React.createElement("button",{type:"button",onClick:()=>{g((e=>!e))},className:h},k?"多选":"单选"),"edit"===l&&React.createElement("button",{type:"button",onClick:()=>{O((e=>!e))},className:h},w?"普通模式":"编辑模式")))};
