import { View, Text,StyleSheet,SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


import LockIcon from '../Assets/images/password-lock.svg'
import EyeIcon from '../Assets/images/dont-view.svg'

export default function PasswordPage({route,navigation}) {
    const {name} = route.params;
    const [validater,setValidater] = useState(false)
    const [validater1,setValidater1] = useState(false)
    const [validater2,setValidater2] = useState(false)
    const [validater3,setValidater3] = useState(false)
    const [validater4,setValidater4] = useState(false)

    const [message,setMessage] = useState("")
    const [password,setPassword] = useState('')

    const Handlerequest = ()=> {
		if(validater == true && validater1 == true && validater2 == true && validater3 == true && validater4 == true  ) {
            setMessage("")
            navigation.navigate('BottomTabHome',{name});
        }
        else {
            setMessage("Password does not meet requirements.")
        }
	}


    const handlePasswordChange = (text)=> {
        passwordValidater(text)
        setPassword(text)
    }
    const passwordValidater =(text)=> {
        if(text.length >= 8 ) {
            setValidater(true)
        }
        else {
            setValidater(false)
        }
        if(!/[a-z]/.test(text) ) {
            setValidater1(false)
        }
        else {
            setValidater1(true)
        }
        if(!/[A-Z]/.test(text) ) {
            setValidater2(false)
        }
        else {
            setValidater2(true)
        }
        if(!/\d/.test(text) ) {
            setValidater3(false)
        }
        else {
            setValidater3(true)
        }
        if(!/[$@#%!*?&]/.test(text) ) {
            setValidater4(false)
        }
        else {
            setValidater4(true)
        }
    }


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.imageContaioner}>
            <Image style={styles.image} source={require('../Assets/images/password-page.jpg')} />
        </View>
        <View style={styles.mainTextContainer}>
            <Text style={styles.mainText}>Set a Strong Password</Text>
            <Text style={styles.secondaryText}>Set a strong password for your account.</Text>
        </View>
        <View style={{alignItems:'center',marginBottom:12,}}>
            <LockIcon style={styles.lockIcon}  height={18}  />
            <EyeIcon style={styles.eyeIcon}  height={20}  />
            <TextInput
                secureTextEntry={true} 
                style={styles.formInput}
                value={password}
                onChangeText={handlePasswordChange}
                />
            {message ? <Text style={{marginLeft:'5%',color:'red',fontSize: 12,alignSelf:'flex-start',marginTop: 4,fontWeight:'500',opacity:0.8}}>{message}</Text> : null }
        </View>
        <View style={styles.requirementsContainer}>
           {
            validater ? 
                (<View style={styles.requirementsStyle}>
                <View style={styles.circle}>
                    <View style={styles.circleInside}></View>
                </View>
                <Text style={styles.requireText}>Should contain at least 8 characters</Text>
                </View>) 
            : (<View style={styles.requirementsStyle}>
                <View style={[styles.circle,styles.circleFalse]}>
                    
                </View>
                <Text style={[styles.requireText,styles.requireTextFalse]}>Should contain at least 8 characters</Text>
            </View>)
           }
           {
            validater1 ? 
                (<View style={styles.requirementsStyle}>
                <View style={styles.circle}>
                    <View style={styles.circleInside}></View>
                </View>
                <Text style={styles.requireText}>Should contain a lowercase (small) letter (a -z)</Text>
                </View>) 
            : (<View style={styles.requirementsStyle}>
                <View style={[styles.circle,styles.circleFalse]}>
                    
                </View>
                <Text style={[styles.requireText,styles.requireTextFalse]}>Should contain a lowercase (small) letter (a -z)</Text>
            </View>)
           }
           {
            validater2 ? 
                (<View style={styles.requirementsStyle}>
                <View style={styles.circle}>
                    <View style={styles.circleInside}></View>
                </View>
                <Text style={styles.requireText}>Should contain a uppercase (capital) letter (A - Z)</Text>
                </View>) 
            : (<View style={styles.requirementsStyle}>
                <View style={[styles.circle,styles.circleFalse]}>
                    
                </View>
                <Text style={[styles.requireText,styles.requireTextFalse]}>Should contain a uppercase (capital) letter (A - Z)</Text>
            </View>)
           }
           {
            validater3 ? 
                (<View style={styles.requirementsStyle}>
                <View style={styles.circle}>
                    <View style={styles.circleInside}></View>
                </View>
                <Text style={styles.requireText}>Should contain at least one number (0-9)</Text>
                </View>) 
            : (<View style={styles.requirementsStyle}>
                <View style={[styles.circle,styles.circleFalse]}>
                    
                </View>
                <Text style={[styles.requireText,styles.requireTextFalse]}>Should contain at least one number (0-9)</Text>
            </View>)
           }
           {
            validater4 ? 
                (<View style={styles.requirementsStyle}>
                <View style={styles.circle}>
                    <View style={styles.circleInside}></View>
                </View>
                <Text style={styles.requireText}>Should contain at least one symbol ($,@,#,%,!,*,?,&)</Text>
                </View>) 
            : (<View style={styles.requirementsStyle}>
                <View style={[styles.circle,styles.circleFalse]}>
                    
                </View>
                <Text style={[styles.requireText,styles.requireTextFalse]}>Should contain at least one symbol ($,@,#,%,!,*,?,&)</Text>
            </View>)
           }
        </View>
        <View style={{flex: 1,justifyContent: 'flex-end',marginBottom: 24,alignItems: 'center'}}>
			<TouchableOpacity onPress={Handlerequest}  style={styles.button}>
				<Text style={styles.buttonText} >Submit</Text>
			</TouchableOpacity>
		</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff'
    },
    imageContaioner: {
        paddingVertical: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        aspectRatio: 238/109,
        height: 70,
    },
    mainTextContainer: {
        alignItems: 'center'
    },
    mainText: {
        fontSize: 26,
        color: '#212236',
        fontWeight: '500',
        marginBottom: 8,
    },
    secondaryText: {
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#726AEC',
        width: '90%',
        paddingVertical: 12,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 6,
    
    },
    buttonText: {
        color: '#fff',
        fontWeight: '400'
    },
    formInput: {
        borderWidth: 1,
        width: '90%',
        borderColor: '#EAEAEA',
        borderRadius: 8,
        paddingLeft: 38,
        
    },
    lockIcon: {
        position:'absolute',
        left:'8%',
        top: 18,
    },
    eyeIcon: {
        position:'absolute',
        right:'8%',
        top: 16,
    },
    requirementsContainer: {
        marginLeft: '5%',
        marginTop: 8,
    },
    requirementsStyle: {
        marginBottom: 12,
        flexDirection:'row'
    },
    circle: {
        borderWidth: 1,
        borderColor:'#726AEC',
        width: 16,
        height: 16,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:8,
        marginRight:4,
    },
    circleInside: {
        backgroundColor:'#726AEC',
        width: 8,
        height: 8,
        borderRadius:4,
    },
    requireText: {
        fontSize: 12,
        color:'#726AEC'
    },
    circleFalse: {
        borderColor:'#A6A5A5',
        borderWidth: 1,
    },
    requireTextFalse: {
        color:'#A6A5A5'
    }
   
    })