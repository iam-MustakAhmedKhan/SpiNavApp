import { View, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const SearchInput = ({ inedex }) => {

    const navigation = useNavigation();

    return (
        <View className="bg-[#e6eff6] flex-row rounded-full py-[10px] items-center px-2" >
            {inedex ? <Pressable onPress={() => navigation?.goBack()} className="pr-2">
                <Feather name="arrow-left" size={24} color="#9ca3af" />
            </Pressable> : ''}

            <TextInput placeholder='Ex: 1008,1006 Computer Lab' placeholderTextColor={'gray'} className={`flex-1 font-bold ${inedex ? '' : 'pl-2'}`} />

            <View className="pr-2">
                <AntDesign name="search1" size={24} color="#9ca3af" />
            </View>
        </View>
    );
};

export default SearchInput;
