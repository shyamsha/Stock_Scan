import React from "react";
import { Divider } from "antd";
import { Criterion, Props } from "./types";

function Variable(props: Props) {
  const { stockLength, index, data } = props;
  const renderText = (data: Criterion | any) => {
    let text: any;
    if (data.type === "variable") {
      const keys = Object.keys(data.variable);
      keys.forEach((item) => {
        if (data.text.includes(item)) {
          if (data.variable[item].type === "value")
            text = data.text.replace(
              `${item}`,
              `<span style="color: #4F46E5;">
                ${data.variable[item].values[0]}
              </span>`
            );
        }
        if (data.variable[item].type === "indicator") {
          text = data.text.replace(
            `${item}`,
            `<span style="color: #4F46E5;">${data.variable[item].default_value}</span>`
          );
        }
      });
    }
    return text;
  };

  return (
    <>
      <div
        className="text"
        dangerouslySetInnerHTML={{
          __html: renderText(data),
        }}
      ></div>
      {stockLength === index ? null : <Divider className="divider" />}
    </>
  );
}

export default Variable;
