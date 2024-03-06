import React from "react";
import { View , Text, StatusBar} from "react-native";


const Error = () =>{
    return(
     
        <View style={{ alignItems:"center", justifyContent:"center"}}>
            <StatusBar backgroundColor={'red'}/>
            <View  style={{backgroundColor:'red', opacity:0.5,alignContent:'center', marginVertical:250, padding:20, elevation:10, borderRadius:15, margin:10}}>
                <Text style={{textAlign:"center", fontFamily:'Raleway-Bold', color:"black"}}>Sorry!</Text>
        <Text style={{opacity:3, color:'black'}}>Based on your answers, you do not appear to be eligible for Express Entry at this time.
        To submit an Express Entry profile, you must prove your language skills by taking an approved language test. Find out more about language testing for Express Entry.</Text>
        </View>
            </View>
    )
  }
  export default Error;