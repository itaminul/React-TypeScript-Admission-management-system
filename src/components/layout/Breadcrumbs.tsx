// Breadcrumbs.tsx
import React from "react";
import { useSelector } from "react-redux";
import { Breadcrumb } from "antd";
import { RootState } from "../../redux/store";

const Breadcrumbs: React.FC = () => {
  const breadcrumbs = useSelector(
    (state: RootState) => state.breadcrumbs.breadcrumbs
  );

  return (
    <Breadcrumb>
      {breadcrumbs.map((breadcrumb, index) => (
        <Breadcrumb.Item key={index}>
          <a href={breadcrumb.path}>{breadcrumb.title}</a>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
