import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, } from 'react-native'
import React, { useEffect, useState } from 'react'


import VideoRender from './VideoRender'
import CompleteIcon from '../Assets/images/compleated.svg'
import CompleteIconWhite from '../Assets/images/compleated2.svg'
import PlayIconWhite from '../Assets/images/play1.svg'
import DropDownIcon from '../Assets/images/drop-down.svg'
import PlayIcon from '../Assets/images/play.svg'
import LockIcon from '../Assets/images/lock.svg'

export default function Study() {


	const [lessons,setLessons] = useState([
		{
			id:1,
			part:1,
			lock:false,
			name:'Indroduction',
			complete:true,
		},
		{
			id:2,
			part:1,
			lock:false,
			name:'fundamentals of maths',
			complete:false,
		},
		{
			id:3,
			part:1,
			lock:true,
			name:'calculs',
			complete:false,
		},
		{
			id:4,
			part:1,
			lock:true,
			name:'set theory',
			complete:false,
		},
		{
			id:5,
			part:1,
			lock:true,
			name:'functions',
			complete:false,
		},
		
		{
			id:6,
			part:2,
			lock:true,
			name:'Indroduction',
			complete:false,
		},
		{
			id:7,
			part:2,
			lock:true,
			name:'fundamentals of maths',
			complete:false,
		},
		{
			id:8,
			part:2,
			lock:true,
			name:'calculs',
			complete:false,
		},
		{
			id:9,
			part:2,
			lock:true,
			name:'set theory',
			complete:false,
		},
			{
			id:10,
			part:2,
			lock:true,
			name:'functions',
			complete:false,
		},
	])

	const [lessonPart,setLessonPart] = useState([1,2])
	const initialVisibility = new Array(lessons.length).fill(false) ;
  	const [boxesVisibility, setBoxesVisibility] = useState(initialVisibility);
	const [select,setSelect] = useState(2)


	const toggleBoxVisibility = (index) => {
		const updatedVisibility = [...boxesVisibility];
		updatedVisibility[index] = !updatedVisibility[index];
		setBoxesVisibility(updatedVisibility);
	};
	

	const renderIcons = (item,color)=> {
		if(item.complete == true) {
			if(color == true) {
				return  <CompleteIconWhite /> 
			}
			else {
				return <CompleteIcon />
			}
			
		}
		else if (item.lock == true) {
			return <LockIcon />
		}
		else {
			if(color == true) {
				return  <PlayIconWhite /> 
			}
			else {
				return <PlayIcon />
			}
		}
	}


	const source = require('../Assets/videos/5.mp4')
	const thumbnail = 'https://templates.simplified.co/thumb/444e5ae4-776c-4318-8a4d-566072d3083f.jpg'


	const lessonRender = ()=> {
		return lessonPart.map((item,index)=> (
			<View key={item}>
		<TouchableOpacity  style={styles.LessonButton} onPress={() => toggleBoxVisibility(index)} >
			<Text style={styles.LessonButtonText}>
				Lesson{item}
			</Text>
			<DropDownIcon height={15} fill={'#fff'}/>
		</TouchableOpacity>
			{boxesVisibility[index] ? renderSubject(item) : null}	
		</View>
		)) 
	};


	const renderSubject = (item) => {
		const renderItems = lessons.filter((newitem) => newitem.part == item)
		return renderItems.map((newitem)=> {
			if(newitem.id == select) {
				return (
					<TouchableOpacity key={newitem.id} style={[styles.subjectBox,{backgroundColor:'#726AEC'}]} onPress={()=> lessonChange(newitem)}>
				{renderIcons(newitem,color=true)}
				<Text style={[styles.subjectBoxText,{color:'#fff'}]}>{newitem.name}</Text>
				<Text style={[styles.subjectBoxTimeText,{color:'#fff'}]}>2:05</Text>
			</TouchableOpacity>
				)
			}
			else {
				return (
					<TouchableOpacity key={newitem.id} style={[styles.subjectBox,]} onPress={()=> lessonChange(newitem)} >
				{renderIcons(newitem,color=false)}
				<Text style={styles.subjectBoxText}>{newitem.name}</Text>
				<Text style={styles.subjectBoxTimeText}>2:05</Text>
			</TouchableOpacity>
				)
			}
				})
		
	};

	const lessonChange = (instance)=> {
		if(instance.lock == false ) {
			setSelect(instance.id)
		}
	};

	const markHandle = (id)=> {
		const updatedLessons = [...lessons];
		const currentLessonIndex = updatedLessons.findIndex(lesson => lesson.id === id);
		if (currentLessonIndex !== -1 && currentLessonIndex < updatedLessons.length - 1) {
			updatedLessons[currentLessonIndex].complete = true;
			updatedLessons[currentLessonIndex + 1].lock = false;
			setLessons(updatedLessons);
			if(id != lessons.length-1 ) {
				setSelect(select+1)
			}
		}
	}
  return (
	<>
    <SafeAreaView>
		<VideoRender source={source} thumbnail={thumbnail} />
		<View style={styles.topConatiner}>
			<View>
				<Text style={styles.topMainText}>Indroduction</Text>
				<Text style={styles.topSecondaryText}>Fundamentals of maths</Text>
			</View>
			<TouchableOpacity style={styles.markButton} onPress={()=> markHandle(select)}>
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