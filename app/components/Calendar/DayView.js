import React, { Component } from 'react';
import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';

const ContainerView = styled.View`
  ${props =>`
      border: 1px solid ${props.theme['$color-secondary']};
      width: 90%;
      border-radius: 7px;
      margin-bottom: 20px;
      color: ${props.theme['$color-secondary']};
  `}
`

const ContainerDay = styled.View`
    ${props =>`
        background-color: ${props.theme['$color-secondary']};
        color: ${props.theme['$color-primary']}
        font-weight: 800;
    `}
`

const DayText = styled.Text`
    ${props =>`
        background-color: ${props.theme['$color-secondary']};
        color: ${props.theme['$color-primary']}
        font-weight: 800;
        padding: 10px 5px;
    `}
`

const ContainerMeal = styled.View`
    ${props =>`
        flex-direction: column;
    `}
`

const MealText = styled.Text`
    ${props =>`
        margin: 3px;
    `}
`

class DayView extends Component {
    render() {
        return (
            <ContainerView>
                <ContainerDay>
                    <DayText>
                        {this.props.day}
                    </DayText>
                </ContainerDay>
                <ContainerMeal>
                    {this.props.meals.map(meal =><MealText key={meal}>{meal}</MealText>)}
                </ContainerMeal>
            </ContainerView>
        );
    }
}

export default DayView;