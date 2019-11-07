import React, { useEffect } from 'react';
import { createAppContainer } from 'react-navigation'
import AppNavigator from './app/appnavigator'
import SplashScreen from 'react-native-splash-screen'

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <AppContainer />);
}

export default App;

