import React, { Component } from 'react'
import { View } from 'react-native'

import { Header } from '../../components/header'
import { PeopleList } from './PeopleList'
import { baseStyle } from '../../themes/base'
export const People = () => (
    <View style={baseStyle.container}>
        <Header />
        <PeopleList />
    </View>)

