import { StyleSheet } from 'react-native'
import { padding, colors, fontSize } from '../../../themes/base'

export const peopleItemStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: padding.sm,
        marginHorizontal: padding.sm,
        paddingLeft: padding.sm,
        backgroundColor: colors.secondary
    },
    avatarStyle: {
        width: 70,
        height: 70,
    },
    nameStyle: {
        fontSize: fontSize.md
    },
    details: {
        paddingVertical: padding.sm,
        paddingLeft: padding.md
    },
    designation: {
        color: colors.teritary,
        fontSize: fontSize.sm
    },
    emailTxt: {
        color: 'blue',
        fontSize: fontSize.sm
    }
})