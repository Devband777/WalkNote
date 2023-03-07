import React from "react";
import markImage from "../../../assets/Walker_World_White.png"
import leftImage from "../../../assets/left_side_colors.png"

class Left extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="leftPane">
        <img className="leftSide" src={leftImage}/>
        <img className="markImage" src={markImage} />
      </div>
    )
  }
}

export default Left;