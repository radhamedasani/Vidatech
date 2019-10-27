import React, { useState } from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { customCheckBoxStyles } from './styles'

export function CustomCheckBox(props) {
    const { container, checkBoxImg, checkBxTxt, checkbox } = customCheckBoxStyles;
    const [isChecked, setIsChecked] = useState(false);
    const { title, onClickCheckBox } = props;
    const CHECK_BOX_TICK = require('./Images/tick.png')
    const onClickCheckMark = () => {
        setIsChecked(!isChecked);
        onClickCheckBox(!isChecked);
    }
    return (<View style={container}>
        <Text style={checkBxTxt}>{title}</Text>
        <TouchableWithoutFeedback onPress={onClickCheckMark}>
            <View style={checkbox}>
                {isChecked ? <Image source={CHECK_BOX_TICK} style={checkBoxImg} /> : null}
            </View>
        </TouchableWithoutFeedback>
    </View>)
}