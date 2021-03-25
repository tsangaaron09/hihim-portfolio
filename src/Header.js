import React from "react";
import Emoji from "./Emoji";
import ProfPic from "./profpic.jpg";

const Header = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <img
        className="ui small circular image"
        src={ProfPic}
        alt="aaron profile pic"
        style={{ margin: "2vh" }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>
          Hello! This is Aaron <Emoji symbol="😊" label="smiley-face" />
        </h1>
        <h3 style={{ fontWeight: "normal" }}>
          I am a Health Informatics/Health Information Management major at the
          UW. For the past 3 quarters I have learned a lot about the healthcare
          industry through the lens of information technology. I decided to
          showcase some of the classes and cool things I have done!
        </h3>
      </div>
    </div>
  );
};

export default Header;
