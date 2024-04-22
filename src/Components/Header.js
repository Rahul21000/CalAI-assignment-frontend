import "./Header.css"

function Header() {
  return (
    <div className="header">
      <div className="profile">
        <img src="" alt="robot_image" />
        <div>
          <h2>
            Timpu <img src="" alt="verified icon" />
          </h2>
          <h4>Chat assistant</h4>
        </div>
      </div>
      <div className="status"><p className="green_status"></p> <p>Online</p></div>
    </div>
  );
}

export default Header;
