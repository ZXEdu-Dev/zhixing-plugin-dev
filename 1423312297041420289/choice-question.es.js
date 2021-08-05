var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const Question = "_Question_19kql_1";
const OptionList = "_OptionList_19kql_11";
const Item = "_Item_19kql_15";
const Selected = "_Selected_19kql_25";
const Button = "_Button_19kql_30";
var styles = {
  "Question-Box": "_Question-Box_19kql_1",
  Question,
  OptionList,
  Item,
  Selected,
  Button
};
const Widget = ({ options }) => {
  const { input, onExecuted } = options;
  const [question, setQuestion] = React.useState();
  const [multiple, setMultiple] = React.useState(false);
  const [optionList, setOptionList] = React.useState([]);
  React.useEffect(() => {
    try {
      const inputData = JSON.parse(input);
      if (!!inputData.question) {
        setQuestion(inputData.question);
      }
      if (!!inputData.multiple) {
        setMultiple(inputData.multiple);
      }
      if (!!inputData.optionList) {
        setOptionList(inputData.optionList.map((item) => {
          return { text: item, selected: false };
        }));
      }
    } catch (e) {
      console.log(e);
    }
  }, [input]);
  const submit = React.useCallback(() => {
    const answerList = optionList.map((item, index) => {
      return __spreadProps(__spreadValues({}, item), { index });
    }).filter((item, index) => {
      return item.selected;
    }).map((item) => {
      return item.index;
    }).sort();
    if (multiple) {
      onExecuted(answerList.join());
    } else {
      onExecuted(answerList[0]);
    }
  }, [multiple, optionList]);
  const select = React.useCallback((item, index) => {
    if (multiple) {
      setOptionList((answers) => {
        answers.forEach((it, idx) => {
          if (idx === index) {
            it.selected = !it.selected;
          }
        });
        return Array.from(answers);
      });
    } else {
      setOptionList((answers) => {
        answers.forEach((it, idx) => {
          if (idx === index) {
            it.selected = !it.selected;
          } else {
            it.selected = false;
          }
        });
        return Array.from(answers);
      });
    }
  }, [multiple]);
  return /* @__PURE__ */ React.createElement("div", {
    className: styles["Question-Box"]
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.Question
  }, question), /* @__PURE__ */ React.createElement("div", {
    className: styles.OptionList
  }, optionList.map((item, index) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: `${styles.Item} ${item.selected ? styles.Selected : ""}`,
      onClick: () => {
        select(item, index);
      }
    }, item.text);
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    disabled: optionList.filter((item) => {
      return item.selected;
    }).length === 0,
    type: "button",
    onClick: submit,
    className: styles.Button
  }, "\u63D0\u4EA4")));
};
export default Widget;
