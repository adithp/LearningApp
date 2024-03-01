import { View, Text, SafeAreaView,StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

import Carousel, { Pagination } from 'react-native-snap-carousel';

import NotficationIcon from '../Assets/images/notification.svg'
import WhitePlayIcon from '../Assets/images/white-play-button.svg'


export default function Dashboard({route,navigation}) {

	
	const [activeSlide,setActiveSlide] = useState()


const pagination = ()=> {
	
	return (
		<Pagination
			dotsLength={a.length}
			activeDotIndex={activeSlide}	
			containerStyle={styles.paginationContainer}
			dotStyle={{
				width: 20,
				height: 6,
				borderRadius: 5,
				backgroundColor: '#726AEC',
				
			}}
		  inactiveDotStyle={{
			  width:10,
			  height:10,
			  borderRadius:5,
			  
		  }}
		  inactiveDotOpacity={0.4}
		  inactiveDotScale={0.6}
		/>
	);
}

  const {name} = route.params;

  const a = [{id:1},{id:2},{id:3}]
  
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
		<ScrollView>
		<View style={{paddingHorizontal:14,marginTop:24,}}>
		<Carousel
					onSnapToItem={(index) => setActiveSlide(index) }
					data={a}
					itemWidth={Dimensions.get("screen").width-28}
					sliderWidth={Dimensions.get("screen").width-28}
					renderItem={({item, index}) => {
						return (
						<View style={styles.sliderContainer}>
							<View>
								<Text style={styles.sliderTopSmallText}>ongoing</Text>
								<Text style={styles.sliderMainText} >3D Art & Illustration</Text>
								<View style={styles.percentageContainer}>
									<Text style={styles.percentageText}>50%</Text>
									<View style={styles.outerCircle} >
										<View style={[styles.outerCircle,{backgroundColor:'#fff',width:'50%'}]}  ></View>
									</View>
								</View>
								<TouchableOpacity style={styles.buttonContinue}>
									<Text style={styles.buttonContinueText}>Continue</Text>
								</TouchableOpacity>
							</View>
							<Image style={styles.sliderImage} source={require('../Assets/images/3d-art-illution-removebg-preview.png')} />
						</View>
						)
					}}

				/>
		{pagination()}
		</View>
		<Text style={{fontSize:12,marginHorizontal:12,color:'#000',marginBottom:8,}}>Choose Your Course</Text>
		<View style={styles.centerContainer}>
			
			<View style={[styles.courseBoxes,{marginRight:8,}]}>
				<Text style={styles.courseMainText}>UI/UX Design</Text>
				<Text style={[styles.courselessText]}>03 Classes</Text>
				<View style={[styles.playIconStyle,{backgroundColor:'#8CADFF'}]}>
					<WhitePlayIcon />
				</View>
				<Image style={styles.courseImage} source={require('../Assets/images/ui-ux.png')} />
			</View>
			<View style={[styles.courseBoxes,{backgroundColor:'#62D0E9'}]}>
				<Text style={styles.courseMainText}>Derivation</Text>
				<Text style={[styles.courselessText]}>05 Classes</Text>
				<View style={[styles.playIconStyle,{backgroundColor:'#8CF9FD'}]}>
					<WhitePlayIcon />
				</View>
				<Image style={styles.courseImage} source={require('../Assets/images/derivation.png')} />
			</View>
			<View style={[styles.courseBoxes,{backgroundColor:'#63B0E8',marginRight:8,}]}>
				<Text style={styles.courseMainText}>Photoshop</Text>
				<Text style={[styles.courselessText]}>08 Classes</Text>
				<View style={[styles.playIconStyle,{backgroundColor:'#8DD6FF'}]}>
					<WhitePlayIcon />
				</View>
				<Image style={styles.courseImage} source={require('../Assets/images/photoshop.png')} />
			</View>
			<View style={[styles.courseBoxes,{backgroundColor:'#FE6F99'}]}>
				<Text style={styles.courseMainText}>Business</Text>
				<Text style={[styles.courselessText]}>03 Classes</Text>
				<View style={[styles.playIconStyle,{backgroundColor:'#FABFD0'}]}>
					<WhitePlayIcon />
				</View>
				<Image style={styles.courseImage} source={require('../Assets/images/bussiness.png')} />
			</View>
		</View>
		<View>
			<Text style={{fontSize:12,marginHorizontal:12,color:'#000',marginVertical:8,}}>Today's Lecture</Text>
			<View style={styles.lecturesContainer}>
				<View style={styles.lectureImageContainer}>
					<Image style={styles.lectureImage} source={require('../Assets/images/maths.png')} />
				</View>
				<View style={{justifyContent:'center',marginRight:18,}}>
					<Text style={styles.subjectNameText}>Maths</Text>
					<Text style={styles.runningText}>Running...</Text>
				</View>
				<View style={styles.lectureouterCircle} >
					<View style={[styles.lectureouterCircle,{backgroundColor:'#726AEC',width:'20%'}]}  ></View>
				</View>
			</View>
		</View>
		</ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#F5F7FB',
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

  },
  sliderTopSmallText: {
	color:'#fff',
	fontSize:12,
	marginBottom:12,
	opacity:0.9
	
  },
  sliderImage: {
	width:120,
	height:120
  },
  sliderContainer:{
	backgroundColor:'#726AEC',
	padding:16,
	flexDirection:'row',
	justifyContent:'space-between',
	borderRadius:24,
  },
  sliderMainText:{
	fontSize:15,
	color:'#fff',
	marginBottom: 4,
  },
  percentageContainer: {
	flexDirection:'row',
	alignItems:'center',
	marginBottom:14,
  },
  percentageText:{
	color:'#fff',
	fontSize:12,
	marginRight:8,
	opacity:0.8,
  },
  outerCircle: {
	backgroundColor:'#8689F2',
	width: 100,
	height: 6,
	borderRadius: 8,
  },
  buttonContinue: {
	backgroundColor:'#8689F2',
	width:90,
	paddingVertical:7,
	justifyContent:'center',
	alignItems:'center',
	borderRadius: 12,
  },
  buttonContinueText:{
	color:'#fff',
	fontSize:12,
  },
  paginationContainer: {
	paddingTop: 8,
	backgroundColor:'#F5F7FB'
  },
  centerContainer: {
	flexDirection:'row',
	flexWrap:'wrap',
	paddingHorizontal:12,
  },
  courseBoxes: {
	width:'48%',
	backgroundColor:'#726AEC',
	marginBottom:8,
	padding:10,
	borderRadius:10,
  },
  courseImage: {
	height: 50,
	width: 50,
  },
  courseMainText: {
	color:'#fff',
	fontWeight:'500',
	fontSize: 14,
	marginBottom:4,
  },
  courselessText: {
	fontSize:10,
	color:'#fff',
	opacity:0.7,
	marginBottom:18,
  },
  playIconStyle: {
	width: 30,
	height: 30,
	borderRadius: 8,
	justifyContent:'center',
	alignItems:'center'
  },
  courseImage: {
	position:'absolute',
	width: 60,
	height: 60,
	right: 8,
	bottom: 8,
  },
  lecturesContainer: {
	marginHorizontal: 12,
	flexDirection:'row',
	marginVertical:8,
	backgroundColor:'#fff', 
	borderRadius:8,
	padding:12,
	alignItems:'center'
  },
  lectureImage: {
	width: 40,
	height: 40,
  },
  lectureImageContainer: {
	width: 52,
	height: 52,
	backgroundColor:'#726AEC',
	justifyContent:'center',
	alignItems:'center',
	borderRadius:8,
	marginRight:12,
  },
  subjectNameText: {
	color:'#000',
	fontWeight:'500',
	fontSize:14,
	marginBottom:6,
	
  },
  runningText: {
	fontSize:10,
	color:'#726AEC',
	fontWeight:'500'
  },
  lectureouterCircle: {
	backgroundColor:'#D9E5FC',
	flex:1,
	height: 6,
	borderRadius: 8,
	
  }

})