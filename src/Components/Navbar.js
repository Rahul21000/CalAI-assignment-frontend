import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useState } from "react";
function Navbar({ onClickFun,children }) {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  

  return (
    <div className="navbar">
      <div className="nav-sub">
        <MenuIcon onClick={onClickFun}/>
        <div className="user-type">SB Admin Pro</div>
      </div>
      {children}
      <div className="nav-sub">
        <div>documents{">"}</div>
        <div>
          <Badge badgeContent={1} color="error">
            <NotificationsNoneIcon color="action" />
          </Badge>
        </div>
        <div>
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
        </div>
        <div
          className="profile-icon"
          onClick={() => setOpenProfileMenu(!openProfileMenu)}
        >
          <AccountCircleIcon />
          {openProfileMenu && (
            <ul className="profile-menu">
              <li><PersonIcon/>Profile</li>
              <li><ManageAccountsIcon/>Account</li>
              <li><SettingsIcon/>Setting</li>
              <li><LogoutIcon/>Logout</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
