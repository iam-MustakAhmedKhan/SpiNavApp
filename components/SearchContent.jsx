import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Pressable } from 'react-native';
import { ScrollView } from 'react-native';
import { boxIcon } from '../utils/images';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import individual from '../data/individual.json';
import { getSearchValue } from '../redux/actionSlice';
// boxIcon[data.title];
const SearchContent = ({ data }) => {
    const searchValue = useSelector(state => state.action.searchValue);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleFilter = v => {
        const roomsearchtitle = v.roomname.toLowerCase();
        if (roomsearchtitle.includes(searchValue.toLowerCase())) {
            return true;
        }
    };


    const handleNevigate = (room => {
        dispatch(getSearchValue(''));
        return navigation.navigate('Map', {
            mapName: room.roomname,
            floor: room.floor,
            building: room.building
        });
    });

    return (

        <View className="mt-3 h-screen">
            <ScrollView >
                {
                    individual.filter(handleFilter).map(room => (
                        <Pressable onPress={() => handleNevigate(room)} key={room.roomname} className="flex-row justify-start rounded-[12px] bg-[#e6eff6] py-2  px-2 items-center mb-2" style={{ rowGap: 20 }}>
                            <View className="w-[60px] h-[60px] rounded-full  bg-[#edf6fd] p-3 mr-3 object-cover">
                                <Image source={boxIcon[room.title]} className="w-full h-full" />
                            </View>
                            <Text className="text-left justify-self-end flex-1 font-bold text-[16px]">{room.roomname}</Text>
                        </Pressable>
                    ))
                }
            </ScrollView>
        </View>



    );
};

export default SearchContent;

const styles = StyleSheet.create({});


