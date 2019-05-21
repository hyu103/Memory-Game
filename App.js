import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import CardBox from "./components/CardBox";

export default class App extends React.Component {
  render() {
    return (
      <StyledView>
        <Header />
        <CardBox />
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 5%;
  align-items: center;
  background-color: #f6f5f5;
`;
