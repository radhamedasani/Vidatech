import React from 'react'
import { View, Image, Text } from 'react-native'
import {burgerMenuStyles} from './styles'

export const BurgerMenuItem = (props) => {
    const { burgerMenuItem, icon, title } = burgerMenuStyles;
    const { iconImg, titleTxt } = props;
    return (
        <View style={burgerMenuItem}>
            <Image source={iconImg} style={icon}></Image>
            <Text style={title}>{titleTxt}</Text>
        </View>
    )
}

