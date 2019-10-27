import { StyleSheet } from 'react-native'
import { colors, padding, fontSize } from '../../themes/base'
export const searchStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 20,
        height: 50,
        backgroundColor: colors.secondary,
        marginBottom: 10,
        marginHorizontal: padding.sm,
        alignItems: 'center',
        paddingHorizontal: padding.sm
    },
    txtInput: {
        width: '90%',
        color: '#000',
        height:'100%',
      //  backgroundColor:'red',
        fontSize: fontSize.md,
        marginLeft: padding.sm
    },
    searchImg: {
        width: 25,
        height: 25
    }
})