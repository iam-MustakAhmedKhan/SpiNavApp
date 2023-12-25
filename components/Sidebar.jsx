import {
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import React from "react";
import { Pressable, Text } from "react-native";
import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
    Collapse,
    CollapseBody,
    CollapseHeader,
} from "accordion-collapse-react-native";
import { boxIcon } from "../utils/images";
import { Image } from "react-native";
import { Linking } from "react-native";
import devInfo from "../data/devInfo.json";

const Sidebar = ({ data }) => {
    const openLink = (link) => {
        Linking.canOpenURL(link)
            .then(() => {
                Linking.openURL(link);
            })
            .catch((err) =>
                console.error("Error opening Instagram profile:", err)
            );
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#0076be",paddingTop:16 }}>
            <DrawerContentScrollView {...data}>
                <View className="flex-row justify-between items-center px-4">
                    <Image source={boxIcon.namedLogo} />
                    <Pressable onPress={() => data.navigation.closeDrawer()}>
                        <Entypo name="cross" size={40} color="black" />
                    </Pressable>
                </View>
                <View className="px-4 mt-5">
                    <View className="mb-2">
                        <Collapse>
                            <CollapseHeader>
                                <View className="flex-row justify-start rounded-[12px] bg-[#076cab] py-2  px-2 items-center ">
                                    <View className="w-[60px] h-[60px] rounded-full  bg-[#0076be] p-3 mr-3 object-cover">
                                        <Image
                                            source={boxIcon["UserManual"]}
                                            className="w-full h-full"
                                        />
                                    </View>
                                    <Text className="text-left justify-self-end flex-1 font-bold text-[16px]">
                                        User Manual
                                    </Text>
                                    <View>
                                        <Entypo
                                            name="chevron-small-down"
                                            size={24}
                                            color="black"
                                        />
                                    </View>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <View className="bg-[#e6eff6] p-5 rounded-md">
                                    <Text>
                                        Comming Soon!
                                    </Text>
                                </View>
                            </CollapseBody>
                        </Collapse>
                    </View>
                    <View className="mb-2">
                        <Collapse>
                            <CollapseHeader>
                                <View className="flex-row justify-start rounded-[12px] bg-[#076cab] py-2  px-2 items-center ">
                                    <View className="w-[60px] h-[60px] rounded-full  bg-[#0076be] p-3 mr-3 object-cover">
                                        <Image
                                            source={boxIcon["Map"]}
                                            className="w-full h-full"
                                        />
                                    </View>
                                    <Text className="text-left justify-self-end flex-1 font-bold text-[16px]">
                                        Full Map
                                    </Text>
                                    <View>
                                        <Entypo
                                            name="chevron-small-down"
                                            size={24}
                                            color="black"
                                        />
                                    </View>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <View className="bg-[#e6eff6] p-5 rounded-md">
                                    <Text>
                                        Comming Soon!
                                    </Text>
                                </View>
                            </CollapseBody>
                        </Collapse>
                    </View>
                    <View className="mb-2">
                        <Collapse>
                            <CollapseHeader>
                                <View className="flex-row justify-start rounded-[12px] bg-[#076cab] py-2  px-2 items-center ">
                                    <View className="w-[60px] h-[60px] rounded-full  bg-[#0076be] p-3 mr-3 object-cover">
                                        <Image
                                            source={boxIcon["Dev"]}
                                            className="w-full h-full"
                                        />
                                    </View>
                                    <Text className="text-left justify-self-end flex-1 font-bold text-[16px]">
                                        Developers
                                    </Text>
                                    <View>
                                        <Entypo
                                            name="chevron-small-down"
                                            size={24}
                                            color="black"
                                        />
                                    </View>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                {devInfo.map((info, i) => (
                                    <View
                                        key={i}
                                        className="bg-[#e6eff6] p-5 rounded-md items-center mb-3"
                                    >
                                        <Image
                                            source={boxIcon[`${info.pic}`]}
                                        />
                                        <Text className="font-bold mt-3 text-xl">
                                            {info.name}
                                        </Text>
                                        <Text>{info.class}</Text>
                                        <Text className="font-bold mt-2">
                                            {info.contribution}
                                        </Text>
                                        <View className="flex-row items-center justify-center gap-3 mt-1">
                                            {info.social.map((so, i) => (
                                                <Pressable
                                                    key={i}
                                                    onPress={() =>
                                                        openLink(`${so.link}`)
                                                    }
                                                >
                                                    <Entypo
                                                        name={`${so.component}`}
                                                        size={24}
                                                        color="black"
                                                    />
                                                </Pressable>
                                            ))}
                                        </View>
                                    </View>
                                ))}
                            </CollapseBody>
                        </Collapse>
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

export default Sidebar;
