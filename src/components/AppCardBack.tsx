import React from 'react';
import { LightenDarkenColor, categoryColors, vAlignStyle } from '../utils';


export const AppCardBack = function () {
  return <div
    style={{
      backgroundColor: "#f9c23c",
      height: "14em",
      width: "10em",
      boxSizing: "border-box",
      borderColor: "#282c34",
      borderStyle: "solid",
      borderRadius: ".5em",
      borderWidth: ".5em",
    }}
  >
    <div style={{
      height: "30%",
      fontSize: "20px",
      // fontFamily: "Geogia",
      // marginBottom: ".3em",
      letterSpacing: ".05em",
      fontWeight: "700",
      color: "#282c34",
      ...vAlignStyle,
    }}>
      <span style={{marginTop: "-.6em"}}>ManaSeoul</span>
    </div>
    
    <div style={{
      height: "40%",
      // backgroundColor: "lightBlue",
      borderRadius: ".5em",
      ...vAlignStyle
    }}>
      <img src='/qr-code.png' alt="QR Code" style={{
        width: "80%",
        borderRadius: ".5em"
      }}/>
    </div>

    <div style={{
      height: "30%",
      fontSize: "20px",
      fontWeight: "700",
      letterSpacing: ".05em",
      color: "#282c34",
      // fontFamily: "Geogia",
      ...vAlignStyle,
    }}>
      <span style={{marginTop: ".3em"}}>Quest</span>
    </div>

  </div>

}
