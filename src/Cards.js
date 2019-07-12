import React, { Component } from "react";
import SingleCard from "./SingleCard";

class Cards extends Component {
  state = {
    cards: [
      {
        image: "/static/media/logo.5d5d9eef.svg",
        header: "React 101, the easy parts",
        body:
          "We’ll start off with an easy one. This is more of a component than a full-blown app, but it’s a good place to start."
      },
      {
        image: "/static/media/logo.5d5d9eef.svg",
        header: "React 201, the hard parts",
        body:
          "We’ll start off with a hard one. This is more of a component than a full-blown app, but it’s a good place to start."
      },
      {
        image: "/static/media/logo.5d5d9eef.svg",
        header: "React 401, For Pros",
        body:
          "We’ll start off with a difficult one. This is more of a component than a full-blown app, but it’s a good place to start."
      }
    ]
  };

  render() {
    const { cards } = this.state;
    return (
      <div className=" App-header ">
        {cards.map((card, i) => {
          //mapping loop
          return (
            <div key={i} className="borderline ">
              <SingleCard
                image={card.image}
                header={card.header}
                body={card.body}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cards;
