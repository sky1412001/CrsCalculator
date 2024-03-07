import React,{useState} from "react";
import { SafeAreaView, Text, View ,TouchableOpacity,Image, ScrollView, Pressable, ImageBackground,Alert, Modal, StyleSheet} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import {addPoints, refreshState} from './../../actions/pointsActions';
import {Picker} from '@react-native-picker/picker';

const refresh = require('../../assets/rets.png')

const Study= ({navigation}) =>{
   const [pickerValue, setPickerValue] = useState('');
   const [modalVisible, setModalVisible] = useState(false);
   
    const points = useSelector((state) => state.points.points);
  const dispatch = useDispatch();
    const handleAddPoints= itemValue=>{
        if (itemValue === '17') {
         dispatch(addPoints(0));
       } else if (itemValue === '18') {
         dispatch(addPoints(28));
       } else if (itemValue === '19') {
         dispatch(addPoints(84));
       } else if (itemValue === '20') {
         dispatch(addPoints(91));
       } else if (itemValue === '30') {
         dispatch(addPoints(112));
       } else if (itemValue === '31') {
         dispatch(addPoints(119));
       } else if (itemValue === '32') {
         dispatch(addPoints(126));
       } else if (itemValue === '33') {
         dispatch(addPoints(140));
       }
         };  
         const handleAddPoint = () => {
          dispatch(refreshState());
        };   
    return(
        <SafeAreaView>
           <ImageBackground source={require('../../assets/header.png')} style={{ height: 140, elevation:10}}>
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
            <Image source={refresh} style={{width: 30,height: 30,marginTop:10}}/>
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
            marginTop:10
          }}>
          <Text style={{fontSize: 30, color: 'black',}}>{points}</Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Raleway-ExtraBold',
              color: 'red',
              marginVertical:20
            }}>Level of your Education</Text>
        </View>
      </ImageBackground>
        <View
         style={{
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
          <Picker.Item label="Select your Education" value=""/>
          <Picker.Item label=" Less than secondary school (high school)" value="17" />
          <Picker.Item label=" Secondary diploma (high school graduation)" value="18" />
          <Picker.Item label="One-year degree, diploma or certificate from  a university, college, trade or technical school, or other institute" value="19"/>
          <Picker.Item label="Two-year program at a university, college, trade or technical school, or other institute" value="20" />
          <Picker.Item label="Bachelor's degree OR  a three or more year program at a university, college, trade or technical school, or other institute" value="30" />
          <Picker.Item label="Two or more certificates, diplomas, or degrees. One must be for a program of three or more years" value="31" />
          <Picker.Item label="Master's degree, OR professional degree needed to practice in a licensed profession (For “professional degree,” the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)" value="32"  />
          <Picker.Item label="Doctoral level university degree (Ph.D.)" value="33" />
        </Picker>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>

        <View style={{borderWidth:1, borderColor:'red', backgroundColor:'white', width:80, padding:10, borderRadius:10}}>
          <Text style={{textAlign:'center', color:'black'}}>Prev</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setModalVisible(true)}>
        <View style={{backgroundColor:"red", width:80, padding:10, borderRadius:10}}>
          <Text style={{color:'white', textAlign:'center'}}>
            Next
          </Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{padding:10, backgroundColor:"white", elevation:10, margin:12, borderRadius:10,
          borderColor:'red'}}>

  <Text style={{fontFamily:'Raleway-Condensed-ThinItalic', fontFamily:"Raleway-ExtraBold", color:'black'}}><Text style={{color:'red'}}>Note:</Text> a Canadian degree, diploma or certificate must either have been earned at an accredited Canadian university, college, trade or technical school, or other institute in Canada. Distance learning counts for education points, but not for bonus points in your profile or application.</Text>
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
            <Text style={styles.modalText}>Have You earned A Canadian Degree , Diploma or certificate</Text>
           <View style={{flexDirection:'row', justifyContent:"space-between", gap:40}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Exp')}>

            <View style={{backgroundColor:'red', width:70, padding:10, borderRadius:10}}>
              <Text style={{textAlign:'center', color:'white'}}>NO</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Cblf')}>
            <View style={{backgroundColor:'green', width:70, padding:10, borderRadius:10}}>
              <Text style={{textAlign:'center', color:'white'}}>Yes</Text>
            </View>
            </TouchableOpacity>
           </View>
          </View>
        </View>
      </Modal>

        </SafeAreaView>
    )
}
export default Study;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  openButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    color:'black',
    fontFamily:'Raleway-Bold'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

{/* <TouchableOpacity
style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
onPress={() => {
  setModalVisible(false);
}}>
<Text style={styles.textStyle}>Close Modal</Text>
</TouchableOpacity> */}