import React, {useState} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Pressable,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';
import {addPoints, refreshState} from './../../actions/pointsActions';
import { Tcf } from '.';

const refresh = require('../../assets/rets.png');
const Second = ({navigation}) => {
  const [pickerValue, setPickerValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const[listening, setListening] = useState('')
  const[speaking, setSpeaking] = useState('')
  const[reading, setReading] = useState('')
  const[writing, setWriting] = useState('')
  const[secondPicker, setSecondPicker] = useState(false)
  const points = useSelector(state => state.points.points);
  const dispatch = useDispatch();

  const handleAddPoints = itemValue => {
    if (itemValue === '0') {
      navigation.navigate("Work")
    } else if (itemValue === 'tcf') {
      setShowPicker(true);
    } else if (itemValue === 'tef') {
      setSecondPicker(true)
    }
  };
  const handleAddPoint = () => {
    dispatch(refreshState());
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <ImageBackground source={require('../../assets/backg.png')} style={{flex:1}}>
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
            Enter Your Score
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
          backgroundColor: 'white',
          elevation: 6,
          borderWidth: 2,
          borderColor: 'red',
        }}>
        <Picker
          padding={20}
          dropdownIconColor="red"
          style={{
            flex: 1,
            width: 343,
            height: 40,
            color: 'black',
            fontSize: 20,
          }}
          selectedValue={pickerValue}
          onValueChange={(itemValue, itemIndex) => {
            setPickerValue(itemValue);
            handleAddPoints(itemValue);
          }}>
          <Picker.Item label="Select" value="0" />
          <Picker.Item label="TCF-CANADA" value="tcf" />
          <Picker.Item label="TEF-CANADA" value="tef" />
          <Picker.Item label="Not applicable" value="0" />
        </Picker>
      </View>
      <View style={{flexDirection:"row", justifyContent:'space-evenly'}}>
      {showPicker && pickerValue === 'tcf'&& (

            <Picker
            style={{width:160, backgroundColor:'white'}}
              selectedValue={speaking}
              onValueChange={(itemValue, itemIndex) => {
                setSpeaking(itemValue)
                handleAddPoint(itemValue)
              }}>
              <Picker.Item label="Speaking" value="0" />
              <Picker.Item label="16-20" value="10-12" />
              <Picker.Item label="14-15" value="9" />
              <Picker.Item label="12-13" value="8" />
              <Picker.Item label="10-11" value="7" />
              <Picker.Item label="7-9" value="6" />
              <Picker.Item label="6" value="5" />
              <Picker.Item label="4-5" value="4" />
              <Picker.Item label="0-3" value="3" />
            </Picker>
            
          )}

          {
            showPicker && pickerValue === 'tcf'&& (
             
        
                    <Picker
                    style={{width:160, backgroundColor:'white'}}
                      selectedValue={listening}
                      onValueChange={(itemValue, itemIndex) => {
                        setListening(itemValue)
                        handleAddPoint(itemValue)
                      }}>
                      <Picker.Item label="Listening" value="0s" />
                      <Picker.Item label="16-20" value="10-12s" />
                      <Picker.Item label="14-15" value="9s" />
                      <Picker.Item label="12-13" value="8s" />
                      <Picker.Item label="10-11" value="7s" />
                      <Picker.Item label="7-9" value="6s" />
                      <Picker.Item label="6" value="5s" />
                      <Picker.Item label="4-5" value="4s" />
                      <Picker.Item label="0-3" value="3s" />
                    </Picker>
                  )
                }
                
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:15}}>
                {
                    showPicker && pickerValue === 'tcf' &&  (
                        <Picker
                    style={{width:160, backgroundColor:'white'}}
                      selectedValue={reading}
                      onValueChange={(itemValue, itemIndex) => {
                        setReading(itemValue)
                        handleAddPoint(itemValue)
                      }}>
                      <Picker.Item label="Reading" value="0r" />
                      <Picker.Item label="16-20" value="10-12r" />
                      <Picker.Item label="14-15" value="9r" />
                      <Picker.Item label="12-13" value="8r" />
                      <Picker.Item label="10-11" value="7r" />
                      <Picker.Item label="7-9" value="6r" />
                      <Picker.Item label="6" value="5r" />
                      <Picker.Item label="4-5" value="4r" />
                      <Picker.Item label="0-3" value="3r" />
                    </Picker>
                    )
                }
                 {
                    showPicker && pickerValue === 'tcf' &&  (
                        <Picker
                    style={{width:160, backgroundColor:'white'}}
                      selectedValue={writing}
                      onValueChange={(itemValue, itemIndex) => {
                        setWriting(itemValue)
                        handleAddPoint(itemValue)
                      }}>
                      <Picker.Item label="Writing" value="0w" />
                      <Picker.Item label="16-20" value="10-12w" />
                      <Picker.Item label="14-15" value="9w" />
                      <Picker.Item label="12-13" value="8w" />
                      <Picker.Item label="10-11" value="7w" />
                      <Picker.Item label="7-9" value="6w" />
                      <Picker.Item label="6" value="5w" />
                      <Picker.Item label="4-5" value="4w" />
                      <Picker.Item label="0-3" value="3w" />
                    </Picker>
                    )
                }
            </View>

            <View style={{flexDirection:"row", justifyContent:'space-evenly'}}>
      {secondPicker && pickerValue === 'tef'&& (

            <Picker
            style={{width:160, backgroundColor:'white'}}
              selectedValue={speaking}
              onValueChange={(itemValue, itemIndex) => {
                setSpeaking(itemValue)
                handleAddPoint(itemValue)
              }}>
             <Picker.Item label="Speaking" value="0"/>
          <Picker.Item label="393-450" value="10-12"/>
          <Picker.Item label="371-392" value="9"/>
          <Picker.Item label="349-370" value="8" />
          <Picker.Item label="310-348" value="7" />
          <Picker.Item label="271-309" value="6" />
          <Picker.Item label="226-270" value="5" />
          <Picker.Item label="181-225" value="4" />
          <Picker.Item label="0-180" value="3" />
            </Picker>
            
          )}

          {
            secondPicker && pickerValue === 'tef'&& (
             
        
                    <Picker
                    style={{width:160, backgroundColor:'white'}}
                      selectedValue={listening}
                      onValueChange={(itemValue, itemIndex) => {
                        setListening(itemValue)
                        handleAddPoint(itemValue)
                      }}>
          <Picker.Item label="Listening" value="0l"/>
          <Picker.Item label="393-450" value="10-12l"/>
          <Picker.Item label="371-392" value="9l"/>
          <Picker.Item label="349-370" value="8l" />
          <Picker.Item label="310-348" value="7l" />
          <Picker.Item label="271-309" value="6l" />
          <Picker.Item label="226-270" value="5l" />
          <Picker.Item label="181-225" value="4l" />
          <Picker.Item label="0-180" value="3l" />
                    </Picker>
                  )
                }
                
            </View>
            <View style={{flexDirection:"row", justifyContent:'space-evenly',marginTop:10}}>
      {secondPicker && pickerValue === 'tef'&& (

            <Picker
            style={{width:160, backgroundColor:'white'}}
              selectedValue={speaking}
              onValueChange={(itemValue, itemIndex) => {
                setSpeaking(itemValue)
                handleAddPoint(itemValue)
              }}>
             <Picker.Item label="Reading" value="0"/>
          <Picker.Item label="393-450" value="10-12"/>
          <Picker.Item label="371-392" value="9"/>
          <Picker.Item label="349-370" value="8" />
          <Picker.Item label="310-348" value="7" />
          <Picker.Item label="271-309" value="6" />
          <Picker.Item label="226-270" value="5" />
          <Picker.Item label="181-225" value="4" />
          <Picker.Item label="0-180" value="3" />
            </Picker>
            
          )}

          {
            secondPicker && pickerValue === 'tef'&& (
                    <Picker
                    style={{width:160, backgroundColor:'white'}}
                      selectedValue={listening}
                      onValueChange={(itemValue, itemIndex) => {
                        setListening(itemValue)
                        handleAddPoint(itemValue)
                      }}>
          <Picker.Item label="Writing" value="0l"/>
          <Picker.Item label="393-450" value="10-12l"/>
          <Picker.Item label="371-392" value="9l"/>
          <Picker.Item label="349-370" value="8l" />
          <Picker.Item label="310-348" value="7l" />
          <Picker.Item label="271-309" value="6l" />
          <Picker.Item label="226-270" value="5l" />
          <Picker.Item label="181-225" value="4l" />
          <Picker.Item label="0-180" value="3l" />
                    </Picker>
                  )
                }
                
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('Work')}>
                <View style={{backgroundColor:'red', width:90, padding:10, alignSelf:'center', marginTop:20, borderRadius:10}}>
                    <Text style={{fontSize:17,textAlign:'center', color:'white'}}>Next</Text>
                </View>
            </TouchableOpacity>
            </ImageBackground>
    </SafeAreaView>
  );
};

export default Second;
