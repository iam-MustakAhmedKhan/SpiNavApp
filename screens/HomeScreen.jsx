import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import BottomSheet from '../components/BottomSheet';
// import Bsheet from '../components/Bsheet';

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../asset/img/bg.png')} resizeMode='cover' blurRadius={8}>

            <View style={styles.heroLogoText}>
                <Image source={require('../asset/img/logo.png')} />
                <Text style={styles.heroText} >Where is your destination?</Text>
            </View>

            <BottomSheet navigation={navigation} />
            {/* <Bsheet/> */}
        </ImageBackground>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    heroLogoText: {
        alignItems: 'center',
        marginTop: 40
    },
    heroText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});