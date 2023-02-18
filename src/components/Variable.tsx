import React from "react";
import { Divider } from "antd";
import { Criterion, Props } from "./types";

function Variable(props: Props) {
  const { stockLength, index, data } = props;
  const renderText = (data: Criterion | any) => {
    let text;
    if (data.type === "variable") {
      const keys = Object.keys(data.variable);
      keys.forEach((item) => {
        if (data.text.includes(item)) {
          if (data.variable[item].type === "value")
            text = data.text.replace(
              `${item}`,
              `${data.variable[item].values[0]}`
            );
        }
        if (data.variable[item].type === "indicator") {
          text = data.text.replace(
            `${item}`,
            `${data.variable[item].default_value}`
          );
        }
      });
    }
    return text;
  };

  return (
    <>
      <div className="text">{renderText(data)}</div>
      {stockLength === index ? null : <Divider className="divider" />}
    </>
  );
}

export default Variable;
