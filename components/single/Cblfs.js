import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Modal,
  ImageBackground,
  StatusBar,
  StyleSheet

} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addPoints, refreshState} from './../../actions/pointsActions';
import {Picker} from '@react-native-picker/picker';
const refresh = require('../../assets/rets.png');
const Cblfs = ({navigation}) => {
  const [pickerValue, setPickerValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
   

  const points = useSelector(state => state.points.points);
  const dispatch = useDispatch();

  const handleAddPoints = itemValue => {
    if (itemValue === '17') {
      dispatch(addPoints(0));
    } else if (itemValue === '18') {
      dispatch(addPoints(1));
    } else if (itemValue === '19') {
      dispatch(addPoints(3));
    } else if (itemValue === '20') {
      dispatch(addPoints(6));
    }
  };
  const handleAddPoint = () => {
    dispatch(refreshState());
  };
  return (
    <SafeAreaView style={{flex:1}}>
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
            Level of your Education
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          borderRadius: 10,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
          margin: 20,
          backgroundColor: 'white',
          elevation: 6,
          borderColor: 'red',
        }}>
        <Picker
          style={{
            width: 340,
            height: 40,
            color: 'black',
            fontSize: 25,
            borderRadius: 20,
          }}
          selectedValue={pickerValue}
          onValueChange={(itemValue, itemIndex) => {
            setPickerValue(itemValue);
            handleAddPoints(itemValue);
          }}
          dropdownIconColor="black"
          placeholders>
          <Picker.Item label="Select Your Education" value="" />
          <Picker.Item label="Secondary(high school) or less" value="17" />
          <Picker.Item label="One-or two-year diploma or certificate" value="18" />
          <Picker.Item label="Degree, diploma or certificate of three years or longer" value="19" />
        </Picker>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
      <TouchableOpacity
        onPress={() =>navigation.goBack()}>
        <View
          style={{
            backgroundColor: 'red',
            width: 80,
            height: 40,
            alignSelf: 'center',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>Prev</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}>
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
            <Text style={styles.modalText}>Are Your Test Result less than Two Years Old ?</Text>
           <View style={{flexDirection:'row', justifyContent:"space-between", gap:40}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Error")}>
            <View style={{backgroundColor:'red', width:70, padding:10, borderRadius:10}}>
              <Text style={{textAlign:'center', color:'white'}}>NO</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Exps')}>
            <View style={{backgroundColor:'green', width:70, padding:10, borderRadius:10}}>
              <Text style={{textAlign:'center', color:'white'}}>Yes</Text>
            </View>
            </TouchableOpacity>
           </View>
          </View>
        </View>
      </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Cblfs;
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