import React, { memo } from 'react'
import { Modal, Text, View } from 'react-native'
import Header from '../../../components/header'

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
                {/* <Text onPress={onBack}>Back</Text>
                <Text>Otp</Text> */}
                <Header title="Mã xác nhận" onBack={onBack} />
            </View>
        </Modal>
    )
}

export default memo(Otp)