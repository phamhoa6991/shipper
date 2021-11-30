import React, { memo,useState } from 'react'
import {Modal,Text,View } from 'react-native'
import Otp from '../otp'
import {color} from '../../../themes/color'
const EnterPhone = (props) => {
    const [showOtpScreen,setShowOtpScreen] = useState(false)
    const onBack = () => {
        props?.onBack()
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props?.isShow}
        >
            <View style={{ backgroundColor: color.main, flex: 1 }}>
                <Text onPress={onBack}>Back</Text>
                <Text>EnterPhone</Text>


                <Text onPress={() => setShowOtpScreen(true)}>go to Otp</Text>
                <Otp isShow = {showOtpScreen} onBack={() => setShowOtpScreen(false)}/>
            </View>
        </Modal>
    )
}

export default memo(EnterPhone)