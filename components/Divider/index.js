import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default Divider = (props) => {
    return (
        <View style={[styles.divider, {backgroundColor: props.color}]}></View>
    )
}

// Prop types and default.
Divider.propTypes ={
    color: PropTypes.string,
};
Divider.defaultProps = {
    color: 'grey'
};

const styles = StyleSheet.create({
    divider: {
        height: 0.6,
        width: '100%'
    }
});
