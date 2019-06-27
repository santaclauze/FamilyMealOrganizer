import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Calendar } from '../../components';

class WeeklyCalendarView extends Component {
    render() {
        return (
            <Calendar />
        );
    }
}

WeeklyCalendarView.propTypes = {
};

export default WeeklyCalendarView;
