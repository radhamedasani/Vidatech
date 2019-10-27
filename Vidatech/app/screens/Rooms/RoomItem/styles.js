import { StyleSheet } from 'react-native'
import { colors, fontSize } from '../../../themes/base'

export const roomStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 5
    },
    roomName: {
        fontSize: fontSize.md,
    },
    created: {
        fontSize: fontSize.sm,
        color: colors.teritary
    }
})