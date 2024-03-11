import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, } from 'react-native'
import React, { useEffect, useState } from 'react'


import VideoRender from './VideoRender'
import CompleteIcon from '../Assets/images/compleated.svg'
import DropDownIcon from '../Assets/images/drop-down.svg'
import PlayIcon from '../Assets/images/play.svg'
import LockIcon from '../Assets/images/lock.svg'

export default function Study() {


	

	

	const [lessons,setLessons] = useState([
		[
		{
			id:0,
			name:'Lesson 1',
			title:'Indroduction',
			complete:false,
			part: 1001,
		},
		{
			id:1,
			lock:false,
			name:'Indroduction',
			complete:true,
		},
		{
			id:2,
			lock:false,
			name:'fundamentals of maths',
			complete:false,
		},
		{
			id:3,
			lock:true,
			name:'calculs',
			complete:false,
		},
		{
			id:4,
			lock:true,
			name:'set theory',
			complete:false,
		},
		{
			id:5,
			lock:true,
			name:'functions',
			complete:false,
		},
		],
		[
		{
			id:6,
			lock:true,
			name:'Lesson 2',
			title:'Matrix',
			complete:false,
			part:1002,
		},

		{
			id:7,
			lock:true,
			name:'Indroduction',
			complete:false,
		},
		{
			id:8,
			lock:true,
			name:'fundamentals of maths',
			complete:false,
		},
		{
			id:9,
			lock:true,
			name:'calculs',
			complete:false,
		},
		{
			id:10,
			lock:true,
			name:'set theory',
			complete:false,
		},
		{
			id:11,
			lock:true,
			name:'functions',
			complete:false,
		},],	
	])
	const initialVisibility = new Array(lessons.length).fill(false) ;
  	const [boxesVisibility, setBoxesVisibility] = useState(initialVisibility);
	const [select,setSelect] = useState(2)
	const toggleBoxVisibility = (index) => {
		const updatedVisibility = [...boxesVisibility];
		updatedVisibility[index] = !updatedVisibility[index];
		setBoxesVisibility(updatedVisibility);
	};
	
	const renderIcons = (item)=> {
		if(item.complete == true) {
			return <CompleteIcon />
		}
		else if (item.lock == true) {
			return <LockIcon />
		}
		else {
			return  <PlayIcon /> 
		}
	}
	const source = require('../Assets/videos/5.mp4')
	const thumbnail = 'https://templates.simplified.co/thumb/444e5ae4-776c-4318-8a4d-566072d3083f.jpg'
	const lessonRender = ()=> {
		
		return lessons.map((item,index)=> (
			<View key={item[0].part}>
			<TouchableOpacity  style={styles.LessonButton} onPress={() => toggleBoxVisibility(index)} >
				<Text style={styles.LessonButtonText}>
					{item[0].name}
				</Text>
				<DropDownIcon height={15} />
			</TouchableOpacity>
				{boxesVisibility[index] ? renderSubject(item) : null}	
			</View>
		))
	};
	const renderSubject = (item) => {
		return item.slice(1).map((newitem,index)=> {
			if(newitem.id == select) {
				return (
					<TouchableOpacity key={newitem.id} style={[styles.subjectBox,{backgroundColor:'#726AEC'}]} >
				{renderIcons(newitem)}
				<Text style={[styles.subjectBoxText,{color:'#fff'}]}>{newitem.name}</Text>
				<Text style={[styles.subjectBoxTimeText,{color:'#fff'}]}>2:05</Text>
			</TouchableOpacity>
				)
			}
			else {
				return (
					<TouchableOpacity key={newitem.id} style={[styles.subjectBox,]} >
				{renderIcons(newitem)}
				<Text style={styles.subjectBoxText}>{newitem.name}</Text>
				<Text style={styles.subjectBoxTimeText}>2:05</Text>
			</TouchableOpacity>
				)
			}
		})
		
	};
  return (
	<>
    <SafeAreaView>
		<VideoRender source={source} thumbnail={thumbnail} />
		<View style={styles.topConatiner}>
			<View>
				<Text style={styles.topMainText}>Indroduction</Text>
				<Text style={styles.topSecondaryText}>Fundamentals of maths</Text>
			</View>
			<TouchableOpacity style={styles.markButton}>
				<CompleteIcon height={12} width={12} />
				<Text style={styles.markButtonText}>Mark as Completed</Text>
			</TouchableOpacity>
		</View>
	</SafeAreaView>
	<ScrollView style={{marginTop:16,marginHorizontal:12}}>
		{lessonRender()}
	</ScrollView>
</>
  )
}


const styles = StyleSheet.create({
	topConatiner: {
		flexDirection:'row',
		justifyContent:'space-between',
		marginHorizontal: 12,
		marginTop: 28,
	},
	topMainText: {
		fontSize: 14,
		fontWeight: '500',
		color:'#000'
	},
	topSecondaryText :{
		fontSize: 10,
	},
	markButton: {
		flexDirection: 'row',
		borderWidth:0.6,
		borderColor:'#726AEC',
		borderRadius: 4,
		alignItems:'center',
		paddingHorizontal:6,
	},
	markButtonText: {
		fontSize:11,
		marginLeft:8,
		color:'#726AEC',
		fontWeight:'400',
	},
	LessonButton: {
		flexDirection:'row',
		justifyContent:'space-between',
		backgroundColor:'#F8FAF6',
		marginBottom:12,
		paddingHorizontal:12,
		paddingVertical:12,
		borderWidth:1,
		borderColor:'#eee',
		borderRadius:6,
	},
	LessonButtonText: {
		fontSize:12,
		color:'#000',
		fontWeight:'500'
	},
	subjectBox: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		marginBottom: 12,
		flexDirection:'row',
		borderRadius:4,
	},
	subjectBoxText: {
		marginLeft:8,
		color:'#000',
		fontSize:12,
	},
	subjectBoxTimeText: {
		position:'absolute',
		right:12,
		top:6,
		fontSize:12
	}
})