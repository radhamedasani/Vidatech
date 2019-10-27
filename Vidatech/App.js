import React from 'react';
import { createAppContainer } from 'react-navigation'
import AppNavigator from './app/appnavigator'

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <AppContainer />
)

export default App;

