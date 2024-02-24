import { View, Text, SafeAreaView, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

export default function Otp({route,navigation}) {
    const [message,setMessage] = useState('')

    const [counter, setCounter] = useState(30);
    const {phoneNumber} = route.params;
    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
        });
    
        
    useEffect(()=>{
        const timer = counter > 0 && setInterval(()=> setCounter(counter -1 ), 1000);
        return () => clearInterval(timer);
    },[counter]);

    const otpHandlerequest = ()=> {
        if(value.length === 4) {
            setMessage('')
            navigation.navigate('NamePage')
        }
        else {
            setMessage('Enter a valid Otp')
          }
    }
    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topImageConatiner}>
            <Image style={styles.topImage} source={require('../Assets/images/otp-page.jpg')} />
        </View>
        <View style={styles.textConatiner} >
            <Text style={styles.mainText}>Verify OTP</Text>
            <Text style={styles.describeText}>Please enter 4 digit verfication code that is send to you at  <Text style={styles.numberText}>{phoneNumber}</Text> </Text>
        </View>
        <View style={styles.otpFieldContainer}>
            <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
            <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor/> : null)}
            </Text>
            )}
        />
         
        <Text style={styles.reSnetText} >Don't receive code? {counter === 0 ? <TouchableOpacity   onPress={()=> setCounter(30)}><Text style={styles.timerText} >Retry</Text></TouchableOpacity> : <Text style={[styles.timerText]} >{counter}</Text> }</Text>
        <TouchableOpacity onPress={otpHandlerequest} style={styles.button}>
            <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
      {message ? <Text style={{color:'red',textAlign:'center',marginTop: 12,}}>{message}</Text> : null }
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingVertical: 70,
        backgroundColor: '#fff',
    },
    topImageConatiner: {
        alignItems: 'center',
        marginBottom: 40,
    },
    topImage: {
        aspectRatio:236/143,
        height: 110
    },
    textConatiner: {
        alignItems:'center',
        paddingHorizontal: 26,
        
    },
    mainText: {
        fontSize: 26,
        color: "#1B1C30",
        fontWeight: '500',
        marginBottom:18,
    },
    describeText:{
        textAlign:'center',
        fontSize: 14,
        color: '#A6A5A5',
        lineHeight: 20,
    },
    numberText: {
        color: '#726AEC',
        fontWeight: '500'
    },
    otpFieldContainer: {
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    codeFieldRoot: {
        marginTop: 30,
        width: '90%',
        
    },
    cell: {
        width: 50,
        height: 50,
        lineHeight: 50,
        fontSize: 24,
        borderWidth: 1,
        borderColor: '#A6A5A5',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        color: '#1B1C30'
    },
    focusCell: {
        borderColor: '#000',
    },
    reSnetText: {
        alignSelf:'flex-end',
        marginRight: 22,
        marginTop: 10,
        fontSize: 11,
        color: '#1B1C30',
        marginBottom: 18,
    },
    timerText: {
        color: '#726AEC'
    },
    button:{
        marginTop: 6,
        backgroundColor: '#726AEC',
        width: '90%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    buttonText: {
        color: '#fff'
    }
    

})