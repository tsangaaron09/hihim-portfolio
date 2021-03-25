import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import ClassCard from "./ClassCard";
import { classes } from "./classes";
import "./index.css";
import Branding from "./Branding";

const App = () => {
  console.log(classes.key);
  return (
    <div id="window">
      <Branding />
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
