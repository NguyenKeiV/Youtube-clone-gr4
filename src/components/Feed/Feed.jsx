import { Link, useNavigate } from "react-router-dom";
import "./Feed.css";
import { API_KEY, value_converter } from "../../data";
import { useCallback, useEffect, useRef, useState } from "react";
import moment from "moment";

export default function Feed({ category }) {
  const [data, setData] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const observer = useRef();
  const navigate = useNavigate(); 

  // Hàm Fetch API xử lý lỗi 403
  const fetchData = useCallback(
    async (pageToken = "") => {
      if (loading) return; // Tránh gọi API liên tục
      setLoading(true);

      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=${category}&pageToken=${pageToken}&key=${API_KEY}`;

      try {
        const response = await fetch(videoList_url);

        if (response.status === 403) {
          console.error("Lỗi 403: Quota exceeded hoặc không có quyền truy cập");
          navigate("/404"); 
          return;
        }

        if (!response.ok) {
          throw new Error(`Error ${response.status}: Failed to fetch data`);
        }

        const result = await response.json();
        if (!result.items || result.items.length === 0) {
          throw new Error("No videos found");
        }

        setTimeout(() => {
          setData((prevData) => [...prevData, ...result.items]);
          setNextPageToken(result.nextPageToken || null);
          setLoading(false);
        }, 1000); // Giữ spinner hiển thị trong 1s
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        navigate("/404"); 
      }
    },
    [category, loading, navigate]
  );

  // Gọi API khi `category` thay đổi
  useEffect(() => {
    setData([]); // Reset dữ liệu
    fetchData();
  }, [category, fetchData]);

  // Infinite Scroll
  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextPageToken && !loading) {
          fetchData(nextPageToken);
        }
      });
      if (node) observer.current.observe(node);
    },
    [nextPageToken, fetchData, loading]
  );

  return (
    <div className="feed">
      {data.map((item, index) => {
        const isLastItem = index === data.length - 1;
        return (
          <Link
            key={item.id}
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
            ref={isLastItem ? lastElementRef : null}
          >
            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_converter(item.statistics.viewCount)} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
      {loading && <div className="spinner"></div>}
    </div>
  );
}
