import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import BottomSheet from '../components/BottomSheet';
import { BackHandler } from 'react-native';
import { useEffect } from 'react';
import { Alert } from 'react-native';
// import Bsheet from '../components/Bsheet';

const HomeScreen = () => {

    useEffect(() => {
        const backAction = () => {
            Alert.alert('Hold on!', 'Are you sure you want to go back?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);

    return (
        <ImageBackground style={{ flex: 1 }} source={require('../asset/img/bg.png')} resizeMode='cover' blurRadius={8}>

            <View style={styles.heroLogoText}>
                <Image source={require('../asset/img/logo.png')} />
                <Text style={styles.heroText} >Where is your destination?</Text>
            </View>

            <BottomSheet />
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