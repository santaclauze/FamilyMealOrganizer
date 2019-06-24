import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  ${props => `
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props.theme['$color-primary']};
  `}
`

const StyledTitle = styled.Text`
  ${props => `
    font-size: 20;
    text-align: center;
    color: ${props.theme['$color-secondary']};
  `}
`

const StyledSubTitle = styled.Text`
  ${props => `
    text-align: center;
    margin-bottom: 5px;
    color: ${props.theme['$color-secondary']};
  `}
`

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
});

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledView>
                <StyledTitle>Welcome to React Native!</StyledTitle>
                <StyledTitle>To get started, edit App.js</StyledTitle>
                <StyledSubTitle>{instructions}</StyledSubTitle>
            </StyledView>
        );
    }
}

export default HomeView;
