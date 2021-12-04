import React, { memo, useState } from 'react'
import { Modal, Text, View, TextInput, Image, StyleSheet, Linking, ScrollView, Button } from 'react-native'
import Otp from '../otp'
import { color } from '../../../themes/color'
const ic_phone = require('../../../../assets/img/ic_phone2x.png')
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

                <View style={{ backgroundColor: color.grey, flex: 1 }}>
                    <Text onPress={onBack}>Back</Text>
                    <View style={styles.enterphone}>
                        <Image source={ic_phone} />
                        <TextInput onChange={changeEnterphone} placeholder='Nhập số điện thoại' />
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

            </Modal>
        </ScrollView>
    )
}



export default memo(EnterPhone)

const styles = StyleSheet.create({
    container:{
        flex : 1
    },
    enterphone: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.2
    },
    contact: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    funcNavText:{
        color:'#066435'
    },
    button :{
        marginTop:549
    }
})