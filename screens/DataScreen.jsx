import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchInput from '../components/SearchInput';
import Accordion from '../components/Accordion';
import { useRoute } from '@react-navigation/native';
import datas from '../data/data.json';

const DataScreen = ({ navigation }) => {
    const route = useRoute();
    const { scData } = route.params;
    return (
        <View className="bg-[#edf6fd] h-screen py-5" style={{ paddingHorizontal: 20 }} >
            <SearchInput navigation={navigation} inedex={1} />

            {

                datas.map(data => {
                    if (data.title == scData) {
                        return (
                            <Accordion key={data.id} data={data} />
                        );
                    }
                })
            }

        </View>
    );
};

export default DataScreen;

const styles = StyleSheet.create({});