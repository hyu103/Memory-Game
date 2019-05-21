import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export default class Header extends React.Component {
  render() {
    return (
      <View>
        <StyledHeaderText>Memory Game!</StyledHeaderText>
      </View>
    );
  }
}

const StyledHeaderText = styled.Text`
  margin-top: 5%;
  font-size: 30px;
  font-weight: bold;
  color: #4592af;
`;
