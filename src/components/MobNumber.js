import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image, SafeAreaView } from 'react-native';

import DropDownIcon from '../Assets/images/drop-down.svg'
import PhoneIcon from '../Assets/images/phone.svg'


export default function MobNumber({navigation}) {

    const [message,setMessage] = useState('')
    const [signUpCheck, setSignUpCheck] = useState(true)
    const [phoneNumber, setPhoneNumber] = useState('+91');
    const handlePhoneNumberChange = (text) => {
        setPhoneNumber(text);
    };

    const handleLogin = ()=> {
      
      if(phoneNumber.length === 13 && phoneNumber.substring(0,3) === '+91' ) {
        setMessage('')
        navigation.navigate('Otp',{phoneNumber});
        
      }
      else {
        setMessage('Enter a valid number')
      }
      
    }


 
  return (
    <SafeAreaView style={{backgroundColor: '#fff',flex: 1,}}>
    <View style={styles.container}>
        <View style={styles.topImageContainer}>
            <Image style={styles.topImage} source={require('../Assets/images/login-page.jpg')} />
        </View>
        <View style={styles.header}>
            <Text style={styles.title}>Login to your account</Text>
            <Text style={{opacity:0.7,marginTop: 18,fontSize: 14,}}>Login with your phone number</Text>
        </View>
      <View style={styles.form}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop: 12,}}>
                <Image style={{width:70,aspectRatio:93/89,marginBottom:18,}} source={require('../Assets/images/flag.png')} />
                <DropDownIcon width={10} style={{marginLeft:-14,marginBottom: 12,}} />
            </View>
            <PhoneIcon  height={26} style={styles.phoneIconstyle} />
            <TextInput
            style={styles.input}
            maxLength={13}
            
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            />
            
        </View>
        {message ? <Text style={{color:'red',textAlign:'center',marginTop: -12,marginBottom: 12,}}>{message}</Text> : null }
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>{signUpCheck ? "Join in now " : "Sign in now"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          don't have an account?{' '} </Text>
          <TouchableOpacity onPress={()=> setSignUpCheck(!signUpCheck)} >
            <Text style={styles.link}>{signUpCheck ? "Create an Account" : "Sign in Account"}</Text>
          </TouchableOpacity>
       
      </View>
    </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    ccontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',  
      },   
      topImageContainer: {
        alignItems: 'center',
        marginVertical: 44,
      },
      topImage: {
       width: 170,
       height: 170,
       aspectRatio:225/238,
      },
      header: {       
        alignItems:'center'
      },   
      title: {   
        fontSize: 24,  
        fontWeight: '500',   
        color: '#333',   
      },   
      form: {    
         width: '100%'
      },  
      input: {  
        marginLeft:-18,
        height: 48,   
        borderColor: '#726AEC',
        borderWidth: 1, 
        borderRadius: 8,   
        paddingHorizontal: 16,   
        maxWidth: 280,
        width: '75%',
        paddingLeft:38,
        color: '#000',
        fontWeight: '700',
        
        
    }, 
    phoneIconstyle: {
        position:'absoulte',
        top: 0,
        left: 26,
        
    },
      button: {   
        backgroundColor: '#726AEC',   
        borderRadius: 4,   
        paddingVertical: 12,    
        paddingHorizontal: 16,  
        marginHorizontal: 12,
        alignItems:'center' 
      },   
      buttonText: {   
        color: '#fff',   
        fontSize: 16,   
        fontWeight: 'bold',   
      },    
      footer: {  
        marginTop: 32,  
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center'
      },   
      footerText: {  
        fontSize: 14,   
        color: '#666', 
        
      },  
      link: {   
        fontSize: 14, 
        fontWeight: 'bold',  
        color: '#726AEC', 
        marginLeft: -5,
      },
  });