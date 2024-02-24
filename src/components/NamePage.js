import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import ProfileIcon from '../Assets/images/profile.svg'

export default function NamePage({navigation}) {
	const [name,setName] = useState('')
	const Handlerequest = ()=> {
		if(name.length != 0) {
			navigation.navigate('PasswordPage');
		}
	}

  return (
    <SafeAreaView style={styles.container}>
		<View style={styles.imageContainer}>
			<Image style={styles.image} source={require('../Assets/images/name-page.jpg')} />
		</View>
		<View style={styles.mainTextContainer}>
            <Text style={styles.mainText}>Enter Your name</Text>
            <Text style={styles.secondaryText}>Enter your full name for your account.</Text>
        </View>
		<View style={styles.form}>
			<TextInput
			style={styles.formInput}
			placeholder='Enter Name'
			value={name}
            onChangeText={(text)=> setName(text)}
			/>
			<ProfileIcon style={styles.profileIcon}  height={18} />
		</View>
		<View style={{flex: 1,justifyContent: 'flex-end',marginBottom: 24,alignItems: 'center'}}>
			<TouchableOpacity onPress={Handlerequest} style={styles.button}>
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
  imageContainer: {
	paddingTop: 80,
	alignItems: 'center',
	justifyContent: 'center',
	marginBottom: 60,
},
image: {
	aspectRatio: 144/188,
	height: 140,
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
form: {
	marginTop: 18,
	alignItems: 'center',
	
},
formInput: {
	borderWidth: 1,
	width: '90%',
	borderColor: '#EAEAEA',
	borderRadius: 8,
	paddingLeft: 38,
	
},
profileIcon: {
	position: 'absolute',
	left: '7%',
	top: 16,
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
}
})