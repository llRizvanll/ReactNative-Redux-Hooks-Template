import { StyleSheet } from "react-native";

export const CmpStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        marginTop:50,
        backgroundColor:'#fff'
    },
    textStyle: {
        fontSize: 20,
        fontWeight:"bold",
        fontFamily:'RobotoMono',
        color:"#000"
    },
    btnStyle:{
        fontSize:30,
        color:'#fff',
        fontFamily:'RobotoMono'
    },
    btnContainer: {
        backgroundColor:'#311b92',
        padding:10,
        margin:20
    },
    imgStyle:{
        height:200,
        width:200,
        resizeMode:'contain',
    }
});