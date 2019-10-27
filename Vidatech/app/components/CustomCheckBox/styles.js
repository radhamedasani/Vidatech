import { StyleSheet } from 'react-native'
import { padding, fontSize, colors } from '../../themes/base'

export const customCheckBoxStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: padding.md,
        marginVertical: padding.sm,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    checkbox: {
        borderColor: 'grey',
        borderWidth: 1,
        width: 30,
        height: 30,
        backgroundColor: 'white'
    },
    checkBoxImg: {
        width: 28,
        height: 28
    },
    checkBxTxt: {
        fontSize: fontSize.md,
        color: 'black',
        marginRight: padding.sm
    }

})