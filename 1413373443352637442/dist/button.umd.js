(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.AlgorithmAnimation = factory());
})(this, function() {
  "use strict";
  const Button = "_Button_en3w4_1";
  var styles = {
    Button
  };
  const Widget = ({ input, onExecuted }) => {
    const [text, setText] = React.useState();
    const [output, setOutput] = React.useState();
    React.useEffect(() => {
      try {
        const inputData = JSON.parse(input);
        if (!!inputData.text) {
          setText(inputData.text);
        }
        if (!!inputData.output) {
          setOutput(inputData.output);
        }
      } catch (e) {
      }
    }, [input]);
    return /* @__PURE__ */ React.createElement("button", {
      type: "button",
      onClick: () => {
        onExecuted(output);
      },
      className: styles.Button
    }, text);
  };
  return Widget;
});
