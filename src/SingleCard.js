import React, { Component } from "react";


export default class SingleCard extends Component {
  state = {
    cards: this.props.cards
  };
  render() {
    const { image, header, body } = this.props;

    console.log(header);
    return (
      <div>
        <div className="image-area">
          <img src={image} alt=""/>
        </div>
        <div className="pl-2 pr-2">
          <h1> {header} </h1>
          <p> {body} </p>
          <p> heas</p>
        </div>
      </div>
    );
  }
}
