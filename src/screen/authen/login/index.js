import React, { useMemo, useState } from "react";
import { View, Image, Text, StyleSheet, Alert, TextInput, TouchableO, TouchableOpacity, SafeAreaView, Keyboard, } from 'react-native';
import styles from './style'
const ic_next_active = require('../assets/img/ic_next_active.png')
const ic_logo = require('../assets/img/ic_logo.png')
const ic_next = require('../assets/img/ic_next.png')


const Login = ()  => {
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")

    const _login = () => {
        // console.log("userName ::",userName)
        // console.log("password ::",password)
        // if (userName === "") {
        //     _showAlert("Tên đăng nhập không được để trống")
        //     return
        // }
        // if (password === "") {
        //     _showAlert("Password không được để trống")
        //     return
        // }
        console.log("vao trong thoi")

       
    }

    const isDisable = useMemo(() => {
        if (userName === "" || password === "") return true
        return false
    },[userName,password])

    const changeUserName = (value ) => {
        setUserName(value.nativeEvent.text)
    }
    const changePass = (value ) => {
        setPassword(value.nativeEvent.text)
    }
    
    const _showAlert = (message) => {
        Alert.alert(
            "Thông báo",
            message,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
    }
    
    return (
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={{flex : 1}}>
            <View style={{flex : 1,alignSelf : 'center',justifyContent : 'center',alignItems : 'center'}}>
                <Image source={ic_logo} />
                </View>
               
            <View style={{marginHorizontal : 24}}>
                <Text style={styles.text}>ĐĂNG NHẬP</Text>
                <TextInput onChange={changeUserName} placeholder='Tên đăng nhập' style={{marginBottom : 16,borderBottomWidth : 1,borderColor :"#E8E8E8" }}/>
                <TextInput  onChange={changePass} placeholder='Mật khẩu' style={{marginBottom : 16,borderBottomWidth : 1,borderColor :"#E8E8E8" }}/>
                <View style={styles.login}>
                    <Text>Đổi mật khẩu</Text>
                    <TouchableOpacity activeOpacity={isDisable ===true ? 1 : 0.5} onPress={isDisable ===true ? () => {} : _login}>
                        <Image style={styles.imageButtonStyle} source={isDisable ===true ? ic_next :ic_next_active}/>
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
        </TouchableOpacity>
    );
}

export default Login;