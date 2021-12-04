import React, { memo } from 'react'
import {Modal,Text,View } from 'react-native'

const Otp = (props) => {
    const onBack = () => {
        props?.onBack()
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props?.isShow}
        >
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Text onPress={onBack}>Back</Text>
                <Text>Otp</Text>

            </View>
        </Modal>
    )
}

export default memo(Otp)