import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default TableHeader = (props) => {
    return (
        <View style={styles.container}>
            {
                props.values.map( 
                    (val, index) => 
                        <Text key={`${index} header`} style={styles.headerItem}>{val}</Text>
                )
            }
        </View>
    )
}

TableHeader.propTypes = {
    // Array that holds the table header values.
    values: PropTypes.arrayOf(PropTypes.string).isRequired
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(240,240,240,0.7)',
        paddingVertical: 7,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerItem: {
        flex:1,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '500'
    }
});

