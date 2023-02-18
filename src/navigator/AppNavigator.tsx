import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Result } from "antd";
import Loader from "../components/Loader";

const Dashboard = lazy(() => import("../components/Dashboard"));
const Details = lazy(() => import("../components/Details"));

const AppNavigator = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/details/:id" element={<Details />} />
            <Route
              path="*"
              element={
                <Result
                  status="404"
                  title="404"
                  subTitle="Sorry, the page you visited does not exist."
                />
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default AppNavigator;
