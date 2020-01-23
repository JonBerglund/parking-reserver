import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

export default Box = (props) => {
    const { label, inMonth } = props;
    return (
        <View style={[styles.box, {backgroundColor: inMonth ? 'rgb(230,230,230)' : 'white'}]}>
            <Text style={[styles.dateLabel, {color: inMonth ? 'rgb(130,130,130)' : 'black'}]}>{label}</Text>
        </View>
    )
}

Box.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    inMonth: PropTypes.bool
}

Box.defaultProps = {
    inMonth: false
}


const styles = StyleSheet.create({
    dateLabel:{
        fontSize: 12
    },
    box: {
        flex: 1,
        padding: 2,
        borderWidth: 0.5,
        borderColor: 'grey',
        height: 100
    }
})
