import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Toolbar.css";

const ToolBar = ({ category, setCategory }) => {
  const slideLeft = () => {
    document.getElementById("slider").scrollLeft -= 500;
  };

  const slideRight = () => {
    document.getElementById("slider").scrollLeft += 500;
  };

  return (
    <div className="tool-bar">
      {/* Nút trượt trái */}
      <button className="tool-button" onClick={slideLeft}>
        <MdChevronLeft />
      </button>

      {/* Danh mục */}
      <div id="slider" className="slider-container">
        <div className="slider-content">
          <button
            className={`category-button-home active ${
              category === 0 ? "active" : ""
            }`}
            onClick={() => setCategory(0)}
          >
            <p>All </p>
          </button>
          <button
            className={`category-button active ${
              category === 20 ? "active" : ""
            }`}
            onClick={() => setCategory(20)}
          >
            <p>Gaming</p>
          </button>
          <button
            className={`category-button active ${
              category === 10 ? "active" : ""
            }`}
            onClick={() => setCategory(10)}
          >
            <p>Music </p>
          </button>
          <button
            className={`category-button active ${
              category === 22 ? "active" : ""
            }`}
            onClick={() => setCategory(22)}
          >
            <p>Blog </p>
          </button>
          <button
            className={`category-button active ${
              category === 19 ? "active" : ""
            }`}
            onClick={() => setCategory(19)}
          >
            <p>Short movies </p>
          </button>
          <button
            className={`category-button active ${
              category === 15 ? "active" : ""
            }`}
            onClick={() => setCategory(15)}
          >
            <p>Animal </p>
          </button>
          <button
            className={`category-button active ${
              category === 24 ? "active" : ""
            }`}
            onClick={() => setCategory(24)}
          >
            <p>Entertainment </p>
          </button>
          <button
            className={`category-button active ${
              category === 17 ? "active" : ""
            }`}
            onClick={() => setCategory(17)}
          >
            <p>Sport </p>
          </button>
          <button
            className={`category-button active ${
              category === 19 ? "active" : ""
            }`}
            onClick={() => setCategory(19)}
          >
            <p>Travel </p>
          </button>
          <button
            className={`category-button active ${
              category === 23 ? "active" : ""
            }`}
            onClick={() => setCategory(23)}
          >
            <p>Comedy </p>
          </button>
          <button
            className={`category-button active ${
              category === 25 ? "active" : ""
            }`}
            onClick={() => setCategory(25)}
          >
            <p>News </p>
          </button>
          <button
            className={`category-button active ${
              category === 27 ? "active" : ""
            }`}
            onClick={() => setCategory(27)}
          >
            <p>Educations </p>
          </button>
          <button
            className={`category-button active ${
              category === 28 ? "active" : ""
            }`}
            onClick={() => setCategory(28)}
          >
            <p>Sciences </p>
          </button>
          <button className="category-button active">
            <p>Recent update</p>
          </button>
          <button
            className={`category-button active ${
              category === 24 ? "active" : ""
            }`}
            onClick={() => setCategory(24)}
          >
            <p>Entertainment </p>
          </button>
          <button
            className={`category-button active ${
              category === 2 ? "active" : ""
            }`}
            onClick={() => setCategory(2)}
          >
            <p>Vehicles </p>
          </button>
          <button
            className={`category-button active ${
              category === 29 ? "active" : ""
            }`}
            onClick={() => setCategory(29)}
          >
            <p>Activism </p>
          </button>
        </div>
      </div>

      {/* Nút trượt phải */}
      <button className="tool-button" onClick={slideRight}>
        <MdChevronRight />
      </button>
    </div>
  );
};

export default ToolBar;
