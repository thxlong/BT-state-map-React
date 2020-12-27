import React, { Component } from "react";

export default class GlassShop extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  render() {
    var imgBG = "./img/background.jpg";
    var imgBackground = {
      width: "100%",
      height: "768px",
      backgroundImage: `url(${imgBG})`,
      backgroundRepeat: "repeat",
    };
    const element = [];
    for (let index = 1; index < 9; index++) {
      const dom = (
        <a style={{ cursor: "pointer" }}>
          <img src={`./img/v${index}.png`} width="100" height="80" />
        </a>
      );
      element.push(dom);
    }
    return (
      <div
        className="container-fluid body__background text-center px-0"
        style={imgBackground}
      >
        <div className="header__bgColor container-fluid">
          <h4 className="text-white">TRY GLASSES APP ONLINE</h4>
        </div>

        <div className="container-fluid row">
          <div className="col-4">
            <div>
              <img src="./img/model.jpg" />
            </div>
            <div style={{ display: "flex", alignContent: "center" }}>
              <img src="./img/v1.png" width="100" height="80" />
            </div>
          </div>

          <div
            className="col-4"
            style={{ paddingTop: "700px", position: "relative" }}
          >
            <div className="thumbnail">
              <img src="./img/v1.png" width="100" height="80" />
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>hello world</p>
              </div>
            </div>
            {element}
          </div>

          <div className="col-4">
            <img src="./img/model.jpg" />
          </div>
        </div>

        <div className="content">
          <div className="model1"></div>
          <div className="model2"></div>
        </div>
      </div>
    );
  }
}
