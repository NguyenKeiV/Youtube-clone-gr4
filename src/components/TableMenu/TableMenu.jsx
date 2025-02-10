const TabMenu = ({ activeTab, setActiveTab }) => {
  const tabs = ["Mới nhất", "Âm nhạc", "Trò chơi", "Phim ảnh"];

  return (
    <div className="tab-menu">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={activeTab === tab ? "active" : ""}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabMenu;
