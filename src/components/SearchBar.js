import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar=()=>{
    return(
        <View style={styles.background}>
            <Feather name='search'/>
            <Text>Search Bar
                
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    background:{
        backgroundColor:'#00EEFF',
        height:50,
        marginHorizontal:15,
    }
})
export default SearchBar;