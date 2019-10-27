import { StyleSheet } from 'react-native'
import { padding, colors } from '../../themes/base'

export const boxStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: padding.sm,
        marginHorizontal: padding.sm,
        paddingLeft: padding.sm,
        backgroundColor: colors.secondary
    }
});