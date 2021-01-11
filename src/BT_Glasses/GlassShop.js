import React, { Component } from "react";
import glassStore from "../data/glassStore.json";

export default class GlassShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glassItem: glassStore[0],
    };
  }
  clickChangeGlass = (currentGlass) => {
    console.log(currentGlass);
    this.setState({
      glassItem: glassStore[currentGlass],
    });
  };
  render() {
    let imgGlass = { width: 130, height: 110 };
    let glassArr = [];

    for (let i = 1; i < 9; i++) {
      const dom = (
        <button key={i} onClick={() => this.clickChangeGlass(i)}>
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
          <div className="col-6">
            <img
              className="imgModel__after"
              src="./img/model.jpg"
              alt="model.jpg"
            />

            <div className="model__content">
              <h2>{this.state.glassItem.name}</h2>
              <p>{this.state.glassItem.desc}</p>
            </div>

            <div className="model__glass">
              <img
                className="imgModel__after"
                src={this.state.glassItem.url}
                alt={this.state.glassItem.url}
                style={{ width: 250, height: 100, opacity: 0.5 }}
              />
            </div>
          </div>

          <div className="col-6">
            <img src="./img/model.jpg" alt="model.jpg" />
          </div>
        </div>

        <div className="row container">
          <div className="col-6"></div>
          <div className="col-6"></div>
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
