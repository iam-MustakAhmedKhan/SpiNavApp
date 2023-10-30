import { View, Text } from 'react-native';
import React from 'react';
import datas from '../data/data.json';
import SearchContent from './SearchContent';
const Search = () => {
    return (
        <View >
            {
                datas.map(data => (
                    <SearchContent key={data.id} data={data} />
                ))
            }
        </View>
    );
};

export default Search;