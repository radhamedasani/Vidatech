import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import styles from './styles'

export const Header = (props) => {
    const { burgerImg, burgerContainer, container, title } = styles;
    const BURGER_IMG = require('./Images/burger.jpg');
    const { onClickBurgerMenu } = props
    return (<View style={container}>
        <TouchableWithoutFeedback onPress={onClickBurgerMenu}>
            <View style={burgerContainer}>
                <Image source={BURGER_IMG}
                    style={burgerImg}></Image>
            </View>
        </TouchableWithoutFeedback>
        <Text style={title}>Vidatech</Text>
    </View>);
}

