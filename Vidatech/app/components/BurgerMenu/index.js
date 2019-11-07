import React, { useState, useEffect } from 'react'
import { View, FlatList, Text, TouchableWithoutFeedback, Image, Animated, Easing } from 'react-native'
import { burgerMenuStyles } from './styles'
import { BurgerMenuItem } from './BurgerItem'

export const BurgerMenu = (props) => {
    const { container, burgerMenu, closeContainer, closeIcon } = burgerMenuStyles;
    const burgerMenuList = [{
        "iconImg": require('./Images/home.png'),
        "titleTxt": 'Home'
    },
    {
        "iconImg": require('./Images/info.png'),
        "titleTxt": 'Info'
    },
    {
        "iconImg": require('./Images/about.jpg'),
        "titleTxt": 'About'
    },
    {
        "iconImg": require('./Images/contact.png'),
        "titleTxt": 'Contact'
    }];
    const CLOSE_IMG = require('./Images/close.png')
    const renderBurgerMenuItem = ({ item }) => <BurgerMenuItem {...item} />
    const [burgerAnimVal, setBurgerAnimVal] = useState(new Animated.Value(0));
    const { isBurgermenuVisible, showOrHideBurgerMenu } = props;
    const burgerAnimStyle = {
        marginLeft: burgerAnimVal.interpolate({
            inputRange: [0, 1],
            outputRange: ['-80%', '0%']
        })
    }
    const animateBurgerMenuPosition = () => {
        Animated.timing(burgerAnimVal, {
            toValue: isBurgermenuVisible ? 1 : 0,
            duration: 1000,
            easing: Easing.linear
        }).start();
    }
    useEffect(animateBurgerMenuPosition,[isBurgermenuVisible]);
    return (<Animated.View style={[container, burgerAnimStyle]}>
        <TouchableWithoutFeedback onPress={showOrHideBurgerMenu}>
            <View style={closeContainer}>
                <Image style={closeIcon}
                    source={CLOSE_IMG}>
                </Image>
            </View>
        </TouchableWithoutFeedback>
        <FlatList style={burgerMenu}
            keyExtractor={({ titleTxt }) => titleTxt}
            renderItem={renderBurgerMenuItem}
            data={burgerMenuList} />
    </Animated.View >)
}