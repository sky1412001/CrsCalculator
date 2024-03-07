import React,{useState} from "react";
import {SafeAreaView, Text, Pressable, View, Image, ImageBackground, StatusBar} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';
import {addPoints, refreshState} from './../../actions/pointsActions';
import StudyS from "./StudyS";
import WorkS from "./WorkS";
import Exps from "./Exps";
const refresh = require('../../assets/rets.png');

const Ages = () =>{
    const [pickerValue, setPickerValue] = useState('');
  const points = useSelector(state => state.points.points);
  const dispatch = useDispatch();
  const handleAddPoints = itemValue => {
    if (itemValue === '17') {
      dispatch(addPoints(0));
    } else if (itemValue === '18') {
      dispatch(addPoints(99));
    } else if (itemValue === '19') {
      dispatch(addPoints(105));
    } else if (itemValue === '20') {
      dispatch(addPoints(110));
    } else if (itemValue === '30') {
      dispatch(addPoints(105));
    } else if (itemValue === '31') {
      dispatch(addPoints(99));
    } else if (itemValue === '32') {
      dispatch(addPoints(94));
    } else if (itemValue === '33') {
      dispatch(addPoints(88));
    } else if (itemValue === '34') {
      dispatch(addPoints(83));
    } else if (itemValue === '35') {
      dispatch(addPoints(77));
    } else if (itemValue === '36') {
      dispatch(addPoints(72));
    } else if (itemValue === '37') {
      dispatch(addPoints(66));
    } else if (itemValue === '38') {
      dispatch(addPoints(61));
    } else if (itemValue === '39') {
      dispatch(addPoints(55));
    } else if (itemValue === '40') {
      dispatch(addPoints(50));
    } else if (itemValue === '41') {
      dispatch(addPoints(39));
    } else if (itemValue === '42') {
      dispatch(addPoints(28));
    } else if (itemValue === '43') {
      dispatch(addPoints(17));
    } else if (itemValue === '44') {
      dispatch(addPoints(6));
    } else {
      dispatch(addPoints(0));
    }
  };
  const handleAddPoint = () => {
    dispatch(refreshState());
  } 
    return(
        <View style={{ flex:1 }}>
          <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'}/>
        <ImageBackground source={require('../../assets/header.png')} style={{ height: 120}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Raleway-ExtraBold',
                fontSize: 20,
                color: 'white',
              }}>
             CRS – A. Core / human capital
            </Text>
            <Pressable onPress={handleAddPoint}>
              <Image source={refresh} style={{width: 30, height: 30, marginTop:10}} />
            </Pressable>
          </View>
          <View
            style={{
              width: 90,
              height: 90,
              backgroundColor: '#BFD7FF',
              borderRadius: 50,
              alignSelf: 'center',
              borderWidth: 2,
              borderColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 30}}>
              {points}
            </Text>      
        </View>
          </ImageBackground>
        <View
          style={{
            borderRadius: 10,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100,
            margin:20,
          }}>
          <Picker
             style={{width:343, height:40, backgroundColor: '#BA181B', color: 'white', fontSize: 20, fontWeight:'700', borderRadius:20 }}
            selectedValue={pickerValue}
            onValueChange={(itemValue, itemIndex) => {
              setPickerValue(itemValue);
              handleAddPoints(itemValue);
            }}
           >
            <Picker.Item label="Select your age" value="" />
            <Picker.Item label="0-17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20-29" value="20" />
            <Picker.Item label="31" value="31" />
            <Picker.Item label="32" value="32" />
            <Picker.Item label="33" value="33" />
            <Picker.Item label="34" value="34" />
            <Picker.Item label="35" value="35" />
            <Picker.Item label="36" value="36" />
            <Picker.Item label="37" value="37" />
            <Picker.Item label="38" value="38" />
            <Picker.Item label="39" value="39" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="41" value="41" />
            <Picker.Item label="42" value="42" />
            <Picker.Item label="43" value="43" />
            <Picker.Item label="44" value="44" />
            <Picker.Item label="45" value="45" />
          </Picker>
        </View>
      </View>

    )
}

export default Ages;