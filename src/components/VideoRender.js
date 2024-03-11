import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, {  useRef, useState } from 'react'


import Video from 'react-native-video'


const windowWidth = Dimensions.get('window').width;


export default function VideoRender({source,thumbnail}) {

  

    const videoRef = useRef(null);
    const [liveTime,setLiveTime] = useState()
    const [totalTime,setTotalTime] = useState(0)
    const [play,setPlay] = useState(true)
    const [progress, setProgress] = useState(0);
    const [controlsVisible, setControlsVisible] = useState(true);
    
    
    const formatTime = (secs) => {
        const hrs = Math.floor(secs / 3600);
        const mins = Math.floor((secs - hrs * 3600) / 60);
        const secs2 = Math.floor(secs - hrs * 3600 - mins * 60);
    
        return `${hrs ? hrs + ':' : ''}${mins ? (mins < 10 ? '0' + mins : mins) : '00'}:${
          secs2 < 10 ? '0' + secs2 : secs2}`;
      };
    
    
    const toggleControls = () => {
        setControlsVisible(!controlsVisible);
      };
    
    const onVideoLoad = ({ duration }) => {
     setTotalTime(duration);
    };
    
    
    const handleProgress = (data) => {
        const { currentTime} = data;
        setLiveTime(currentTime)
        const progress = liveTime / totalTime;
        setProgress(progress);
      };
    const handlePlay = ()=> {
            setPlay(!play);
    }
    const Forwardhandle = ()=> {
        if (liveTime + 10 <= totalTime) {
            videoRef.current.seek(liveTime + 10);
          } else {
            videoRef.current.seek(totalTime);
          }
    };
    
    const Backwardhandle = ()=> {
        if (liveTime - 10 >= 0) {
            videoRef.current.seek(liveTime - 10);
          } else {
            videoRef.current.seek(0);
          }
    };
    
    
    const VideoControls = ({ progress })=> {
        if(controlsVisible == true) {
            return (
                <>
                <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:60,position:'absolute',top:90}}>
                <TouchableOpacity onPress={Backwardhandle}>
                    <Image style={{width:30,height:30}} source={require('../Assets/images/1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePlay}>
                    {
                        play ? (<Image style={{width:35,height:35}} source={require('../Assets/images/4.png')} /> ) : (<Image style={{width:35,height:35}} source={require('../Assets/images/3.png')} /> )
                    }
                
                </TouchableOpacity>
                <TouchableOpacity onPress={Forwardhandle}>
                <Image style={{width:30,height:30}} source={require('../Assets/images/2.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${progress * 100}%` }]}>
                    <View style={{width:10,height:10,borderRadius:5,backgroundColor:'#726AEC',marginTop:-4}}></View>
                </View>
                
              </View>
              <View style={{marginHorizontal: 25,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.progressTimeText}>{formatTime(liveTime)}</Text>
                <Text style={styles.progressTimeText}>{formatTime(totalTime)}</Text>
              </View>
             </>
            )
        }
    };

  return (
    <SafeAreaView>
    <TouchableOpacity onPress={toggleControls} activeOpacity={.7}>
    <View style={{ width: '100%',alignItems:'center' }}>
    <Video
        style={{ width: '100%',height:200, }}
        source={source}
        paused={play}
        ref={videoRef}
        onProgress={handleProgress}
        resizeMode="contain"
        onLoad={onVideoLoad}
        poster={thumbnail}
        posterResizeMode='cover'
   /> 
</View>
</TouchableOpacity>
<VideoControls progress={progress} />
</SafeAreaView>
  )
}


const styles = StyleSheet.create({
	video: {
		width:'100%',
		aspectRatio: 16/9
	  },
	  progressBarContainer: {
		width: windowWidth-50,
		height: 2,
		backgroundColor: '#fff',
		marginTop: -30,
		marginHorizontal: 25,
	  },
	  progressBar: {
		height: '150%',
		backgroundColor: '#726AEC',
		alignItems:'flex-end',
		
	  },
	  progressTimeText: {
		color:'#fff',
		fontSize:10,
	  }
	 
	  
  });