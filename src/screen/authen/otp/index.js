import React, { memo,useState } from 'react'
import { Modal, Text, View, TextInput, StyleSheet,Button, } from 'react-native'
import Header from '../../../components/header'
import { text } from '../../../themes/text'
import Forgot from '../forgot-password'
const Otp = (props) => {
    const [showForgotScreen, setShowForgotScreen] = useState(false)
    const onBack = () => {
        props?.onBack()
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props?.isShow}
        >
            <View style={{ backgroundColor: '#F5F5F5', flex: 1 }}>
                <Header title="Mã xác nhận" onBack={onBack} />

                <View style={styles.OTP}>
                    <Text style={[text.blackBold18]}>Nhập mã OTP</Text>

                    <View style={styles.otpNumber}>
                        <TextInput style={styles.input} keyboardType='numeric'></TextInput>
                        <TextInput style={styles.input} keyboardType='numeric'></TextInput>
                        <TextInput style={styles.input} keyboardType='numeric'></TextInput>
                        <TextInput style={styles.input} keyboardType='numeric'></TextInput>
                    </View>
                </View>
                <View style={{ paddingLeft: 16 }}>
                    <Text style={[text.blackBold14]}>Gửi lại OTP (00:30)</Text>
                </View>
                <View style={{ paddingLeft: 16, paddingRight : 16} }>
                            <Button
                                onPress={() => setShowForgotScreen(true)}
                                title="Xác thực"
                                color="#066435"
                                style={styles.button}
                            />
                            <Forgot isShow={showForgotScreen} onBack={() => setShowForgotScreen(false)} />
                        </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    OTP: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 48

    },
    otpNumber: {

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24

    },
    input: {
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 11,
        width: 48,
        height: 58,
        marginLeft: 11,
    },
    button : {
       
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       width: 335,
       height: 48,
       borderRadius: 10,
       borderWidth: 1,

       
    }
})
export default memo(Otp)