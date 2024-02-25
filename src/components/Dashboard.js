import { View, Text, SafeAreaView,StyleSheet, Image } from 'react-native'
import React from 'react'

import NotficationIcon from '../Assets/images/notification.svg'



export default function Dashboard({route,navigation}) {
  const {name} = route.params;
  
  return (
    <SafeAreaView style={styles.container}>
		<View style={styles.topView}>
			<Image style={styles.profileImage} source={require('../Assets/images/person.jpg')} />
			<View style={styles.textContainer}>
				<Text style={styles.nameText} > 
					Hey, {name} 
				</Text>
				<Text style={styles.labelText}>
					let's get started
				</Text>
			</View>
			<View style={{justifyContent:'center'}}>
				<NotficationIcon style={{}} width={18} />
				<View style={styles.redCircle}></View>
			</View>
			
		</View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#fff',
  },
  topView: {
	flexDirection:'row',
	justifyContent:'space-between',
	paddingTop:18,
	paddingHorizontal:12,
  },
  profileImage: {
	width: 44,
	height: 44,
	borderRadius:22
  },
  textContainer: {
	position:'absolute',
	top:18,
	left:72,
	justifyContent:'center',
	height:44,
  },
  nameText: {
	fontSize:14,
	color:'#1B1C30',
	fontWeight:'500',
	marginBottom:2,
  },
  labelText:{
	fontSize:10,
  },
  redCircle:{
	width: 8,
	height:8,
	backgroundColor:'#DE3730',
	borderRadius:4,
	position:'absolute',
	top:15,
	right:1,

  }
})