import { StyleSheet ,Platform} from 'react-native'
import { colors,padding,fontSize } from '../../themes/base'

export const burgerMenuStyles = StyleSheet.create({
    container: {
        width:'80%',
        height:'100%',
        marginLeft:'-80%',
        backgroundColor: colors.secondary,
        paddingLeft:padding.xl,
        position:'absolute',
    },
    burgerMenu:{
        marginTop:40,
        flex:1,
    },
    burgerMenuItem : {
        flexDirection:'row',
        paddingVertical:padding.md,
        alignItems:'center',
    },
    closeContainer : {
       marginTop : 40,
       alignSelf : 'flex-end',
       width : 70,
       height:70,
       marginRight : 40
    },
    closeIcon : {
       width : 50,
       height : 50
    },
    icon : {
        width :30,
        height:30
    },
    title : {
        marginLeft:padding.md,
        color:'grey',
        fontWeight:'bold',
        fontSize:fontSize.md
    }
})
