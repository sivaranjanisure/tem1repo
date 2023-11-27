import React from "react";
import { useNavigate } from "react-router-dom";
import { GiHumanTarget } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div>finexo</div>
      <div className="header1">
        <div>HOME</div>
        <div onClick={() => navigate("/about")}>ABOUT</div>
        <div>SERVICES</div>
        <div>WHY US</div>
        <div>TEAM</div>
        <div>
          <GiHumanTarget /> LOGIN
        </div>
        <div>
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Header;
