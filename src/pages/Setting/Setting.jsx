import React from "react";
import { useState } from "react";

import "./Setting.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Setting = ({ sidebar }) => {
  const [category, setCategory] = useState(0);
  return (
    <div className="setting">
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div>a</div>
    </div>
  );
};

export default Setting;
