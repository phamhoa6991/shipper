import React from "react";
import { View,Image, Text,StyleSheet,Button,TextInput  } from 'react-native';

function Screen() {
    return (
        <View style={styles.container}>
            <Image source={require('./img/ic_logo.png')}style={styles.img}/>
            <Text style={styles.text}>ĐĂNG NHẬP</Text>
            <TextInput placeholder='Tên đăng nhập' style={styles.input}/>
            <TextInput placeholder='Mật khẩu' style={styles.input}/>
        </View>
        );
}
const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',

         alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontWeight: 'bold',
        color:'#151516',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    img:{
        marginTop:100,
        marginBottom:95,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    input :{
        
    }
})
export default Screen;