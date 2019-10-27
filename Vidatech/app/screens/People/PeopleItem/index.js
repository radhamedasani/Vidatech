import React, { Component } from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { peopleItemStyle } from './styles'
import { formatDate } from '../../../utilities'
import { ImageLoader } from '../../../components/ImageLoader'
import { BoxContainer } from '../../../components/BoxContainer'

export function PeopleItem(props) {
    const { avatar, name, email, jobTitle, favouriteColor, createdAt } = props;
    const { details, nameStyle, emailTxt, designation, avatarStyle } = peopleItemStyle;
    return (<BoxContainer>
        <ImageLoader avatarStyle={avatarStyle} avatar={avatar} />
        <View style={details}>
            <Text style={[nameStyle, { color: favouriteColor }]}>{`${name}`}</Text>
            <Text style={designation}>{jobTitle}</Text>
            <Text style={designation}>{`Joined On ${formatDate(createdAt)}`}</Text>
            <Text style={emailTxt}>{email}</Text>
        </View>
    </BoxContainer>)
}



