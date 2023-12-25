import { View, Text, FlatList } from "react-native";
import React from "react";
import NavigationCard from "./NavigationCard";
import datas from "../data/data.json";
import { boxIcon } from "../utils/images";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const NavigationBox = () => {
    // flex-row flex-wrap
    return (
        <View style={{ gap: 20,flexDirection:'row',width:'100%',flexWrap:'wrap' }}>
            {datas.map((data) => (
                <NavigationCard
                    key={data.id}
                    roomName={data.title}
                    image={boxIcon[data.title]}
                />
            ))}
        </View>
    );
};

export default NavigationBox;
