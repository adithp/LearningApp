import { View, Text,Button } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MobNumber from './src/components/MobNumber'
import Otp from './src/components/Otp'
import PasswordPage from './src/components/PasswordPage';
import NamePage from './src/components/NamePage';
import Dashboard from './src/components/Dashboard';
import Test from './src/components/Test';


export default function App() {

	const Tab = createBottomTabNavigator();
  const LoginStack = createNativeStackNavigator();

  const  HomeTabs = () => (
	<Tab.Navigator> 
		<Tab.Screen  
			name="DashboardTabs"                                       
			component={Dashboard} 			
			options={{headerShown:false,}} 
			/>
		<Tab.Screen  
			name="Test"                                       
			component={Test} 
			options={{headerShown:false,}} 
			/>
	
	</Tab.Navigator>
)


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
					name="Dashboard" 
					options={{headerShown:false,}} 
					component={HomeTabs} 
					/>	
			
            
		</LoginStack.Navigator>
    </NavigationContainer>
  )
}