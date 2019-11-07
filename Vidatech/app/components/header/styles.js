import { StyleSheet } from 'react-native'
import { colors } from '../../themes/base'
import { padding,dimensions } from '../../themes/base'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        height: 60,
        flexDirection: 'row',
    },
    title: {
        color: colors.secondary,
        fontSize: 24,
        paddingRight:40,
        flex:1,
        textAlign: 'center',
    },
    burgerContainer: {
        alignItems : 'center',
        justifyContent : 'center',
        width:60,
        height:60
    },
    burgerImg: {
        width: 30,
        height: 30
    }
});
export default styles;