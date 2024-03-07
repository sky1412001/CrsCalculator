import React,{useState} from 'react';
import {SafeAreaView, Text, Pressable, View, Image, ImageBackground} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';
import {addPoints, refreshState} from './../../actions/pointsActions';
const refresh = require('../../assets/rets.png');
const Exp = ({navigation}) => {
  const [pickerValue, setPickerValue] = useState('');
  const points = useSelector(state => state.points.points);
  const dispatch = useDispatch();


  const handleAddPoints = itemValue => {
    if (itemValue === '0') {
      dispatch(addPoints(0));
    } else if (itemValue === '1') {
      navigation.navigate('Celpip')
    } else if (itemValue === '2') {
      navigation.navigate('Ielts')
    } else if (itemValue === '3') {
      navigation.navigate('Tef')
    } else if (itemValue === '4') {
      navigation.navigate('Tcf')
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
          <Picker.Item label="Select" value="0"/>
          <Picker.Item label="CELPIP-G" value="1"/>
          <Picker.Item label="IELTS" value="2"/>
          <Picker.Item label="TEF Canada" value="3" />
          <Picker.Item label="TCF Canada" value="4" />
        </Picker>
        </View>

        
       
    </SafeAreaView>
  );
};

export default Exp;
