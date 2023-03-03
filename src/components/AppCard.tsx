import React from 'react';
import { LightenDarkenColor, categoryColors, vAlignStyle } from '../utils';


export const AppCard = function ({name, imageText, imageTop="0", category, bodyMain, flavourText, back}:any) {
  return <div
    style={{
      backgroundColor: "white",
      height: "14em",
      width: "10em",
      boxSizing: "border-box",
      borderColor: "white",
      borderStyle: "solid",
      borderRadius: ".5em",
      borderWidth: ".5em",
      boxShadow: "0px 6px 4px 2px rgba(0, 0, 0, .3)"
      // filter: isCompleted ? "grayscale(80%)" : "none"
    }}
  >
    <div style={{
      height: "10%",
      fontSize: "11px",
      fontWeight: "bold",
      ...vAlignStyle
    }}>
      {/* <span>{name}</span> */}
    </div>
    
    <div style={{
      height: "40%",
      // backgroundColor: "lightBlue",
      borderRadius: ".5em",
      ...vAlignStyle
    }}>
      <span style={{
        fontSize: "3em",
        position: "relative",
        // left: 0,
        top: imageTop //"-.1em"
      }}>
        {imageText}
      </span>
    </div>

    <div style={{
      height: "10%",
      backgroundColor: categoryColors[category],
      color: "white",
      borderTopLeftRadius: ".5rem",
      borderTopRightRadius: ".5rem",
      fontSize: "10px",
      ...vAlignStyle
    }}>
      {category}
    </div>

    <div style={{
      height: "40%",
      // backgroundColor: "#E9E9E9",
      backgroundColor: LightenDarkenColor(categoryColors[category], .7),
      // filter: "brightness(0.85)",
      fontSize: "8px",
      padding: "1em",
      boxSizing: "border-box",
      borderBottomLeftRadius: ".5rem",
      borderBottomRightRadius: ".5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      // justifyContent: "space-between"
      justifyContent: "center"
    }}>
      {/* <span>{bodyMain}</span>
      {bodyMain && flavourText && <br/>}
      {flavourText && <span style={{
        color: "rgba(0, 0, 0, .6)"
      }}><i>{flavourText}</i></span>} */}
    </div>

  </div>

}
