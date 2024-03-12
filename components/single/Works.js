import React,{useState} from "react";
import {Image,Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View,Pressable, StatusBar, StyleSheet, ImageBackground} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {refreshState} from './../../actions/pointsActions';
import {Picker} from '@react-native-picker/picker';

const refresh = require('../../assets/rets.png')
const Works =({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showme, setShowMe] = useState(false)
  const [showthis, setShowThis] = useState(false)
   const [pickerValue, setPickerValue] = useState('');

    const points = useSelector((state) => state.points.points);
    const dispatch = useDispatch();
  
      const handleAddPoints=itemValue =>{  
      }
      const handleAddPoint=()=>{
         dispatch(refreshState())
         navigation.push('Home')
      }
    return(
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
          In The Last 10 Years, How Many Total Years Of Foreign Skilled Work Experience Do You Have?
          </Text>
        </View>
      </ImageBackground>
        <View
        style={{
          borderRadius: 10,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 150,
          margin: 20,
          backgroundColor: 'white',
          elevation: 6,
          borderWidth: 2,
          borderColor: 'red',
        
        }}>
        <Picker
           style={{width:343, height:40,
           color: 'black', fontSize: 20, fontFamily:'Poppins-Regular'}}
          selectedValue={pickerValue}
          onValueChange={(itemValue, itemIndex) => {
            setPickerValue(itemValue);
            handleAddPoints(itemValue);
          }}
        dropdownIconColor="red" >
          <Picker.Item label="Enter your work experience " value=""/>
          <Picker.Item label="None or less than a Year" value="17" />
          <Picker.Item label="1 Year" value="18" />
          <Picker.Item label="2 Years" value="19" />
          <Picker.Item label="3 Year or more" value="20" />
        </Picker>
    </View>
    <TouchableOpacity onPress={()=>setModalVisible(true)}>
    <View style={{backgroundColor:'red', width:80, height:40, alignItems:'center', justifyContent:'center', borderRadius:10, alignSelf:'center'}}>
      <Text style={{color:'white', textAlign:'center'}}>Next</Text>
    </View>

    </TouchableOpacity>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> Do You Have A Certificate Of Qualification From A Canadian Province, Territory Or Federal Body?</Text>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", gap: 40 }}>
              <TouchableOpacity onPress={()=>setShowMe(true)}>

                <View style={{ backgroundColor: 'red', width: 70, padding: 10, borderRadius: 10 }}>
                  <Text style={{ textAlign: 'center', color: 'white' }}>NO</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>setShowMe(true)}>
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
        visible={showme}
        onRequestClose={() => {
          setShowMe(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Do You Or Your Spouse Or Common Law Partner (If They Will Come With You To Canada) Have At Least One Brother Or Sister Living In Canada Who Is A Citizen Or Permanent Resident?</Text>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", gap: 40 }}>
              <TouchableOpacity onPress={()=>setShowThis(true)}>

                <View style={{ backgroundColor: 'red', width: 70, padding: 10, borderRadius: 10 }}>
                  <Text style={{ textAlign: 'center', color: 'white' }}>NO</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setShowThis(true)} >
                <View style={{ backgroundColor: 'green', width: 70, padding: 10, borderRadius: 10 }}>
                  <Text style={{ textAlign: 'center', color: 'white' }}>Yes</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
   
      </Modal>
      <Modal
      statusBarTranslucent={true}
        animationType="slide"
        transparent={false}
        visible={showthis}
        onRequestClose={() => {
          setShowThis(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Your final Score</Text>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", gap: 40 }}>
              <View style={{borderColor:'red',width:70, height:70, backgroundColor:"white", borderRadius:50, alignItems:"center", justifyContent:'center', borderWidth:2}}>
                <Text style={{fontSize:20, fontWeight:700, color:'black'}}>{points}</Text>
              </View>
            </View>
          </View>
             <Pressable onPress={handleAddPoint}>
             <View>
              <Image source={require('../../assets/rets.png')} style={{width:30, height:30}}/>
             </View>
             </Pressable>
        </View>
      </Modal>   
    </ImageBackground>
</SafeAreaView>
    )
}
export default Works;
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
    fontSize: 12,
    fontFamily: 'Raleway-ExtraBold',
    color: 'red',
    padding:10
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
    marginTop:40
  },
  picker: {
    flex: 1,
    width: 343,
    height: 40,
    color: 'black',
    fontSize: 20,
    marginTop:20
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