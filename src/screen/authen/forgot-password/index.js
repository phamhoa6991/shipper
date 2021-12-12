import React, { memo } from 'react'
import { Modal, Text, View, TextInput, StyleSheet, Button,Image } from 'react-native'
import Header from '../../../components/header'
import { text } from '../../../themes/text'
import { color } from '../../../themes/color'

const ic_lock = require('../../../../assets/img/ic_lock.png')
const forgot = (props) => {

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
                <Header title="Đổi mật khẩu" onBack={onBack} />
                <View style={{ backgroundColor: color.grey, padding: 16 }}>
                    <View style={styles.changePass}>
                        <Image source={ic_lock} />
                        <TextInput  placeholder='Mật khẩu mới' />
                    </View>
                   
                </View>
            </View>

        </Modal>
    )
}
const styles = StyleSheet.create({
    changePass:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        marginTop: 48

    }
})
export default memo(forgot)