import React from 'react'
import { View } from 'react-native'
import { boxStyles } from './styles'

export const BoxContainer = (props) => (
    <View style={boxStyles.container}>
        {props.children}
    </View>
)