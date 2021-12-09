import React, { memo, useState } from 'react'
import { Modal, Text, View, TextInput, Image, StyleSheet, TouchableOpacity, Linking, ScrollView, Button, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import Otp from '../otp'
import { color } from '../../../themes/color'
import { text } from '../../../themes/text'
import Header from '../../../components/header'
// import { TouchableOpacity } from 'react-native-gesture-handler'
const ic_phone = require('../../../../assets/img/ic_phone2x.png')
const ic_back = require('../../../../assets/img/ic_back.png')
const EnterPhone = (props) => {
    const [enterphone, setEnterphone] = useState("")
    const [showOtpScreen, setShowOtpScreen] = useState(false)
    const onBack = () => {
        props?.onBack()
    }

    const changeEnterphone = (value) => {
        setEnterphone(value.nativeEvent.text)
    }
    return (
        <ScrollView
            keyboardDismissMode="on-drag"
            style={styles.container}
        >

            <Modal
                animationType="slide"
                transparent={true}
                visible={props?.isShow}

            >


                <View style={{ backgroundColor: color.white, flex: 1, }}>
                    <Header title="Đổi mật khẩu" onBack={onBack}/>
                    {/* <View style={styles.header}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={onBack}>
                            <Image source={ic_back} />
                        </TouchableOpacity>
                        <View style={{flex: 3,alignItems : 'center'}}>
                        <Text style={[text.blackBold18]}>Đổi mật khẩu</Text>
                        </View>
                        <View style={{ flex: 1 }} />

                    </View> */}
                    <View style={{ backgroundColor: color.grey, padding: 16 }}>
                        <View style={styles.enterphone}>
                            <Image source={ic_phone} />
                            <TextInput keyboardType='numeric' onChange={changeEnterphone} placeholder='Nhập số điện thoại' />
                        </View>
                        <View style={styles.contact}>
                            <Text>hoặc liên hệ Admin</Text>
                            <Text onPress={() => { Linking.openURL('tel:099999999'); }} style={styles.funcNavText}>099 999 999</Text>

                        </View>

                        <View style={styles.button}>
                            <Button
                                onPress={() => setShowOtpScreen(true)}
                                title="Xác nhận số điện thoại"
                                color="#066435"

                            />
                            <Otp isShow={showOtpScreen} onBack={() => setShowOtpScreen(false)} />
                        </View>
                    </View>
                </View>

            </Modal>

        </ScrollView>
    )
}



export default memo(EnterPhone)

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.white,
        padding: 16,
    },
    headerText: {

    },
    container: {
        flex: 1
    },
    enterphone: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        marginTop: 48
    },
    contact: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24
    },
    funcNavText: {
        color: '#066435'
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 480
    }
})