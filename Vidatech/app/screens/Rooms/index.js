import React, { Component, useState } from 'react'
import { View } from 'react-native'

import { baseStyle } from '../../themes/base'
import { Header } from '../../components/header'
import { RoomList } from '../../screens/Rooms/RoomList'
import { BurgerMenu } from '../../components/BurgerMenu'

export const Rooms = () => {
    const [isBurgermenuVisible, setIsBurgermenuVisible] = useState(false);
    const showOrHideBurgerMenu = () => {
        setIsBurgermenuVisible(!isBurgermenuVisible);
    }
    return (
        <View style={baseStyle.container}>
            <View style={{ flex: 1 }}>
                <Header onClickBurgerMenu={showOrHideBurgerMenu} />
                <RoomList />
            </View>
            <BurgerMenu isBurgermenuVisible={isBurgermenuVisible}
                showOrHideBurgerMenu={showOrHideBurgerMenu} />
        </View>
    );
} 