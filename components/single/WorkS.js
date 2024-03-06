import React,{useState} from "react";
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View,Pressable} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {addPoints, refreshState} from './../../actions/pointsActions';
import {Picker} from '@react-native-picker/picker';

const WorkS =()=>{
    const [pickerValue, setPickerValue] = useState('');

    const points = useSelector((state) => state.points.points);
    const dispatch = useDispatch();
    const handleAddPoints=itemValue =>{
        if (itemValue === '17') {
           dispatch(addPoints(0));
         } else if (itemValue === '18') {
           dispatch(addPoints(6));
         } else if (itemValue === '19') {
           dispatch(addPoints(9));
         } else if (itemValue === '20') {
           dispatch(addPoints(17));
         } else if (itemValue === '30') {
           dispatch(addPoints(23));
         } else if (itemValue === '31') {
           dispatch(addPoints(31));
         } else if (itemValue === '32') {
           dispatch(addPoints(34));
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
         >
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

export default WorkS;