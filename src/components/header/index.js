import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { color } from '../../themes/color'
import { text } from '../../themes/text'
const ic_back = require('../../../assets/img/ic_back.png')
export default ((props) => {
    const onBack = () => {
        if (props.onBack) props.onBack()
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity style={{ flex: 1 }} onPress={onBack}>
                <Image source={ic_back} />
            </TouchableOpacity>
            <View style={{ flex: 3, alignItems: 'center' }}>
                <Text style={[text.blackBold18]}>{props.title}</Text>
            </View>
            <View style={{ flex: 1 }} />

        </View>
    )
})



const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.white,
        padding: 16,
        borderRadius: 10,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,},
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