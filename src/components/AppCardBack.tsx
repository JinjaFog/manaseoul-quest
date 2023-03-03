import React from 'react';
import { LightenDarkenColor, categoryColors, vAlignStyle } from '../utils';


export const AppCardBack = function () {
  return <div
    style={{
      backgroundColor: "#282c34",
      height: "14em",
      width: "10em",
      boxSizing: "border-box",
      borderColor: "#282c34",
      borderStyle: "solid",
      borderRadius: ".5em",
      borderWidth: ".5em",
      boxShadow: "0px 8px 4px -2px rgba(0, 0, 0, .3)"
    }}
  >
    {/* <div style={{
      height: "30%",
      fontSize: "20px",
      // fontFamily: "Geogia",
      // marginBottom: ".3em",
      letterSpacing: ".05em",
      fontWeight: "700",
      color: "#282c34",
      ...vAlignStyle,
    }}>
    </div> */}
    
    <div style={{
      height: "60%",
      // backgroundColor: "lightBlue",
      borderRadius: ".5em",
      ...vAlignStyle
    }}>
 
      <img src="/prev.png" alt="QR Code" style={{
        width: "100%",
        borderRadius: ".5em"
      }}/>
    </div>

    <div style={{
      height: "10%",
      fontSize: "20px",
      fontWeight: "700",
      letterSpacing: ".05em",
      color: "#282c34",
      ...vAlignStyle,
    }}>
      <img src='/qr-code.png' alt="QR Code" style={{
        width: "50%",
        borderRadius: ".3em"
      }}/>
    </div>

  </div>

}
