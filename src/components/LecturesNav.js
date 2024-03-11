import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Lectures from './Lectures';
import Ongoing from './Ongoing';
import Completed from './Completed';
import Study from './Study';
import TopNav from './TopNav';


export default function LecturesNav() {
	
	const LectureStack = createNativeStackNavigator();
  
  return (
		<LectureStack.Navigator >
			<LectureStack.Screen 
					name="TopNav" 
					options={{title:"Today's lectures",
					headerTitleStyle: {
						fontSize:14,
						opacity:0.7
					  },headerStyle: {
						backgroundColor: '#efefef',
					  }}} 
					component={TopNav} 
					
				/>
			<LectureStack.Screen 
					name="Study" 
					options={{headerShown:false}} 
					component={Study} 
					
				/>	
		</LectureStack.Navigator>
	
  )
}

