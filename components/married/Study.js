import React, { useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, Image, ImageBackground, Alert, Modal, StyleSheet, Pressable } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addPoints, refreshState } from './../../actions/pointsActions';
import { Picker } from '@react-native-picker/picker';

const refresh = require('../../assets/rets.png');

const pickerItems = [
  { label: "Select your Education", value: "" },
  { label: "Less than secondary school (high school)", value: "17" },
  { label: "Secondary diploma (high school graduation)", value: "18" },
  { label: "One-year degree, diploma or certificate from a university, college, trade or technical school, or other institute", value: "19" },
  { label: "Two-year program at a university, college, trade or technical school, or other institute", value: "20" },
  { label: "Bachelor's degree OR a three or more year program at a university, college, trade or technical school, or other institute", value: "30" },
  { label: "Two or more certificates, diplomas, or degrees. One must be for a program of three or more years", value: "31" },
  { label: "Master's degree, OR professional degree needed to practice in a licensed profession", value: "32" },
  { label: "Doctoral level university degree (Ph.D.)", value: "33" }
];

const Study = ({ navigation, route }) => {
  const maritalStatus = route.param;
  const [pickerValue, setPickerValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibl, setModalVisibl] = useState(false);
  const marriedPoints = {
    "17": 0,
    "18": 28,
    "19": 84,
    "20": 91,
    "30": 112,
    "31": 119,
    "32": 126,
    "33": 140
  };

  const singlePoints = {
    "17": 0,
    "18": 30,
    "19": 90,
    "20": 98,
    "30": 120,
    "31": 128,
    "32": 135,
    "33": 150
  }

  const pointsMap = maritalStatus === 'single' ? singlePoints : marriedPoints;
  const points = useSelector((state) => state.points.points);
  const dispatch = useDispatch();

  const handleAdd = (itemValue) => {
    if (pointsMap[itemValue] !== undefined) {
      dispatch(refreshState()); // Reset points before adding new points
      dispatch(addPoints(pointsMap[itemValue]));
    }
  };

  const handleAddPoint = () => {
    dispatch(refreshState());
  };

  const modalshow = () => {
    setModalVisible(true)
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require('../../assets/backg.png')} style={{ flex: 1 }}>
        <ImageBackground source={require('../../assets/header.png')} style={styles.headerContainer}>
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
              CRS – A. Core.
            </Text>
            <Pressable onPress={handleAddPoint}>
              <Image source={refresh} style={{ width: 30, height: 30, marginTop: 10 }} />
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
              marginTop: 10
            }}>
            <Text style={{ fontSize: 30, color: 'black', }}>{points}</Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontFamily: 'Raleway-ExtraBold',
                color: 'red',
                marginVertical: 20
              }}>Level of your Education</Text>
          </View>
        </ImageBackground>

        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={pickerValue}
            onValueChange={(itemValue, itemIndex) => {
              setPickerValue(itemValue);
              handleAdd(itemValue);
            }}
          >
            {pointsMap && pickerItems.map((item, index) => (
              <Picker.Item key={index} label={item.label} value={item.value} />
            ))}
          </Picker>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>

            <View style={{ borderWidth: 1, borderColor: 'red', backgroundColor: 'white', width: 80, padding: 10, borderRadius: 10 }}>
              <Text style={{ textAlign: 'center', color: 'black' }}>Prev</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={modalshow}>
            <View style={{ backgroundColor: "red", width: 80, padding: 10, borderRadius: 10 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{
          padding: 10, backgroundColor: "white", elevation: 10, margin: 12, borderRadius: 10,
          borderColor: 'red'
        }}>

          <Text style={{
            fontFamily: 'Raleway-Condensed-ThinItalic', fontFamily: "Raleway-ExtraBold", color: 'black'
          }}><Text style={{ color: 'red' }}>Note:</Text> a Canadian degree, diploma or certificate must either have been earned at an accredited Canadian university, college, trade or technical school, or other institute in Canada. Distance learning counts for education points, but not for bonus points in your profile or application.</Text>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Have You earned A Canadian Degree, Diploma or Certificate</Text>
              <View style={{ flexDirection: 'row', justifyContent: "space-between", gap: 40 }}>
                <TouchableOpacity onPress={() => setModalVisibl(true)}>

                  <View style={{ backgroundColor: 'red', width: 70, padding: 10, borderRadius: 10 }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>NO</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cblf')}>
                  <View style={{ backgroundColor: 'green', width: 70, padding: 10, borderRadius: 10 }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Yes</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibl}
          onRequestClose={() => {
            setModalVisibl(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Are Your Test Result less than Two Years Old ?</Text>
              <View style={{ flexDirection: 'row', justifyContent: "space-between", gap: 40 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Error")}>
                  <View style={{ backgroundColor: 'red', width: 70, padding: 10, borderRadius: 10 }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>NO</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Exp')}>
                  <View style={{ backgroundColor: 'green', width: 70, padding: 10, borderRadius: 10 }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Yes</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  )
}
export default Study;

const styles = StyleSheet.create({
  headerContainer: {
    height: 140,
    elevation: 10,
  },
  pickerContainer: {
    borderRadius: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    margin: 20,
    backgroundColor: 'white',
    elevation: 6,
  },
  picker: {
    flex: 1,
    width: 343,
    height: 40,
    color: 'black',
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Raleway-Bold'
  },
});
