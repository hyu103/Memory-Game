import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components";

export default class Card extends React.Component {
  render() {
    let icon_name = "question";
    let icon_color = "black";
    if (this.props.card.show) {
      icon_name = this.props.card.name;
      icon_color = this.props.card.color;
    }

    return (
      <TouchableOpacity onPress={() => this.props.handlePress(this.props.card)}>
        <StyledCard>
          <FontAwesome name={icon_name} size={40} color={icon_color} />
        </StyledCard>
      </TouchableOpacity>
    );
  }
}

const StyledCard = styled.View`
  margin: 5%;
  border: 1px solid;
  align-items: center;
  height: 50px;
  width: 50px;
`;
