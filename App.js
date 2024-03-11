import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MobNumber from './src/components/MobNumber'
import Otp from './src/components/Otp'
import PasswordPage from './src/components/PasswordPage';
import NamePage from './src/components/NamePage';




import BottomTabNavigation from './src/components/BottomTabNavigation';
import Study from './src/components/Study';


export default function App() {

	const Tab = createBottomTabNavigator();
  const LoginStack = createNativeStackNavigator();

 

  return (
	
    <NavigationContainer>
		
		<LoginStack.Navigator initialRouteName='BottomTabHome' >
			<LoginStack.Screen 
					name="MobNumber" 
					options={{headerShown:false,}} 
					component={MobNumber} 
				/>
			<LoginStack.Screen 
					name="Otp" 
					options={{headerShown:false,}} 
					component={Otp} 
					/>
			<LoginStack.Screen 
					name="NamePage" 
					options={{headerShown:false,}} 
					component={NamePage} 
					/>		
			<LoginStack.Screen 
					name="PasswordPage" 
					options={{headerShown:false,}} 
					component={PasswordPage} 
					/>	
			<LoginStack.Screen 
					name="BottomTabHome" 
					options={{headerShown:false,}} 
					component={BottomTabNavigation} 
					/>	
					
			
            
		</LoginStack.Navigator>
    </NavigationContainer>
  )
}