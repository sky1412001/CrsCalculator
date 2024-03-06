import React,{useState} from 'react';
import {SafeAreaView, Text, Pressable, View, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';
import {addPoints, refreshState} from './../../actions/pointsActions';

const Exps =()=>{
    const [pickerValue, setPickerValue] = useState('');
    const points = useSelector(state => state.points.points);
    const dispatch = useDispatch();
  
    const handleAddPoints = itemValue => {
      if (itemValue === '17') {
        dispatch(addPoints(0));
      } else if (itemValue === '18') {
        dispatch(addPoints(40));
      } else if (itemValue === '19') {
        dispatch(addPoints(53));
      } else if (itemValue === '20') {
        dispatch(addPoints(64));
      } else if (itemValue === '30') {
        dispatch(addPoints(72));
      } else if (itemValue === '31') {
        dispatch(addPoints(80));
      } 
  }
return(
    <SafeAreaView>
    <View
      style={{
        borderRadius: 10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
      
        margin: 10,
      }}>
      <Picker
        style={{
          width: 343,
          height: 40,
          backgroundColor: '#BA181B',
          color: 'white',
          fontSize: 20,
          fontFamily: 'Poppins-Regular',
        }}
        selectedValue={pickerValue}
        onValueChange={(itemValue, itemIndex) => {
          setPickerValue(itemValue);
          handleAddPoints(itemValue);
        }}
       >
        <Picker.Item label="Canadian work experience" value="" />
        <Picker.Item label="None or less than a year" value="17" />
        <Picker.Item label="1 year" value="18" />
        <Picker.Item label="2 years" value="19" />
        <Picker.Item label="3 years" value="20" />
        <Picker.Item label="4 years" value="30" />
        <Picker.Item label="5 years or more" value="31" />
      </Picker>
    </View>
  </SafeAreaView>

)
}

export default Exps;