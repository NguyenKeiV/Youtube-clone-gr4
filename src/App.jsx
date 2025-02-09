import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";
// import Toolbar from "./components/ToolBar/Toolbar";
import { useState } from "react";
import SearchFeed from "./components/SearchFeed/SearchFeed";
// import VideoS from "./pages/Video copy/VideoS";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0);

  return (
    <>
      <Navbar setSidebar={setSidebar} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              sidebar={sidebar}
              category={category}
              setCategory={setCategory}
            />
          }
        />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route
          path="/search/:searchTerm"
          element={
            <SearchFeed
              sidebar={sidebar}
              category={category}
              setCategory={setCategory}
            />
          }
        />
        {/* <Route path="/video/:videoId" element={<VideoS />} /> */}
      </Routes>
    </>
  );
}

export default App;
