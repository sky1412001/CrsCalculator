import React,{useState} from 'react';
import {SafeAreaView, Text, Pressable, View, Image, ImageBackground} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';
import {addPoints, refreshState} from './../../actions/pointsActions';
const refresh = require('../../assets/rets.png');
const Exp = () => {
  const [pickerValue, setPickerValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('')
  const points = useSelector(state => state.points.points);
  const dispatch = useDispatch();

  const Speaking = [
    { label: 'Select...', value: 'Value 1' },
    { label: '10-12', value: 'Value 2' },
    { label: '9', value: 'Value 3' },
    { label: '8', value: 'Value 4' },
    { label: '7', value: 'Value 5' },
    { label: '6', value: 'Value 6' },
    { label: '5', value: 'Value 7' },
    { label: '4', value: 'Value 8' },
    { label: '3', value: 'Value 9' },
  ]

  const handleAddPoints = itemValue => {
    if (itemValue === '17') {
      dispatch(addPoints(0));
    } else if (itemValue === '18') {
      dispatch(addPoints(35));
    } else if (itemValue === '19') {
      dispatch(addPoints(46));
    } else if (itemValue === '20') {
      dispatch(addPoints(56));
    } else if (itemValue === '30') {
      dispatch(addPoints(63));
    } else if (itemValue === '31') {
      dispatch(addPoints(70));
    } 
  }
  const handleAddPoint = () => {
    dispatch(refreshState());
  };
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/header.png')}
        style={{height: 140, elevation: 10}}>
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
            CRS – A. Core
          </Text>
          <Pressable onPress={handleAddPoint}>
            <Image
              source={refresh}
              style={{width: 30, height: 30, marginTop: 10}}
            />
          </Pressable>
        </View>
        <View
          style={{
            width: 90,
            height: 90,
            backgroundColor: 'white',
            borderRadius: 50,
            alignSelf: 'center',
            borderWidth: 2,
            borderColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 30, color: 'black'}}>{points}</Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Raleway-ExtraBold',
              color: 'red',
              marginVertical: 20,
            }}>
            Which Language Test Did You take For Your First Offical Language
          </Text>
        </View>
      </ImageBackground>
      <View
         style={{
          borderRadius: 20,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 120,
          margin: 20,
          backgroundColor:'white',
          elevation:6,
          borderWidth:2,
          borderColor:'red'
        }}>
    
    <Picker
        padding={20}
        dropdownIconColor="red"
        style={{flex:1,width:343,height:40, 
        color: 'black', fontSize: 20,  }}
        selectedValue={pickerValue}
        onValueChange={(itemValue, itemIndex)=>{
        setPickerValue(itemValue);
        handleAddPoints(itemValue);
          }}
         >
          <Picker.Item label="Select" value="1"/>
          <Picker.Item label="CELPIP-G" value="2"/>
          <Picker.Item label="IELTS" value="3" />
          <Picker.Item label="TEF Canada" value="4" />
          <Picker.Item label="TCF Canada" value="5" />
        </Picker>
        </View>

        <Text>Speaking</Text>
        <Picker
        padding={20}
        dropdownIconColor="red"
        style={{flex:1,width:200,height:40, 
        color: 'black', fontSize: 20,backgroundColor:'white', borderRadius:10}}
        selectedValue={pickerValue}
        onValueChange={(itemValue, itemIndex)=>{
        setPickerValue(itemValue);
        handleAddPoints(itemValue);
          }}
         >
          {
            Speaking.map((item, index)=>
            <Picker.Item label={item.label} value={item.label}  key={index}/>
            )
          }
         
        </Picker>
    </SafeAreaView>
  );
};

export default Exp;
