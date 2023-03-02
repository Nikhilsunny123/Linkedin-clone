import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import "./Widgets.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon className="widgets__icon"/>
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Back to action", "top news")}
      {newsArticle("Back to action", "top news")}
      {newsArticle("Back to action", "top news")}
    </div>
  );
};

export default Widgets;
