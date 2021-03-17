import React from "react";

const ClassCard = (props) => {
  return (
    <div
      class="ui card"
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
      <div class="content">
        <div class="header" style={{ color: "white", textAlign: "center" }}>
          {props.classCode}
        </div>
        <hr style={{ height: "1px", backgroundColor: "white" }} />
        <div
          class="description"
          style={{ color: "white", textAlign: "center" }}
        >
          {props.classDesc}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
