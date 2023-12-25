import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchInput from "../components/SearchInput";
import Accordion from "../components/Accordion";
import { useRoute } from "@react-navigation/native";
import datas from "../data/data.json";
import SearchContent from "../components/SearchContent";
import { useSelector } from "react-redux";

const DataScreen = () => {
    const route = useRoute();
    const { scData } = route.params;
    const searchValue = useSelector((state) => state.action.searchValue);
    return (
        <View
            className="bg-[#edf6fd] h-screen py-5"
            style={{ paddingHorizontal: 20 }}
        >
            <SearchInput inedex={1} />

            {searchValue === "" ? (
                datas.map((data) => {
                    if (data.title == scData) {
                        return <Accordion key={data.id} data={data} />;
                    }
                })
            ) : (
                <SearchContent />
            )}
        </View>
    );
};

export default DataScreen;

const styles = StyleSheet.create({});
