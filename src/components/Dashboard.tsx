import React, { useEffect, useState } from "react";
import { Card, Divider, Space, Tag } from "antd";
import { Stock } from "./types";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function Dashboard() {
  const url =
    "https://jsonware.com/api/v1/json/402b9d6d-9862-4c19-b336-c456999258d6";
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const navigateData = (ele: Stock, id: number) => {
    navigate(`details/${id}`, { state: ele });
  };
  const getData = (url: string) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setStockData(data.data);
      });
  };

  useEffect(() => {
    getData(url);
  }, []);
  if (loading) return <Loader />;
  return (
    <>
      <div className="App-header">
        <Card bordered={false} className="card">
          {stockData.map((ele: Stock, index: number) => {
            return (
              <div key={ele.id + index}>
                <div
                  className="container"
                  onClick={() => navigateData(ele, ele.id)}
                >
                  <p className="title">{ele.name}</p>
                  <Space>
                    <Tag color={ele.color} className="tag">
                      {ele.tag}
                    </Tag>
                    <span>
                      <RightOutlined />
                    </span>
                  </Space>
                </div>
                {stockData.length - 1 === index ? null : (
                  <Divider className="divider" />
                )}
              </div>
            );
          })}
        </Card>
      </div>
    </>
  );
}
export default Dashboard;
