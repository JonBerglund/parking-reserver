import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Box from '../Box';
import { getMonthDaysArr } from '../../helpers/functions';

export default Table = () => {

    return (
        <View>
            <FlatList 
                style={{ height: '100%' }}
                keyExtractor={(item) => item.id}
                data={getMonthDaysArr()}
                renderItem={renderItem}
                numColumns={7}
            />
        </View>
    )
    
}



const renderItem = ({item}) => {
    return <Box label={item.val} inMonth={item.inMonth}/>
}
