import React from "react";
import imgp from "../../../assets/10_right.jpeg";
import "../style.scss"


class Right extends React.Component {
  constructor(){
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="rightPane">
        <img className="eight_img" src={imgp} width ="101%" position="fixed"/>
      </div>
    )
  }
}

export default Right;