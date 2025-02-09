import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";
import Toolbar from "../../components/ToolBar/Toolbar";
import { useEffect } from "react";
export default function Home({ sidebar, category, setCategory }) {
  useEffect(() => {
    console.log("Category changed to:", category);
  }, [category]);
  return (
    <div>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />

      <div className={`container ${sidebar ? "" : "large-container"} `}>
        <div className="toolbar">
          <Toolbar category={category} setCategory={setCategory} />
        </div>

        <div className="feed-container">
          <Feed category={category} />
        </div>
      </div>
    </div>
  );
}
