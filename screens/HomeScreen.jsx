import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from "react-native";
import React from "react";
import BottomSheet from "../components/BottomSheet";
import { BackHandler } from "react-native";
import { useEffect } from "react";
import { Alert } from "react-native";
// import Bsheet from '../components/Bsheet';
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const HomeScreen = () => {
    const navigation = useNavigation();
    const inde = useSelector((state) => state.action.sheetIndex);

    return (
        <>
            {inde === 0 && (
                <Pressable
                    onPress={() => navigation.openDrawer()}
                    className="absolute right-0 px-4 py-2 z-10"
                >
                    <Ionicons name="menu" size={40} color="black" />
                </Pressable>
            )}

            <ImageBackground
                style={{ flex: 1 }}
                source={require("../assets/img/bg.png")}
                resizeMode="cover"
                blurRadius={8}
                className="z-[-1]"
            >
                <View style={styles.heroLogoText}>
                    <Image source={require("../assets/img/logo.png")} />
                    <Text style={styles.heroText}>
                        Where is your destination?
                    </Text>
                </View>

                <BottomSheet />
            </ImageBackground>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    heroLogoText: {
        alignItems: "center",
        marginTop: 40,
    },
    heroText: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
    },
});
