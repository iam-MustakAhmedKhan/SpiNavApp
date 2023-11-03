import { Dimensions, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import SearchInput from './SearchInput';
import NavigationBox from './NavigationBox';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFocus, getIndex, getSearchValue } from '../redux/actionSlice';
import SearchContent from './SearchContent';


const BottomSheets = () => {

    const intRef = useRef(null);
    const sheetRef = useRef(null);
    const inde = useSelector(state => state.action.sheetIndex);
    const isfocued = useSelector(state => state.action.isfocued);
    const searchValue = useSelector(state => state.action.searchValue);
    // variables
    const snapPoints = useMemo(() => ["50%", "100%"], []);
    const dispatch = useDispatch();

    const handleSheetChange = useCallback((index) => {
        dispatch(getIndex(index));
        if (index == 0) {
            dispatch(getSearchValue(''));
        }

        // console.log(index);
        // console.log('hello');

    }, []);

    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
    }, []);

    useEffect(() => {
        handleSnapPress(inde);

        if (inde !== 1) {
            Keyboard.dismiss();
        }
    });

    useEffect(() => {
        if (intRef.current) {
            const isFocused = intRef.current.isFocused();
            dispatch(getFocus(isFocused));
        }
    });


    return (


        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.bottomSheetWrap}>
                <BottomSheet ref={sheetRef}
                    snapPoints={snapPoints}
                    backgroundStyle={{
                        backgroundColor: '#edf6fd',


                    }}
                    handleIndicatorStyle={{ backgroundColor: '#bfcad2', width: 50, height: 5 }}
                    onChange={handleSheetChange}
                // onAnimate={(fromIndex, toIndex) => {
                //     handleSheetChange(toIndex);
                //     console.log(fromIndex);
                // }}
                // onAnimate={(fromIndex, toIndex) => console.log(toIndex)}
                >

                    <View style={{ paddingHorizontal: 20 }}>
                        <SearchInput ref={intRef} inedex={inde} />
                        {/* {isfocued ? <SearchContent /> : } */}
                        {searchValue === '' ? <NavigationBox /> : <SearchContent />}


                    </View>



                </BottomSheet>
            </View >
        </TouchableWithoutFeedback>
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