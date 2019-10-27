import { StyleSheet } from 'react-native'
import { colors } from '../../themes/base'
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60
    },
    title: {
        color: colors.secondary,
        fontSize: 24
    }
});
export default styles;