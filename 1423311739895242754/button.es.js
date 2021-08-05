const Button = "_Button_en3w4_1";
var styles = {
  Button
};
const Widget = ({ options }) => {
  const { input, onExecuted } = options;
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
export default Widget;
