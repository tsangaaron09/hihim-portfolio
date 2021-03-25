import React from "react";

const ClassCard = (props) => {
  return (
    <div
      className="ui card"
      style={{
        backgroundColor: "#37236A",
        height: "30vh",
        minHeight: "200px",
        width: "30vh",
        minWidth: "50px",
        margin: "5vh",
        borderRadius: "15px",
        boxShadow: "1px 2px 2px 2px #999999",
      }}
    >
      <div className="content">
        <div className="header" style={{ color: "white", textAlign: "center" }}>
          {props.classCode}
        </div>
        <hr style={{ height: "1px", backgroundColor: "white" }} />
        <div
          className="description"
          style={{ color: "white", textAlign: "center" }}
        >
          {props.classDesc}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
