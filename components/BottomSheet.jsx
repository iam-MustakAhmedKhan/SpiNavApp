import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import SearchInput from './SearchInput';
import NavigationBox from './NavigationBox';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";


const BottomSheets = ({ navigation }) => {
    const [ind, setIndex] = useState(0);

    const sheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ["50%", "100%"], []);

    const handleSheetChange = useCallback((index) => {
        setIndex(index);
    }, []);

    return (


        <View style={styles.bottomSheetWrap}>
            <BottomSheet ref={sheetRef}
                snapPoints={snapPoints}
                backgroundStyle={{
                    backgroundColor: '#edf6fd',
                    // borderTopEndRadius: ind == 1 ? 0 : 20,
                    // borderTopStartRadius: ind == 1 ? 0 : 20,

                }}
                handleIndicatorStyle={{ backgroundColor: '#bfcad2', width: 50, height: 5 }}
                onChange={handleSheetChange}
            >

                <View style={{ paddingHorizontal: 20 }}>
                    <SearchInput inedex={ind} />
                    <NavigationBox navigation={navigation} />
                </View>



            </BottomSheet>
        </View >
    );
};

export default BottomSheets;

const styles = StyleSheet.create({
    bottomSheetWrap: {
        // backgroundColor: '#edf6fd',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        width: '100%',

        flex: 1,
    },
});