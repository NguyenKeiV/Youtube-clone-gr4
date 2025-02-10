import { Link } from "react-router-dom";
import "./NotFoundPage.css"; 

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <img
        src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
        alt="YouTube 404"
        className="not-found-img"
      />
      <p className="not-found-text">
        This page isn't available. Sorry about that.
        <br />
        Try searching for something else.
      </p>
    </div>
  );
};

export default NotFoundPage;
