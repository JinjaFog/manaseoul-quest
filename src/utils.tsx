
export function hexToRgb(hex:string) {

  hex = hex.slice(1);

  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return {r:r, g:g, b:b};
}


function componentToHex(c:any) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r:number, g:number, b:number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function LightenDarkenColor(col:string, amt:number) {

  var {r, g, b} = hexToRgb(col);

  if (amt >= 0) {
    r += (255 - r) * amt;
    g += (255 - g) * amt;
    b += (255 - b) * amt;
  } else {
    r += r * amt;
    g += g * amt;
    b += b * amt;
  }

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;
  
  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  return rgbToHex(
    Math.floor(r),
    Math.floor(g),
    Math.floor(b)
  )
}


export function CombineColors(col1:string, col2:string) {
  
  var {r:r1, g:g1, b:b1} = hexToRgb(col1);
  var {r:r2, g:g2, b:b2} = hexToRgb(col2);

  var r = (r1 + r2) / 2;
  var g = (g1 + g2) / 2;
  var b = (b1 + b2) / 2;

  return rgbToHex(r, g, b);
}


export const categoryColors: any = {
  "Scavenger Hunt": "#b20d30",
  "Experience": "#3F84E5",
  "Burden": "#c17817",
  "Contest": "#1D6F42",
  "Miscellaneous": "#888888"
}


export const vAlignStyle:any = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
}