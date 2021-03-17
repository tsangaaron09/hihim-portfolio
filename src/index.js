import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import ClassCard from "./ClassCard";

const App = () => {
  return (
    <div style={{ margin: "8vh", display: "flex", flexDirection: "column" }}>
      <img
        style={{ width: "30vh", height: "5vh", alignSelf: "flex-end" }}
        alt="uw-healthservices-logo"
        src="https://d3bnk79bkod1sv.cloudfront.net/Organization/fb2980ba-98ff-4cfd-8f4c-ab430171f43a/Images/a0c3a179-7d66-416d-9db2-4da11c17cdf5.jpg"
      />
      <Header />
      <h2 style={{ fontWeight: "normal" }}>Classes Taken</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <ClassCard
          classCode="HIHIM408"
          classDesc="Management Concepts with Health Information Management Applications"
        />
        <ClassCard classCode="HIHIM460" classDesc="Professional Pathways" />
        <ClassCard
          classCode="HIHIM470"
          classDesc="Legal Concepts for Health Fields"
        />
        <ClassCard
          classCode="HIHIM409"
          classDesc="Disease Concepts for Managers"
        />
        <ClassCard classCode="HIHIM400" classDesc="Healthcare Language" />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
