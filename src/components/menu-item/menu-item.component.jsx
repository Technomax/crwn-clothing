// https://mrsamczynski.medium.com/using-react-router-v6-2d93e9139623
import React from "react";
import { useNavigate } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, navigate, linkUrl }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => 
      navigate(`${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

function WithNavigate(props) {
  let navigate = useNavigate();
  return <MenuItem {...props} navigate={navigate} />;
}

export default WithNavigate;
