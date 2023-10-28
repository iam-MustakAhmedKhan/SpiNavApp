import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
// import GlobalStyles from './components/GlobalStyles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DataScreen from './screens/DataScreen';
import MapScreen from './screens/MapScreen';


const Stack = createStackNavigator();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {


      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>

        <SafeAreaView style={{ flex: 1 }}>
          <Stack.Navigator >
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Data" component={DataScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
          </Stack.Navigator>


        </SafeAreaView>

      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
