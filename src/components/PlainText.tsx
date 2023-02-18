import { Divider } from "antd";
import React from "react";
import { Props } from "./types";

function PlainText(props: Props) {
  const { text, stockLength, index } = props;
  return (
    <>
      <div className="text">{text}</div>
      {stockLength === index ? null : <Divider className="divider" />}
    </>
  );
}

export default PlainText;
