
export const AppCard = function () {

  return <div style={{
    backgroundColor: "red",
    height: "14em",
    width: "10em",
    boxSizing: "border-box",
    borderStyle: "solid",
    borderRadius: ".5em",
    borderWidth: ".5em"
  }}>
    <div style={{
      height: "10%",
    }}>
      MY TITLE
    </div>
    
    <div style={{
      height: "40%",
      backgroundColor: "green"
    }}>
      MY PIC
    </div>

    <div style={{
      height: "10%",
      backgroundColor: "magenta"
    }}>
      MY SUB
    </div>

    <div style={{
      height: "40%",
      backgroundColor: "yellow"
    }}>
      MY BODY
    </div>

  </div>

}
