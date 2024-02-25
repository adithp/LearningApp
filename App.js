import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MobNumber from './src/components/MobNumber'
import Otp from './src/components/Otp'
import PasswordPage from './src/components/PasswordPage';
import NamePage from './src/components/NamePage';
import Dashboard from './src/components/Dashboard';
import Lectures from './src/components/Lectures';
import ProfilePage from './src/components/ProfilePage';


import HomeFcousIcon from './src/Assets/images/Home b.svg'
import HomeUnfcousIcon from './src/Assets/images/Home g.svg'
import LecturesFocusIcon from './src/Assets/images/class-dark.svg'
import LecturesUnfocusIcon from './src/Assets/images/class-light.svg'
import ProfileFocusIcon from './src/Assets/images/profileIcon1.svg'
import ProfileUnfocusIcon from './src/Assets/images/profileIcon.svg'


export default function App() {

	const Tab = createBottomTabNavigator();
  const LoginStack = createNativeStackNavigator();

  const  HomeTabs = () => (
	<Tab.Navigator
		screenOptions={({route}) => ({
			tabBarShowLabel: false,
			tabBarStyle: { 
				backgroundColor: '#fff',
				borderTopLeftRadius: 30,
				borderTopRightRadius: 30,
				  },
				  
			tabBarIcon: ({focused}) => {
				if(route.name === 'DashboardTabs') {
					if(focused == true) {
						return <HomeFcousIcon />
					}
					else {
						return <HomeUnfcousIcon />
					}
				}
				else if (route.name === 'Lectures'){
                       
					if(focused == true) {
						return <LecturesFocusIcon />
					}
					else {
						return <LecturesUnfocusIcon />
					}
				   
				}
				else if (route.name === 'ProfilePage'){
				   
					if(focused == true) {
						return <ProfileFocusIcon />
					}
					else {
						return <ProfileUnfocusIcon />
					}
			}
		}
		})}
		> 
		<Tab.Screen  
			name="DashboardTabs"                                       
			component={Dashboard} 			
			options={{headerShown:false,}} 
			/>
		<Tab.Screen  
			name="Lectures"                                       
			component={Lectures} 
			options={{headerShown:false,}} 
			/>
		<Tab.Screen  
			name="ProfilePage"                                       
			component={ProfilePage} 
			options={{headerShown:false,}} 
			/>
	
	</Tab.Navigator>
)


  return (
	
    <NavigationContainer>
		
		<LoginStack.Navigator >
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