import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import moment from "moment";
import "./History.css";
import { value_converter } from "../../data";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoPauseOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

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
      <div className="history-container">
        <h3>Today</h3>
      </div>
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
                    <button>
                      <PiDotsThreeVerticalBold />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="history-controller">
          <div className="history-search">
            <CiSearch className="history-icon" />
            <input type="text" placeholder="Search watch history" />
          </div>
          <div className="clear">
            {history.length > 0 && (
              <button onClick={clearHistory} className="clear-all">
                <RiDeleteBin6Line className="icon" /> Clear all watch history
              </button>
            )}
          </div>
          <div className="history-controller-btn">
            <div>
              <IoPauseOutline className="icon" />
              <button>Pause watch history</button>
            </div>
            <div>
              <IoSettingsOutline className="icon" />
              <button>Manage all history</button>
            </div>
          </div>
          <div className="history-manage">
            <a href="#">Comments</a>
            <a href="#">Posts</a>
            <a href="#">Live chat</a>
          </div>
        </div>
      </div>
    </div>
  );
}
