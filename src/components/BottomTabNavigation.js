import { View, Text } from 'react-native'
import React from 'react'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Dashboard from './Dashboard';
import LecturesNav from './LecturesNav';
import ProfilePage from './ProfilePage';


import HomeFcousIcon from '../Assets/images/Home b.svg'
import HomeUnfcousIcon from '../Assets/images/Home g.svg'
import LecturesFocusIcon from '../Assets/images/class-dark.svg'
import LecturesUnfocusIcon from '../Assets/images/class-light.svg'
import ProfileFocusIcon from '../Assets/images/profileIcon1.svg'
import ProfileUnfocusIcon from '../Assets/images/profileIcon.svg'


export default function BottomTabNavigation({route,navigation}) {
    const name = "Adith Kandoth"
    

    const Tab = createBottomTabNavigator();

  return (
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
				else if (route.name === 'LecturesNav'){
                       
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
            initialParams={{name}} 
			name="DashboardTabs"                                       
			component={Dashboard} 			
			options={{headerShown:false,}} 
			/>
		<Tab.Screen  
			name="LecturesNav"                                       
			component={LecturesNav} 
			options={{title:"Today's lectures",headerTitleStyle: {
				fontSize:14,
				opacity:0.7
			  },headerStyle: {
				backgroundColor: '#efefef',
				
			  }}}
			/>
		<Tab.Screen  
			name="ProfilePage"                                       
			component={ProfilePage} 
			options={{headerShown:false,}} 
			/>
	
	</Tab.Navigator>
)
  
}