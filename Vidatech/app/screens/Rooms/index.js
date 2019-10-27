import React from 'react'
import { View } from 'react-native'

import { baseStyle } from '../../themes/base'
import { Header } from '../../components/header'
import { RoomList } from '../../screens/Rooms/RoomList'

export const Rooms = () => (
    <View style={baseStyle.container}>
        <Header />
        <RoomList />
    </View>
) 