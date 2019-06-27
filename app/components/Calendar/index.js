import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DayView from './DayView';

const DateView = styled.View`
    ${props => `
        justify-content: center;
        align-items: center;
        flex-direction: row;
        color: ${props.theme['$color-secondary']};
        border: 1px solid ${props.theme['$color-secondary']};
        padding: 10px 20px;
        border-radius: 8px;
        min-width: 50%;
    `}
`

const ContainerView = styled.ScrollView`
    ${props => `
        flex: 1;
        background-color: white;

    `}
`

const ContainerDateView = styled.View`
    ${props => `
        align-items: center;
        margin-bottom: 20px;
    `}
`

const ContainerDayView = styled.View`
    ${props => `
        align-items: center;
    `}
`

class Calendar extends Component {

    render() {
        const monthYearStart = moment().startOf('isoWeek').format('DD MMM')
        const monthYearEnd = moment().endOf('isoWeek').format('DD MMM')
        let daysOfWeek = moment.weekdays();
        daysOfWeek.push(daysOfWeek.shift());

        return (
            <ContainerView>
                <ContainerDateView>
                    <DateView>
                        <Text>{monthYearStart}</Text>
                        <Text> - </Text>
                        <Text>{monthYearEnd}</Text>
                    </DateView>
                </ContainerDateView>
                <ContainerDayView>
                    {daysOfWeek.map(day => <DayView key={day} day={day} meals={['test', 'test', 'test']} />)}
                </ContainerDayView>
            </ContainerView>
        );
    }
}

Calendar.propTypes = {
};

export default Calendar;
