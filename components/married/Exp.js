import React, { useState } from 'react';
import { SafeAreaView, Text, Pressable, View, Image, ImageBackground, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import { addPoints, refreshState } from './../../actions/pointsActions';

const refresh = require('../../assets/rets.png');

const Exp = ({ navigation }) => {
  const [pickerValue, setPickerValue] = useState('');
  const points = useSelector(state => state.points.points);
  const dispatch = useDispatch();

  const handleAddPoints = (itemValue) => {
    const pointsMap = {
      '0': 0,
      '1': () => navigation.navigate('Celpip'),
      '2': () => navigation.navigate('Ielts'),
      '3': () => navigation.navigate('Tef'),
      '4': () => navigation.navigate('Tcf')
    };
    const selectedPoints = pointsMap[itemValue];
    if (selectedPoints !== undefined) {
      if (typeof selectedPoints === 'function') {
        selectedPoints();
      } else {
        dispatch(addPoints(selectedPoints));
      }
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
        style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>CRS – A. Core</Text>
          <Pressable onPress={handleAddPoint}>
            <Image source={refresh} style={styles.refreshIcon} />
          </Pressable>
        </View>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>{points}</Text>
        </View>
        <View style={styles.languageContainer}>
          <Text style={styles.languageText}>
            Which Language Test Did You take For Your First Official Language
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={pickerValue}
          onValueChange={(itemValue) => {
            setPickerValue(itemValue);
            handleAddPoints(itemValue);
          }}>
          <Picker.Item label="Select" value="0" />
          <Picker.Item label="CELPIP-G" value="1" />
          <Picker.Item label="IELTS" value="2" />
          <Picker.Item label="TEF Canada" value="3" />
          <Picker.Item label="TCF Canada" value="4" />
        </Picker>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 140,
    elevation: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerText: {
    fontFamily: 'Raleway-ExtraBold',
    fontSize: 20,
    color: 'white',
  },
  refreshIcon: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
  pointsContainer: {
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
  },
  pointsText: {
    fontSize: 30,
    color: 'black',
  },
  languageContainer: {
    marginVertical: 20,
  },
  languageText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Raleway-ExtraBold',
    color: 'red',
  },
  pickerContainer: {
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
  },
  picker: {
    flex: 1,
    width: 343,
    height: 40,
    color: 'black',
    fontSize: 20,
  },
});

export default Exp;
