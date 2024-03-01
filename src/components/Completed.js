import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet  } from 'react-native'
import React from 'react'


export default function Completed({route}) {
  const {lectureData} = route.params;

  const renderItems = ()=> {
    
    return lectureData.map((item) => {
      if(item.completed == 100) {
        return (
          <TouchableOpacity key={item.id}>
            <View style={styles.lecturesContainer}>
				{item.completed == 100 ? (
                <View style={[styles.lectureImageContainer,{backgroundColor:'#62D0E9'}]}>
					<Image style={styles.lectureImage} source={item.image} />
				</View>): (
                    <View style={styles.lectureImageContainer}>
					<Image style={styles.lectureImage} source={item.image} />
				</View>
                )}
				<View style={{justifyContent:'center',marginRight:18,}}>
					<Text style={styles.subjectNameText}>{item.language}</Text>
					{item.completed == 100 ? <Text style={styles.completedText}>Finished</Text> : <Text style={styles.runningText}>Running...</Text> }
				</View>
				{item.completed == 100 ? (
                <View style={styles.lectureouterCircle} >
					<View style={[styles.lectureouterCircle,{backgroundColor:'#3ECD7A',width:'100%'}]}  ></View>
				</View>):(
                    <View style={styles.lectureouterCircle} >
					<View style={[styles.lectureouterCircle,{backgroundColor:'#726AEC',width:`${item.completed}%`}]}  ></View>
				</View>
                )}
			</View>
      </TouchableOpacity>
        )
      }
    })
  }
 
  return (
    <ScrollView>
      {renderItems()}
    </ScrollView>
  )
}


const styles = StyleSheet.create({
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
        
      },
      completedText: {
        fontSize:10,
        color:'#3ECD7A',
        fontWeight:'500'
      }
    
})