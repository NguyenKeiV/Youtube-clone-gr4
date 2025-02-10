import { useEffect, useState } from "react";
import TabMenu from "../../components/TableMenu/TableMenu";
import VideoCard from "../../components/VideoCard/VideoCard";
import "./Trending.css"; // Import CSS
import { API_KEY } from "../../data";


const BASE_URL = "https://www.googleapis.com/youtube/v3/videos";

const categories = {
  "Mới nhất": "0",
  "Âm nhạc": "10",
  "Trò chơi": "20",
  "Phim ảnh": "24",
};

const Trending = () => {
  const [activeTab, setActiveTab] = useState("Mới nhất");
  const [videos, setVideos] = useState([]);

  const fetchTrendingVideos = async (categoryId) => {
    const url = `${BASE_URL}?part=snippet,statistics
      &chart=mostPopular
      &regionCode=VN
      &videoCategoryId=${categoryId}
      &maxResults=10
      &key=${API_KEY}`.replace(/\s+/g, "");

    try {
      const response = await fetch(url);
      const data = await response.json();
      setVideos(data.items || []);
    } catch (error) {
      console.error("Lỗi khi gọi API YouTube:", error);
      setVideos([]);
    }
  };

  useEffect(() => {
    fetchTrendingVideos(categories[activeTab]);
  }, [activeTab]);

  return (
    <div className="trending-page">
      <h1>🔥 Thịnh hành</h1>
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="video-list">
        {videos.length > 0 ? (
          videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.snippet.title}
              views={video.statistics.viewCount}
              time={new Date(video.snippet.publishedAt).toLocaleDateString()}
              thumbnail={video.snippet.thumbnails.medium.url}
            />
          ))
        ) : (
          <p>Đang tải dữ liệu...</p>
        )}
      </div>
    </div>
  );
};

export default Trending;
