import { Link, useParams } from "react-router";
import "./SearchFeed.css";
import { API_KEY, value_converter } from "../../data";
import { useEffect, useState } from "react";
import moment from "moment";
import Sidebar from "../Sidebar/Sidebar";

// import VideoS from "../../pages/Video copy/VideoS";


export default function SearchFeed({ sidebar, category, setCategory }) {
  const [data, setData] = useState([]);
  const { searchTerm, videoId } = useParams();

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${encodeURIComponent(
      searchTerm
    )}&key=${API_KEY}`;

    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (

    <div>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />

      <div className={`container ${sidebar ? "" : "large-container"} `}>
        <div className="feed-container">
          <div className="search-feed">
            {data.map((item, index) => (
              <Link
                key={index}
                to={`/video/general/${item.id.videoId}`}
                className="card"
              >
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{moment(item.snippet.publishedAt).fromNow()}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
