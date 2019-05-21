import React from "react";

import { View, Text } from "react-native";
import TimerMixin from "react-timer-mixin";

import styled from "styled-components";
import Card from "./Card";

export default class CardBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected_cards: [],
      rnd_card_list: [],
      rndGrid: [],
      cards: []
    };

    const initial_cards = [
      {
        id: 1,
        name: "star",
        color: "#ffeaa5",
        show: false
      },
      {
        id: 2,
        name: "heart",
        color: "#f3c1c6",
        show: false
      },
      {
        id: 3,
        name: "headphones",
        color: "#f58b54",
        show: false
      },
      {
        id: 4,
        name: "bell-o",
        color: "#107595",
        show: false
      },
      {
        id: 5,
        name: "video-camera",
        color: "#ff0b55",
        show: false
      },
      {
        id: 6,
        name: "pencil",
        color: "#a34a28",
        show: false
      },
      {
        id: 7,
        name: "star",
        color: "#ffeaa5",
        show: false
      },
      {
        id: 8,
        name: "heart",
        color: "#f3c1c6",
        show: false
      },
      {
        id: 9,
        name: "headphones",
        color: "#f58b54",
        show: false
      },
      {
        id: 10,
        name: "bell-o",
        color: "#107595",
        show: false
      },
      {
        id: 11,
        name: "video-camera",
        color: "#ff0b55",
        show: false
      },
      {
        id: 12,
        name: "pencil",
        color: "#a34a28",
        show: false
      }
    ];

    for (var i = 0; i < 12; i++) {
      var randomInd = Math.floor(
        Math.random() * Math.floor(initial_cards.length - 1)
      );

      var card = initial_cards[randomInd];

      this.state.rnd_card_list.push(card);

      initial_cards.splice(randomInd, 1);
    }
    this.shuffle(this.state.rnd_card_list);
  }

  shuffle = arr => {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  };

  resetCards() {
    let rnd_list = this.state.rnd_card_list;

    let a = rnd_list.indexOf(this.state.selected_cards[0]);
    let b = rnd_list.indexOf(this.state.selected_cards[1]);

    this.state.selected_cards[0].show = false;
    this.state.selected_cards[1].show = false;

    rnd_list[a] = this.state.selected_cards[0];
    rnd_list[b] = this.state.selected_cards[1];

    this.setState({ rnd_card_list: rnd_list });
    this.state.selected_cards.pop();
    this.state.selected_cards.pop();
  }

  flipCard = card => {
    let rnd_list = this.state.rnd_card_list;

    let indexInCardList = rnd_list.indexOf(card);
    var sCard = rnd_list.filter(_card => _card.id === card.id);
    sCard[0].show = !sCard[0].show;
    rnd_list[indexInCardList] = sCard[0];
    this.setState({ rnd_card_list: rnd_list });
  };

  firstCardPressed = first_card => {
    this.state.selected_cards.push(first_card);
    this.flipCard(first_card);
  };

  secondCardPressed = second_card => {
    if (this.state.selected_cards[0].id === second_card.id) {
      alert("cannot click same card!");
      this.flipCard(second_card);
      this.state.selected_cards.pop();
      return;
    }
    this.state.selected_cards.push(second_card);
    this.flipCard(second_card);
    this.checkCards();
  };

  checkCards = () => {
    if (
      this.state.selected_cards[0].name === this.state.selected_cards[1].name
    ) {
      alert("Same");
      this.state.selected_cards.pop();
      this.state.selected_cards.pop();
    } else {
      TimerMixin.setTimeout(() => this.resetCards(), 1500);
      alert("Not Same");
    }
  };

  handlePress = s_card => {
    if (this.state.selected_cards.length === 0) {
      this.firstCardPressed(s_card);
    } else {
      this.secondCardPressed(s_card);
    }
  };

  render() {
    return (
      <StyledCardContainer>
        {this.state.rnd_card_list.map(card => (
          <Card key={card.id} card={card} handlePress={this.handlePress} />
        ))}
      </StyledCardContainer>
    );
  }
}

const StyledCardContainer = styled.View`
  margin-top: 10%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: 5%;
`;
