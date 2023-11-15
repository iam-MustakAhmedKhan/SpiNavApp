import { useCallback, useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dev from './screens/Dev';
import Stacknav from './screens/Stacknav';
import Sidebar from './components/Sidebar';
import { StatusBar } from 'react-native';


const Drawer = createDrawerNavigator();





export default function App() {


  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      setAppIsReady(true);
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
    <>
      <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Provider store={store}>

          <SafeAreaView style={{ flex: 1 }}>

            <NavigationContainer>

              <Drawer.Navigator

                screenOptions={{
                  drawerStyle: { width: '100%' },
                  drawerPosition: 'right'
                }}
                drawerContent={(props) => <Sidebar data={props} />}
              >
                <Drawer.Screen name='Main' component={Stacknav} options={{ headerShown: false }} />
                <Drawer.Screen name='Developers' component={Dev} />
              </Drawer.Navigator>


            </NavigationContainer>


          </SafeAreaView>
        </Provider>

      </GestureHandlerRootView>
      <StatusBar backgroundColor={'#4099cf'} />

    </>
  );
}