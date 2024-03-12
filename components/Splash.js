import React, { useEffect } from "react";
import { Image, ImageBackground, View } from "react-native";

const Splash = ({navigation}) =>{

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')
        }, 3500)
    },[])
    return(
       <ImageBackground source={require('.././assets/spl.png')} style={{flex:1}}>
       </ImageBackground>
    )
}
export default Splash;