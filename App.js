import { View, Text,Button } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MobNumber from './src/components/MobNumber'
import Otp from './src/components/Otp'
import PasswordPage from './src/components/PasswordPage';


export default function App() {

  const LoginStack = createNativeStackNavigator();

  return (
	
    <NavigationContainer>
		<LoginStack.Navigator>
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
					name="PasswordPage" 
					options={{headerShown:false,}} 
					component={PasswordPage} 
					/>		
            
		</LoginStack.Navigator>
    </NavigationContainer>
  )
}