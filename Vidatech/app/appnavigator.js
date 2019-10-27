import { createBottomTabNavigator } from 'react-navigation'

import { People } from './screens/People'
import { Rooms } from './screens/Rooms'
import { navigationOptions } from './components/CustomTabNavigator'

const AppNavigator = createBottomTabNavigator({
    People,
    Rooms
}, {
    defaultNavigationOptions: navigationOptions
});


export default AppNavigator;