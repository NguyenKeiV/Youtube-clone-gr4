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

  const fetchData = useCallback(
    async (pageToken = "") => {
      setLoading(true);
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=${category}&pageToken=${pageToken}&key=${API_KEY}`;

      try {
        const response = await fetch(videoList_url);

        // Kiểm tra lỗi 403 (Quota exceeded hoặc không có quyền truy cập)
        if (response.status === 403) {
          console.error("Lỗi 403: Quota exceeded hoặc không có quyền truy cập");
          navigate("/404"); // Chuyển hướng đến trang 404
          return;
        }

        // Kiểm tra nếu API trả về lỗi khác
        if (!response.ok) {
          throw new Error(`Lỗi ${response.status}: Không thể lấy dữ liệu`);
        }

        const result = await response.json();

        if (!result.items || result.items.length === 0) {
          throw new Error("Không tìm thấy video nào");
        }

        setTimeout(() => {
          setData((prevData) => [...prevData, ...result.items]);
          setNextPageToken(result.nextPageToken || null);
          setLoading(false);
        }, 1000); // Hiển thị loading trong 1 giây
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        setLoading(false);
        navigate("/404"); 
      }
    },
    [category, navigate]
  );

  useEffect(() => {
    setData([]); 
    fetchData();
  }, [category, fetchData]);

  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextPageToken) {
          fetchData(nextPageToken);
        }
      });
      if (node) observer.current.observe(node);
    },
    [nextPageToken, fetchData]
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
            <img src={item.snippet.thumbnails.medium.url} alt="" />
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
