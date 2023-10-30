import { View, Text, Image as Img, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const NavigationCard = ({ roomName, image }) => {

    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate('Data', { scData: roomName })} className="bg-[#e6eff6] flex-auto p-5 items-center rounded-xl">
            <View className="bg-[#e6eff6] flex-auto p-5 items-center rounded-xl" >
                <Img source={image} />
                <Text className="text-lg font-bold mt-3">{roomName}</Text>
            </View>
        </Pressable>
    );
};

export default NavigationCard;