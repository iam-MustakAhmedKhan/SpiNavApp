import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { ScrollView } from 'react-native';
import { boxIcon } from '../utils/images';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchValue } from '../redux/actionSlice';



const Accordion = ({ data }) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleNavigate = (room) => {
        dispatch(getSearchValue(''));
        return navigation.navigate('Map', {
            mapName: room.roomname,
            floor: room.floor,
            building: room.building
        });
    };


    return (
        <View className=" mt-3  pb-12">
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    data.roomsdropdown.map(room => (
                        <View key={room.id} className="py-2  px-2">
                            <Collapse>

                                <CollapseHeader>
                                    {room.title ? <View key={room.id} className="flex-row justify-start rounded-[12px] bg-[#e6eff6] py-2  px-2 items-center " style={{ ro: 20 }}>
                                        <View className="w-[60px] h-[60px] rounded-full  bg-[#edf6fd] p-3 mr-3 object-cover">
                                            <Image source={boxIcon[data.title]} className="w-full h-full" />
                                        </View>
                                        <Text className="text-left justify-self-end flex-1 font-bold text-[16px]">{room.title}</Text>
                                        <View >
                                            <Entypo name="chevron-small-down" size={24} color="black" />
                                        </View>
                                    </View> : <Pressable onPress={() => handleNavigate(room)} key={room.id} className="flex-row justify-start rounded-[12px] bg-[#e6eff6] py-2  px-2 items-center " style={{ ro: 20 }}>
                                        <View className="w-[60px] h-[60px] rounded-full  bg-[#edf6fd] p-3 mr-3 object-cover">
                                            <Image source={boxIcon[data.title]} className="w-full h-full" />
                                        </View>
                                        <Text className="text-left justify-self-end flex-1 font-bold text-[16px]">{room.roomname}</Text>

                                    </Pressable>}
                                </CollapseHeader>
                                <CollapseBody >
                                    <View className="bg-[#e6eff6] p-3 rounded-[12px] pb-1">

                                        <View style={styles.contentContainer}>
                                            {
                                                room.roomNo?.map(rm => (
                                                    <Pressable key={rm.id} onPress={() => handleNavigate(rm)} className="flex-row items-center p-2 mb-2  bg-[#edf6fd] rounded-md">
                                                        <View className="w-[60px] h-[60px] rounded-full  bg-[#e6eff6] p-3 mr-3 object-cover">
                                                            <Image source={boxIcon[data.title]} className="w-full h-full" />
                                                        </View>
                                                        <Text className="text-left font-bold text-[16px]">{rm.roomname}</Text>
                                                    </Pressable>
                                                ))
                                            }
                                        </View>

                                    </View>
                                </CollapseBody>

                            </Collapse>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
};

export default Accordion;

const styles = StyleSheet.create({
    contentContainer: {
        // position: 'absolute',
        // top: 0,
        width: '100%',
    }
});