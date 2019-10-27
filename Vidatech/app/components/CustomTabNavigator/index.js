import React from 'react'
import { Image } from 'react-native'
import styles from './styles'

export const navigationOptions = ({ navigation }) => {
    const PEOPLE_ICON = require('./images/people.jpg');
    const ROOM_ICON = require('./images/room.png');
    const { routeName } = navigation.state;
    let iconName;
    switch (routeName) {
        case 'People': iconName = PEOPLE_ICON; break;
        case 'Rooms': iconName = ROOM_ICON; break;
        default: iconName = ""; break;
    }
    return {
        tabBarIcon: () => <Image source={iconName} style={styles.iconStyle} />,
    }
}