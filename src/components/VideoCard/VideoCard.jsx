const VideoCard = ({ title, views, time, thumbnail }) => {
  return (
    <div className="video-card">
      <img src={thumbnail} alt={title} className="thumbnail" />
      <div className="video-info">
        <h3>{title}</h3>
        <p>
          {views} lượt xem • {time}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
