import React, { useState } from 'react'
import { View, TextInput, Image, TouchableWithoutFeedback } from 'react-native'
import { searchStyle } from './styles'

export const SearchBar = (props) => {
    const SEARCH_IMG = require('./Images/search.png');
    const [searchTxt, setSearchTxt] = useState('');
    const { placeholderTxt, onClickSearch } = props;
    const { container, txtInput, searchImg } = searchStyle;
    const onTextInput = (changedText) => {
       // alert(changedText);
        setSearchTxt(changedText);
        onClickSearch(changedText);
    }
    const onClickSearchButton = () => {
         onClickSearch(searchTxt);
    }
    return (<View style={container}>
        <TextInput style={txtInput}
            placeholder={placeholderTxt}
            placeholderTextColor='grey'
            value = {searchTxt}
            onChangeText={onTextInput} />
        <TouchableWithoutFeedback onPress={onClickSearchButton}>
            <Image style={searchImg}
                source={SEARCH_IMG}></Image>
        </TouchableWithoutFeedback>
    </View>);
}