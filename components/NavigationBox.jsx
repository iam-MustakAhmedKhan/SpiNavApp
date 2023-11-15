import { View, Text, FlatList } from 'react-native';
import React from 'react';
import NavigationCard from './NavigationCard';
import datas from '../data/data.json';
import { boxIcon } from '../utils/images';


const NavigationBox = () => {
  return (
    <View className="mt-5 flex-row flex-wrap" style={{ gap: 20 }}>
      {
        datas.map(data => (
          <NavigationCard key={data.id} roomName={data.title} image={boxIcon[data.title]} />
        ))
      }

    </View>
  );
};

export default NavigationBox;