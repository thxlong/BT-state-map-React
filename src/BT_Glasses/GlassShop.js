import React, { Component } from "react";
// import glassStore from "../data/glassStore.json";

export default class GlassShop extends Component {
  render() {
    let imgModel = { width: 350, height: 450, marginLeft: 200 };
    let imgGlass = { width: 130, height: 110 };
    let glassArr = [];

    for (let i = 1; i < 9; i++) {
      const dom = (
        <button>
          <img
            src={`./img/v${i}.png`}
            alt={`./img/v${i}.png`}
            style={imgGlass}
          />
        </button>
      );
      glassArr.push(dom);
    }

    return (
      <div className="bgImg">
        <div className="header position-relative">
          <h1 className="header__text">TRY GLASSES APP ONLINE</h1>
        </div>

        <div className="row">
          <div className="col-6 d-flex">
            <img
              className="imgModel__after"
              src="./img/model.jpg"
              alt="model.jpg"
              style={imgModel}
            />
            <div className="model__content">ABC</div>
          </div>
          <div className="col-6">
            <img src="./img/model.jpg" alt="model.jpg" style={imgModel} />
          </div>
        </div>

        <div>
          <div className="categoryGlasses d-flex">
            <div className="categoryGlasses__bg">
              <div>{glassArr}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
