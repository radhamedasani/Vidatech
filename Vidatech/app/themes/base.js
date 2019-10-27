import { Dimensions } from 'react-native'
import { StyleSheet, Platform } from 'react-native'

export const colors = {
    primary: '#882758',
    secondary: 'white',
    teritary: 'grey'
}

export const dimensions = {
    fullWidth: Dimensions.get('window').width,
    fullHeight: Dimensions.get('window').height
}

export const fontSize = {
    sm: 14,
    md: 16,
    lg: 20
}

export const padding = {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40
}


export const baseStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        marginTop: Platform.select({
            ios: 60,
        }),
        paddingBottom: 55
    },
    list: {
        marginTop: padding.sm,
        flex: 1
    }
})