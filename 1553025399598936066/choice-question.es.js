var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,a,c)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[a]=c,s=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&n(e,a,t[a]);if(c)for(var a of c(t))o.call(t,a)&&n(e,a,t[a]);return e},r=(e,c)=>t(e,a(c));var i="_Question-Box_19xez_1",m="_Question_19xez_1",u="_Input-Box_19xez_11",p="_Icon_19xez_16",d="_Input_19xez_11",R="_OptionList_19xez_32",_="_Item_19xez_32",b="_Selected_19xez_42",f="_Action_19xez_48",x="_Button_19xez_57";export default({options:e})=>{const{input:t,onExecuted:a,onChange:c,mode:l="display",api:{showRichText:o,showRichEditor:n}}=e,[h,E]=React.useState(),[y,g]=React.useState(!1),[v,k]=React.useState([]),[C,N]=React.useState(),[z,w]=React.useState("edit"===l),O=React.useRef(),S=React.useCallback((e=>(console.log(e),n(e))),[]);React.useEffect((()=>{if(!O.current)try{const e=JSON.parse(t);e.question&&E(e.question),e.multiple&&g(e.multiple),e.optionList&&k(e.optionList.map((e=>({text:e,selected:!1})))),O.current=!0}catch(e){console.log(e)}}),[t]),React.useEffect((()=>{if(!c)return;const e={question:h,multiple:y,optionList:v.map((e=>e.text))};c(JSON.stringify(e))}),[h,y,v]);const j=React.useMemo((()=>{const e=v.map(((e,t)=>r(s({},e),{index:t}))).filter(((e,t)=>e.selected)).map((e=>e.index)).sort();if(0!==e.length)return y?e.join():`${e[0]}`}),[y,v]),A=React.useCallback((()=>{N(j),a(j)}),[j]),B=React.useCallback((()=>{k((e=>e.concat([{}])))}),[]),I=React.useCallback((e=>{k((t=>(t.splice(e,1),Array.from(t))))}),[]),P=React.useCallback(((e,t)=>{k(y?e=>(e.forEach(((e,a)=>{a===t&&(e.selected=!e.selected)})),Array.from(e)):e=>(e.forEach(((e,a)=>{e.selected=a===t&&!e.selected})),Array.from(e)))}),[y]);return React.createElement("div",{className:i},React.createElement("div",{className:m},z?React.createElement(S,{placeholder:"问题",onChange:e=>{console.log(e),E(e)},className:d,options:{image:!0,heading:!0,codeBlock:!0,blockQuote:!0,subscript:!0}}):o({html:h})),React.createElement("div",{className:R},v.map(((e,t)=>z?React.createElement("div",{key:t,className:u},React.createElement("textarea",{placeholder:"选项",className:`${d} ${_}`,value:e.text,onChange:e=>{k((a=>{const c=Array.from(a);return c[t]=r(s({},c[t]),{text:e.target.value}),c}))}}),React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",onClick:()=>{I(t)},className:p,fill:"#ef4444"},React.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),React.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"}))):React.createElement("div",{key:t,className:`${_} ${e.selected?b:""}`,onClick:()=>{P(e,t)}},o({html:e.text}))))),React.createElement("div",{className:f},React.createElement("button",{disabled:!j||j===C,type:"button",onClick:A,className:x},"提交"),z&&React.createElement("button",{type:"button",onClick:B,className:x},"新增"),z&&React.createElement("button",{type:"button",onClick:()=>{g((e=>!e))},className:x},y?"多选":"单选"),"edit"===l&&React.createElement("button",{type:"button",onClick:()=>{w((e=>!e))},className:x},z?"普通模式":"编辑模式")))};
