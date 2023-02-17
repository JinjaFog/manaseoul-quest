import React from 'react';

function LightenDarkenColor(col:string, amt:number) {
  
  var usePound = false;

  if (col[0] === "#") {
      col = col.slice(1);
      usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16);
  var g = (num & 0x0000FF);
  var b = ((num >> 8) & 0x00FF);

  r += (255 - r) * amt;
  g += (255 - g) * amt;
  b += (255 - b) * amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;
  
  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}


export const AppCard = function ({name, imageText, imageTop="-.2rem", category, bodyMain, flavourText, back}:any) {

  const categoryColors: any = {
    "Scavenger Hunt": "#b20d30",
    "Experience": "#3F84E5",
    "Modifier": "#c17817",
    "Contest": "#1D6F42",
    "Miscellaneous": "#888888"
  }

  const vAlignStyle:any = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }

  const [isCompleted, setIsCompleted] = React.useState<boolean>(true);

  return <>
    <div
      style={{
        backgroundColor: "white",
        height: "14em",
        width: "10em",
        boxSizing: "border-box",
        borderColor: "white",
        borderStyle: "solid",
        borderRadius: ".5em",
        borderWidth: ".5em",
        // filter: isCompleted ? "grayscale(80%)" : "none"
      }}
    >
      <div style={{
        height: "10%",
        fontSize: "11px",
        fontWeight: "bold",
        ...vAlignStyle
      }}>
        <span>{name}</span>
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
        <span>{bodyMain}</span>
        {bodyMain && flavourText && <br/>}
        {flavourText && <span style={{
          color: "rgba(0, 0, 0, .6)"
        }}><i>{flavourText}</i></span>}
      </div>


    </div>

  </>

}
