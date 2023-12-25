import { View, TextInput, Pressable } from "react-native";
import React, { forwardRef, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getFocus, getIndex, getSearchValue } from "../redux/actionSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchInput = ({ inedex }, ref) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const scValue = useSelector((state) => state.action.searchValue);

    const [tt, settt] = useState("");

    const handleFocus = () => {
        dispatch(getIndex(1));
        dispatch(getFocus(true));
    };
    const handleBlur = () => {
        dispatch(getIndex(0));
    };

    useEffect(() => {
        dispatch(getSearchValue(tt));
    }, [tt]);

    return (
        <View className="bg-[#e6eff6] flex-row rounded-full py-[10px] items-center px-2">
            {inedex ? (
                <Pressable
                    onPress={() => navigation?.goBack()}
                    className="pr-2"
                >
                    <Feather name="arrow-left" size={24} color="#9ca3af" />
                </Pressable>
            ) : (
                ""
            )}
            <TextInput
                defaultValue={scValue}
                onChangeText={(n) => settt(n)}
                ref={ref}
                onFocus={handleFocus}
                placeholder="Ex: 1008,1006 Computer Lab"
                placeholderTextColor={"gray"}
                className={`flex-1 font-bold ${inedex ? "" : "pl-2"}`}
            />

            <View className="pr-2">
                <AntDesign name="search1" size={24} color="#9ca3af" />
            </View>
        </View>
    );
};

export default forwardRef(SearchInput);
