import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import moment from "moment";
import "./History.css";
import { value_converter } from "../../data";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function History() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  // Lấy dữ liệu từ localStorage khi component mount
  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("watchHistory")) || [];
    setHistory(storedHistory);
  }, []);

  // Xóa toàn bộ lịch sử xem
  const clearHistory = () => {
    localStorage.removeItem("watchHistory");
    setHistory([]);
  };

  // Xóa một video khỏi lịch sử xem
  const removeVideo = (id) => {
    const updatedHistory = history.filter((video) => video.id !== id);
    localStorage.setItem("watchHistory", JSON.stringify(updatedHistory));
    setHistory(updatedHistory);
  };

  return (
    <div className="history-page">
      <h1>Watch History</h1>
      <h3>Today</h3>
      <div className="history-header">
        <div>
          {history.length === 0 ? (
            <p className="empty-history">This list has no videos.</p>
          ) : (
            <div className="history-feed">
              {history.map((video) => (
                <div key={video.id} className="history-card">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="history-thumbnail"
                    onClick={() => navigate(`/video/general/${video.id}`)}
                  />
                  <div className="history-info">
                    <h2 className="video-title">{video.title}</h2>
                    <p>
                      {video.channel} &bull; {value_converter(video.viewCount)}{" "}
                      views
                    </p>
                    <p className="video-description">{video.description}</p>
                  </div>
                  <div className="btn-controller">
                    <button
                      className="remove-btn"
                      onClick={() => removeVideo(video.id)}
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {history.length > 0 && (
            <button onClick={clearHistory} className="clear-all">
              <RiDeleteBin6Line /> Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
