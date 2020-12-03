import React, { Component } from "react";

export default class GlassShop extends Component {
  render() {
    var imgBG = "./img/background.jpg";
    var imgBackground = {
      width: "100%",
      height: "768px",
      backgroundImage: `url(${imgBG})`,
      backgroundRepeat: "repeat",
    };

    return (
      <div
        className="container-fluid body__background text-center px-0"
        style={imgBackground}
      >
        <div className="header__bgColor container-fluid">
          <h4 className="text-white">TRY GLASSES APP ONLINE</h4>
        </div>

        <div className="content">
          <div className="model1"></div>
          <div className="model2"></div>
        </div>
      </div>
    );
  }
}
