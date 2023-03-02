import React from "react";
import "./Header.css";
import linkedin from "./images/linkedin.png";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUser } from "./features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut());

    signOut(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="header">
      <div className="header_left">
        <img src={linkedin} alt="" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={NotificationsIcon} title="Messaging" />
        <HeaderOption Icon={ChatIcon} title="Notifications" />
        <HeaderOption
          avatar={user?.photoUrl}
          title={user?.displayName}
          onClick={logout}
        />
      </div>
    </div>
  );
};

export default Header;
