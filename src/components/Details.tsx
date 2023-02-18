import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, Divider, Tag } from "antd";
import { Criterion, Stock } from "./types";
import PlainText from "./PlainText";
import Variable from "./Variable";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const stock: Stock = location.state;

  const renderData = (data: Criterion, index: number) => {
    switch (data.type) {
      case "plain_text":
        return (
          <PlainText
            text={data.text}
            stockLength={stock.criteria.length - 1}
            index={index}
          />
        );
      case "variable":
        return (
          <Variable
            data={data}
            stockLength={stock.criteria.length - 1}
            index={index}
          />
        );

      default:
        break;
    }
  };

  return (
    <>
      <div className="App-header">
        <p className="back m-l">
          <ArrowLeftOutlined onClick={() => navigate("/")} /> Go Back
        </p>
        <Card bordered={false} className="card-details">
          <>
            <div className="heading">
              {stock.name}
              <br />
              <Tag color={stock.color} className="tag">
                {stock.tag}
              </Tag>
            </div>
            <Divider />
            {stock?.criteria.map((ele: Criterion, index: number) => {
              return <div key={index}>{renderData(ele, index)}</div>;
            })}
          </>
        </Card>
      </div>
    </>
  );
}

export default Details;
