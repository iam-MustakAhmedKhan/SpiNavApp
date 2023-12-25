import { View, Text, Image as Img, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const NavigationCard = ({ roomName, image }) => {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => navigation.navigate("Data", { scData: roomName })}
            className="bg-[#e6eff6] w-[calc(50%-20%)] flex-auto p-5 items-center rounded-xl"
        >
            <View className="bg-[#e6eff6] w-full items-center rounded-xl">
                <Img className="w-14 h-14 object-cover" source={image} />
                <Text className="text-lg font-bold mt-3">{roomName}</Text>
            </View>
        </Pressable>
    );
};

export default NavigationCard;
