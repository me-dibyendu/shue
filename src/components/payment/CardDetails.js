import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TextInput,
    ScrollView
} from 'react-native'

import Fontisto from 'react-native-vector-icons/Fontisto'
import Constants from '../../shared/Constants'

function CardDetails() {
    const [savedCard, setSavedcard] = useState(false)
    const savedCardDetails = ()=>{
        setSavedcard(!savedCard)
    }
    const payNow = () => {
        
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.heading}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
                    <Fontisto name='radio-btn-active' color={Constants.colors.primary} size={26} />
                    <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 17, color: Constants.colors.primary, marginLeft: 12, }}>Credit/Debit Card Details</Text>
                </View>
            </View>
            <View style={styles.card}>
                <TextInput name={'card_no'} placeholder="Card Number" style={styles.inputField} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TextInput name={'card_no'} placeholder="Expiry Date" style={[styles.inputField, {flex: 0.48}]} />
                    <TextInput name={'security_code'} secureTextEntry={true} placeholder="Security Code" style={[styles.inputField, {flex: 0.48}]} />
                </View>
                <TextInput name={'card_holder_name'} placeholder="Card Holder Name" style={styles.inputField} />
                <Pressable onPress={savedCardDetails} style={{flexDirection: 'row'}}>
                    {
                        savedCard?<Fontisto name='radio-btn-active' size={20} color={Constants.colors.primary} />:<Fontisto name='radio-btn-passive' size={20}  color={Constants.colors.primary} />
                    }
                    <Text style={{marginLeft: 12,}}>Save card for future payment</Text></Pressable>
                <Pressable onPress={payNow} style={[styles.button, { width: '100%', padding: 18, marginTop: 26, }]}>
                    <Text style={[styles.btnText, { fontSize: 24, }]}>Pay Now</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: Constants.padding,
        paddingRight: Constants.padding,
    },
    card: {
        padding: Constants.padding,
        paddingTop: 0,
        justifyContent: 'space-between',
        borderRadius: Constants.borderRadius,
        marginTop: 12,
    },
    dropPoint: {
        fontFamily: Constants.fontFamily.PoppinsMedium,
        fontSize: 16,
        color: Constants.colors.primary,
    },
    inputField: {
        padding: 10,
        borderWidth: 1,
        borderRadius: Constants.borderRadius,
        marginBottom: 16,
    },
    button: {
        padding: 10,
        backgroundColor: Constants.colors.primary,
        borderRadius: Constants.borderRadius,
        marginBottom: 12,
        marginTop: 12,
        alignSelf: 'center',
    },
    btnText: {
        fontFamily: Constants.fontFamily.PoppinsMedium,
        color: Constants.colors.white,
        alignSelf: 'center',
        fontSize: 18,
    },
})
export default CardDetails