import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subTitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h2>{heading}</h2>
        <p>{subTitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "The following npm package",
        "@material-ui/icons, includes the 1,100+"
      )}
      {newsArticle(
        "The following npm package",
        "@material-ui/icons, includes the 1,100+"
      )}
      {newsArticle(
        "The following npm package",
        "@material-ui/icons, includes the 1,100+"
      )}
    </div>
  );
};

export default Widgets;
