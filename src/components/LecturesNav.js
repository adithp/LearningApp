import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Lectures from './Lectures';
import Ongoing from './Ongoing';
import Completed from './Completed';


export default function LecturesNav() {
	const MatTab = createMaterialTopTabNavigator();

  const [lectureData,setLectureData] = useState([
	{
		id:1,
		language:'Maths',
		completed:20,
		image: require("../Assets/images/maths.png"),
	},
	{
		id:2,
		language:'UIUX',
		completed:50,
		image: require("../Assets/images/ui-ux.png"),
	},
	{
		id:3,
		language:'3D Art',
		completed:25,
		image: require("../Assets/images/3d-art-illution-removebg-preview.png"),
	},
	{
		id:4,
		language:'History',
		completed:100,
		image: require("../Assets/images/history-removebg-preview.png"),
	},
	{
		id:5,
		language:'Python',
		completed:45,
		image: require("../Assets/images/derivation.png"),
	},
	{
		id:6,
		language:'Biology',
		completed:100,
		image: require("../Assets/images/biology-removebg-preview.png"),
	},
	{
		id:7,
		language:'Editing',
		completed:100,
		image: require("../Assets/images/photoshop.png"),
	}
  ])
  return (
		<MatTab.Navigator  
		screenOptions={{
			tabBarInactiveTintColor:'#000',
			tabBarIndicatorStyle:{backgroundColor: '#726AEC',},
			tabBarActiveTintColor: '#726AEC',
			tabBarLabelStyle: { fontSize: 13,textTransform:'capitalize',fontWeight:'500' },
			tabBarStyle: { backgroundColor:'' ,},
		  }}
		>
			<MatTab.Screen
			name="Lectures"
			component={Lectures}
			initialParams={{lectureData}}
			/>
			<MatTab.Screen
			name="Ongoing"
			component={Ongoing}
			initialParams={{lectureData}}
			/>
			<MatTab.Screen
			name="Completed"
			component={Completed}
			initialParams={{lectureData}}
			/>
		</MatTab.Navigator>
	  );
  
}


const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#fff',
  },
})