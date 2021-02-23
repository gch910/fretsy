import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import "./Navigation.css";

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const userLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <button id="profile-button" className="no-outline" onClick={openMenu}>
        <i className="far fa-user-circle fa-3x"></i>
        {showMenu && (
          <div id="profile-dropdown-div">
            <ul style={{listStyle: "none"}}>
              <li className="profile-li">{user.username}</li>
              <li className="profile-li">{user.email}</li>
              <li>
                <button id="logout-button" onClick={userLogout}>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default ProfileButton;
