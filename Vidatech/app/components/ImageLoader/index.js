import React, { Component, useState, useEffect } from 'react'
import { View, Image, ActivityIndicator } from 'react-native'
import { styles } from './styles'

export function ImageLoader(props) {
    const { avatar, avatarStyle } = props;
    const { loader } = styles;
    const [loading, setLoading] = useState(true);
    const [srcImage, setSrcImge] = useState({ uri: avatar });
    const errorImg = require('./Images/error.jpg');
    const onDownloadImage = () => {
        setLoading(false);
    }
    const onError = () => {
        setLoading(false);
        setSrcImge(errorImg);
    }
    return (<View style={avatarStyle}>
        <View style={[loader, avatarStyle]}>
            {loading ? <ActivityIndicator animating={true} size='large' /> : null}
        </View>
        <View style={[loader, avatarStyle]}>
            <Image source={srcImage} style={avatarStyle}
                onLoad={onDownloadImage} onError={onError} />
        </View>
    </View>);
}   