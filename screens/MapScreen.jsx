import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import { useRoute } from '@react-navigation/native';
import SearchInput from '../components/SearchInput';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { mapsPics } from '../utils/images';


import { useSelector } from 'react-redux';
import SearchContent from '../components/SearchContent';
// import Zoom from 'react-native-zoom-reanimated';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';



const MapScreen = () => {

    const route = useRoute();
    const { mapName, floor, building } = route.params;
    const solidMapName = mapName.split(' ').join('').toLowerCase();
    const searchValue = useSelector(state => state.action.searchValue);


    return (
        <View className="bg-[#edf6fd] h-screen py-5" style={{ paddingHorizontal: 20 }} >
            <SearchInput inedex={1} />

            
            {searchValue == '' ? <>
                <View className="border h-2/3 w-full mt-4 rounded-[12px] border-[#0076BE] overflow-hidden items-center justify-center">
                    <ReactNativeZoomableView
                        maxZoom={5}
                        minZoom={0.5}
                        zoomStep={0.5}
                        initialZoom={1}
                        bindToBorders={true}
                        // onZoomAfter={this.logOutZoomState}
                        style={{
                            padding:100,
                 }} >
                   
                        {mapsPics[solidMapName] ? <Image source={mapsPics[solidMapName]} /> : <Text>No Map Found!</Text>}
                  

                </ReactNativeZoomableView>
                </View>

                <View className="mt-8 flex-row items-center">
                    <Text className="font-bold">{building}</Text>
                    <Feather name="chevrons-right" size={24} color="black" />
                    <Text className="font-bold">{floor}</Text>
                    <Feather name="chevrons-right" size={24} color="black" />
                    <Text className="font-bold">{mapName}</Text>
                </View></> : <SearchContent />}
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({});