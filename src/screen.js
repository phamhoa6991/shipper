import React from "react";
import { View, Image, Text, StyleSheet, Button, TextInput, TouchableO, TouchableOpacity, } from 'react-native';

function Screen() {
    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <Image source={require('./img/ic_logo.png')} />
            </View>
            <View >
                <Text style={styles.text}>ĐĂNG NHẬP</Text>
                <TextInput placeholder='Tên đăng nhập' style={styles.input} />
                <TextInput placeholder='Mật khẩu' style={styles.input} />
            </View>
            <View style={styles.login}>
                <Text>Đổi mật khẩu</Text>
                <TouchableOpacity >
                    <Image style={styles.imageButtonStyle} source={require('./img/ic_next.png')}></Image>

                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#151516',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 36
    },
    img: {
        marginTop: 100,
        marginBottom: 95,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        display: 'flex',
        marginLeft: 35,
    },
    login: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginLeft: 35,
        marginRight: 37,
        marginTop: 121,
    },
    imageButtonStyle:{
        width:51,
        height:51,

    },
        
    
})
export default Screen;