import React from "react";
import { useState } from "react";
import "./Themes.css";
import StyleIcon from "@mui/icons-material/Style";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { Typography } from "@mui/material";
function Themes() {
  const [choose, setChoose] = useState(false);
  return (
    <>
      <div
        className="theme btn"
        onClick={() => {
          setChoose(!choose);
        }}
      >
        <Typography variant="body">
          {" "}
          <StyleIcon />
        </Typography>
        &nbsp;
        <Typography variant="body"> Choose Theme</Typography>
      </div>
      <div className={choose ? "themeSelected" : "themeHided"}>
        <Typography variant="body" className="colorCombination">
          <Brightness1Icon className="iconDesign1" />

          <span className="colorName">Caribbean Green</span>
        </Typography>
        <Typography variant="body" className="colorCombination">
          <Brightness1Icon className="iconDesign2" />

          <span className="colorName">Purple(x-11)</span>
        </Typography>
        <Typography variant="body" className="colorCombination">
          <Brightness1Icon className="iconDesign3" />

          <span className="colorName">Electric Pink</span>
        </Typography>
        <Typography variant="body" className="colorCombination">
          <Brightness1Icon className="iconDesign4" />

          <span className="colorName">Safety Yellow</span>
        </Typography>
      </div>
    </>
  );
}

export default Themes;
