import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Keyboard,Modal } from 'react-native';
const ic_phone = require('../../../../assets/img/ic_phone@2x.png')



const Forgot = () => {



    return(
    <TouchableOpacity>
        <View>
        <TextInput source={ic_phone} placeholder='Nhập số điện thoại' />
        </View>
    </TouchableOpacity>
)
}

