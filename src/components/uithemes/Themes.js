import React from "react";
import { useState } from "react";
import "./Themes.css";
import StyleIcon from "@mui/icons-material/Style";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
function Themes() {
  const themes = useTheme();
  const isMatch = useMediaQuery(themes.breakpoints.down("sm"));
  // const isMed = useMediaQuery(themes.breakpoints.down("md"));
  const [theme, setTheme] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [border, setBorder] = useState("");
  function changeTheme(color, bgColor, border) {
    document.documentElement.style.setProperty("--color-primary", color);
    document.documentElement.style.setProperty("--color-bg", bgColor);
    document.documentElement.style.setProperty(
      "--color-primary-variant",
      border
    );
  }
  // useEffect(() => {
  //   const color = getComputedStyle(document.documentElement).getPropertyValue(
  //     "--color-primary"
  //   );
  //   console.log("the color is:", color);
  //   console.log("I am in theme");
  // }, []);
  const [choose, setChoose] = useState(false);
  return (
    <>
      <div
        className={isMatch ? "smallScreenTheme" : "theme btn"}
        // className="theme btn"
        onClick={() => {
          setChoose(!choose);
        }}
      >
        <Typography
          variant="body"
          sx={{
            display: isMatch ? "flex" : "",
            justifyContent: isMatch ? "center" : "",
            alignItems: isMatch ? "center" : "",
          }}
        >
          {" "}
          <StyleIcon fontSize={isMatch ? "small" : ""} />
        </Typography>
        &nbsp;
        <Typography variant="body" sx={{ display: isMatch ? "none" : "" }}>
          {" "}
          Choose Theme
        </Typography>
      </div>
      <div
        className={
          choose
            ? isMatch
              ? "themeSelectedSmall"
              : "themeSelected"
            : "themeHided"
        }
      >
        {/* <button className="themeBtn"> */}{" "}
        <Typography
          variant="body"
          className={isMatch ? "colorCombinationSmall" : "colorCombination"}
          onClick={() => {
            setTheme("#4db5ff");
            setBgColor("#1f1f38");
            setBorder("rgba(77, 181, 255, 0.4)");
            changeTheme(theme, bgColor, border);
          }}
        >
          <Brightness1Icon
            onClick={() => {
              setTheme("#4db5ff");
              setBgColor("#1f1f38");
              setBorder("rgba(77, 181, 255, 0.4)");
              changeTheme(theme, bgColor, border);
            }}
            className={isMatch ? "iconDesignDefaultSmall" : "iconDesignDefault"}
          />

          <span className={isMatch ? "colorNameSmall" : "colorName"}>
            Picton Blue
          </span>
        </Typography>
        {/* </button> */}
        <Typography
          variant="body"
          className={isMatch ? "colorCombinationSmall" : "colorCombination"}
          onClick={() => {
            setTheme("#13ca91");
            setBgColor("black");
            setBorder("rgba(19, 202, 145, 0.4)");
            changeTheme(theme, bgColor, border);
          }}
        >
          <Brightness1Icon
            onClick={() => {
              setTheme("#13ca91");
              setBgColor("black");
              setBorder("rgba(19, 202, 145, 0.4)");
              changeTheme(theme, bgColor, border);
            }}
            className={isMatch ? "iconDesign1Small" : "iconDesign1"}
          />

          <span className={isMatch ? "colorNameSmall" : "colorName"}>
            Caribbean Green
          </span>
        </Typography>
        <Typography
          variant="body"
          className={isMatch ? "colorCombinationSmall" : "colorCombination"}
          onClick={() => {
            setTheme("#b537f2");
            setBgColor("black");
            setBorder("rgba(181, 55, 242, 0.4)");
            changeTheme(theme, bgColor, border);
          }}
        >
          <Brightness1Icon
            onClick={() => {
              setTheme("#b537f2");
              setBgColor("black");
              setBorder("rgba(181, 55, 242, 0.4)");
              changeTheme(theme, bgColor, border);
            }}
            className={isMatch ? "iconDesign2Small" : "iconDesign2"}
          />

          <span className={isMatch ? "colorNameSmall" : "colorName"}>
            Purple(x-11)
          </span>
        </Typography>
        <Typography
          variant="body"
          className={isMatch ? "colorCombinationSmall" : "colorCombination"}
          onClick={() => {
            setTheme("#ff2079");
            setBgColor("black");
            setBorder("rgba(255, 32, 121, 0.4)");
            changeTheme(theme, bgColor, border);
          }}
        >
          <Brightness1Icon
            onClick={() => {
              setTheme("#ff2079");
              setBgColor("black");
              setBorder("rgba(255, 32, 121, 0.4)");
              changeTheme(theme, bgColor, border);
            }}
            className={isMatch ? "iconDesign3Small" : "iconDesign3"}
          />

          <span className={isMatch ? "colorNameSmall" : "colorName"}>
            Electric Pink
          </span>
        </Typography>
        <Typography
          variant="body"
          className={isMatch ? "colorCombinationSmall" : "colorCombination"}
          onClick={() => {
            setTheme("#f5d300");
            setBgColor("black");
            setBorder("rgba(245, 211, 0, 0.4)");
            changeTheme(theme, bgColor, border);
          }}
        >
          <Brightness1Icon
            onClick={() => {
              setTheme("#f5d300");
              setBgColor("black");
              setBorder("rgba(245, 211, 0, 0.4)");
              changeTheme(theme, bgColor, border);
            }}
            className={isMatch ? "iconDesign4Small" : "iconDesign4"}
          />

          <span className={isMatch ? "colorNameSmall" : "colorName"}>
            Safety Yellow
          </span>
        </Typography>
      </div>
    </>
  );
}

export default Themes;
