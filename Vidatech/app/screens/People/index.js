import React, { Component, useState } from 'react'
import { View, Text } from 'react-native'

import { Header } from '../../components/header'
import { PeopleList } from './PeopleList'
import { BurgerMenu } from '../../components/BurgerMenu'
import { baseStyle } from '../../themes/base'

export const People = () => {
    const [isBurgermenuVisible, setIsBurgermenuVisible] = useState(false);
    const showOrHideBurgerMenu = () => {
        setIsBurgermenuVisible(!isBurgermenuVisible);
    }
    return (<View style={baseStyle.container}>
        <View style={{ flex: 1 }}>
            <Header onClickBurgerMenu={showOrHideBurgerMenu} />
            <PeopleList />
        </View>
        <BurgerMenu isBurgermenuVisible={isBurgermenuVisible}
            showOrHideBurgerMenu={showOrHideBurgerMenu} />
    </View>)
}

