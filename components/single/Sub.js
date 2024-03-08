import React, { useState } from 'react';
import {
  Text,
  Pressable,
  View,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import { addPoints, refreshState } from './../../actions/pointsActions';

const refresh = require('../../assets/rets.png');

const Sub = ({ navigation }) => {
  const [maritalStatus, setMaritalStatus] = useState(''); // default to empty
  const [age, setAge] = useState('');
  const points = useSelector(state => state.points.points);
  const dispatch = useDispatch();



  const singlePoints = [
    { label: 'Select your age', value: '' },
    { label: '0-17', value: '17', points: 0 },
    { label: '18', value: '18', points: 90 },
    { label: '45', value: '45', points: 100 },
  ];
  const marriedPoints = [
    { label: 'Select your age', value: '' },
    { label: '0-17', value: '17', points: 0 },
    { label: '18', value: '18', points: 100 },
    { label: '45', value: '45', points: 455 },
  ];
  const handleAddPoints = () => {
    const selectedPointsArray = maritalStatus === 'single' ? singlePoints : marriedPoints;
    const selectedAge = selectedPointsArray.find(item => item.value === age);
    const pointsToAdd = selectedAge ? selectedAge.points : 0;
    dispatch(addPoints(pointsToAdd));
  };
  const handleAddPoint = () => {
    dispatch(refreshState());
  };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../assets/backg.png')} style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
        <ImageBackground
          source={require('../../assets/header.png')}
          style={{ height: 140, elevation: 10 }}>
          {/* Header content */}
        </ImageBackground>

        {/* Marital status selection */}
        <View style={{ marginVertical: 20, paddingHorizontal: 20 }}>
          <Text style={{ textAlign: 'center', fontSize: 18, fontFamily: 'Raleway-ExtraBold', color: 'red' }}>
            Select your marital status
          </Text>
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
            <Picker.Item label="Married" value="married" />
          </Picker>
        </View>

        {/* Age selection */}
        {maritalStatus && (
          <View style={{ marginVertical: 20, paddingHorizontal: 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 18, fontFamily: 'Raleway-ExtraBold', color: 'red' }}>
              Select your age
            </Text>
            <Picker
              style={{ width: 340, height: 40, color: 'black', fontSize: 25, borderRadius: 20 }}
              selectedValue={age}
              onValueChange={(itemValue) => {
                setAge(itemValue);
              }}
              dropdownIconColor="black"
              placeholders>
              {maritalStatus === 'single' ? (
                singlePoints.map((item, index) => (
                  <Picker.Item key={index} label={item.label} value={item.value} />
                ))
              ) : (
                marriedPoints.map((item, index) => (
                  <Picker.Item key={index} label={item.label} value={item.value} />
                ))
              )}
            </Picker>
          </View>
        )}

        {/* Next button */}
        <TouchableOpacity
          disabled={!age}
          onPress={() => {
            // Calculate points based on age and marital status
            handleAddPoints();
            // Navigate to the next screen
            navigation.navigate('Study');
          }}>
          <View style={{ backgroundColor: 'red', width: 80, height: 40, alignSelf: 'center', padding: 10, borderRadius: 10 }}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Next</Text>
          </View>
        </TouchableOpacity>

        {/* Additional information */}
        <View style={{ justifyContent: 'center', height: 200, paddingHorizontal: 40, backgroundColor: 'white', margin: 15, elevation: 5, padding: 20, borderRadius: 10 }}>
          <Text style={{ padding: 10, fontWeight: "700" }}>
            {/* Marital status selection */}
            <Text>
              Choose the best answer:
            </Text>
            If you’ve been invited to apply, enter your age on the date you were invited.
            OR
            If you plan to complete an Express Entry profile, enter your current age.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Sub;
