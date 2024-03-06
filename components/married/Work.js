import React,{useState} from "react";
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View,Pressable, StatusBar} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {addPoints, refreshState} from './../../actions/pointsActions';
import {Picker} from '@react-native-picker/picker';

const refresh = require('../assets/rets.png')
const Work =({navigation}) => {
   const [pickerValue, setPickerValue] = useState('');

    const points = useSelector((state) => state.points.points);
    const dispatch = useDispatch();
  
      const handleAddPoints=itemValue =>{
         if (itemValue === '17') {
            dispatch(addPoints(0));
          } else if (itemValue === '18') {
            dispatch(addPoints(6));
          } else if (itemValue === '19') {
            dispatch(addPoints(8));
          } else if (itemValue === '20') {
            dispatch(addPoints(16));
          } else if (itemValue === '30') {
            dispatch(addPoints(22));
          } else if (itemValue === '31') {
            dispatch(addPoints(29));
          } else if (itemValue === '32') {
            dispatch(addPoints(32));
          } 
      }
      const handleAddPoint=()=>{
         dispatch(refreshState())
      }
    return(
        <SafeAreaView>
        <View
        style={{
          borderRadius: 10,
          margin: 10,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:10,
        }}>
        <Picker
           style={{width:343, height:40,    backgroundColor: '#BA181B',
           color: 'white', fontSize: 20, fontFamily:'Poppins-Regular' }}
          selectedValue={pickerValue}
          onValueChange={(itemValue, itemIndex) => {
            setPickerValue(itemValue);
            handleAddPoints(itemValue);
          }}
        dropdownIconColor="white" >
          <Picker.Item label="Canadian Language Benchmark " value="" />
          <Picker.Item label="Less than CLB 4" value="17" />
          <Picker.Item label="CLB 4 or 5" value="18" />
          <Picker.Item label="CLB 6" value="19" />
          <Picker.Item label="CLB 7" value="20" />
          <Picker.Item label="CLB 8" value="30" />
          <Picker.Item label="CLB 9" value="31" />
          <Picker.Item label="CLB 10 or more" value="32" />
        </Picker>
    </View>
</SafeAreaView>
    )
}
export default Work;
