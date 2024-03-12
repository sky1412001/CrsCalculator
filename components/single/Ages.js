import React, {useState} from 'react';
import {
  Text,
  Pressable,
  View,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';
import {addPoints, refreshState} from './../../actions/pointsActions';

const refresh = require('../../assets/rets.png');

const Ages = ({navigation}) => {
  const [maritalStatus, setMaritalStatus] = useState('');
  const [pickerValue, setPickerValue] = useState('');
  const points = useSelector(state => state.points.points);
  const dispatch = useDispatch();

  const singlePoints = [
    {label: 'Select your age', value: ''},
    {label: '0-17', value: '17s', points: 0},
    {label: '18', value: '18s', points: 99},
    {label: '19', value: '19s', points: 105},
    {label: '20-29', value: '20s', points: 110},
    {label: '30', value: '30s', points: 105},
    {label: '31', value: '31s', points: 99},
    {label: '32', value: '32s', points: 94},
    {label: '33', value: '33s', points: 88},
    {label: '34', value: '34s', points: 83},
    {label: '35', value: '35s', points: 77},
    {label: '36', value: '36s', points: 72},
    {label: '37', value: '37s', points: 66},
    {label: '38', value: '38s', points: 61},
    {label: '39', value: '39s', points: 55},
    {label: '40', value: '40s', points: 50},
    {label: '41', value: '41s', points: 45},
    {label: '42', value: '42s', points: 35},
    {label: '43', value: '43s', points: 25},
    {label: '44', value: '44s', points: 15},
    {label: '45', value: '45s', points: 0},
  ];

  const handleAddPoints = itemValue => {
    const selectedAge = singlePoints.find(age => age.value === itemValue);
    const pointsToAdd = selectedAge ? selectedAge.points : 0;
    dispatch(addPoints(pointsToAdd));
  };

  const handleAddPoint = () => {
    dispatch(refreshState());
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('../../assets/backg.png')} style={{flex:1}}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
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
            How old are you ?
          </Text>
        </View>
      </ImageBackground>

      <View  style={{
          borderRadius: 20,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
          margin: 20,
          backgroundColor:'white',
          elevation:6,
          borderWidth:2,
          borderColor:'red'
        }}>
           <Picker
            style={{ width: 340, height: 40, color: 'black', fontSize: 25, borderRadius: 20 }}
            selectedValue={maritalStatus}
            onValueChange={(itemValue, itemIndex) => {
              setMaritalStatus(itemValue);
            }}
            dropdownIconColor="black"
            placeholders>
            <Picker.Item label="Select marital status" value="" />
            <Picker.Item label="Single" value="single" />
          </Picker>

      </View>
            <Text style={{ textAlign: 'center', fontSize: 18, fontFamily: 'Raleway-ExtraBold', color: 'red' }}>
              Select your age
            </Text>
          {maritalStatus && (
          <View  style={{
            borderRadius: 20,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            margin: 20,
            backgroundColor:'white',
            elevation:6,
            borderWidth:2,
            borderColor:'red'
          }}>
            <Picker
              style={{ width: 340, height: 40, color: 'black', fontSize: 25, borderRadius: 20 }}
              selectedValue={pickerValue}
              onValueChange={(itemValue) => {
                setPickerValue(itemValue);
                handleAddPoints(itemValue)
              }}
              dropdownIconColor="black"
              placeholders>
              {singlePoints.map((item, index) => (
                <Picker.Item key={index} label={item.label} value={item.value} />
              ))}
            </Picker>
          </View>
        )}

      {/* Next button */}
      <TouchableOpacity
        disabled={pickerValue === ''}
        onPress={() => navigation.navigate('Study', {maritalStatus : maritalStatus})}>
        <View
          style={{
            backgroundColor: 'red',
            width: 80,
            height: 40,
            alignSelf: 'center',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>Next</Text>
        </View>
      </TouchableOpacity>

      {/* Additional information */}
      <View
        style={{
          justifyContent: 'center',
          height: 200,
          paddingHorizontal: 40,
          backgroundColor: 'white',
          margin: 15,
          elevation: 5,
          padding: 20,
          borderRadius: 10,
        }}>
        <Text style={{padding:10, fontWeight:"700", color:'black'}}>
       <Text>
       Choose the best answer:
        </Text>

If you’ve been invited to apply, enter your age on the date you were invited.
OR
If you plan to complete an Express Entry profile, enter your current age.

If you’ve been invited to apply, enter your age on the date you were invited.
OR
If you plan to complete an Express Entry profile, enter your current age.
        </Text>
      </View>
      </ImageBackground>
    </View>
  );
};
export default Ages;
