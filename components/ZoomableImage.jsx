import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';



const ZoomableImage = ({ imageUri }) => {
    const images = [{ url: '', props: { source: imageUri } }];

    const h = Dimensions.get('window').height;
    const w = Dimensions.get('window').width;
    return (
        <View>
            <ImageZoom
                cropWidth={w}
                cropHeight={h}
                imageHeight={'100%'}
                imageWidth={'100%'}
                minScale={0.4}
                enableCenterFocus={false}
            >
                <Image
                    source={imageUri}

                />
            </ImageZoom>


        </View >
    );
};

export default ZoomableImage;
