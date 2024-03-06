import React, {useState} from 'react';
import {
  Text,
  Pressable,
  View,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';
import {addPoints, refreshState} from './../../actions/pointsActions';
const refresh = require('../../assets/rets.png');
const Age = ({navigation}) => {
  const [pickerValue, setPickerValue] = useState('');
  const points = useSelector(state => state.points.points);
  const dispatch = useDispatch();
  const handleAddPoints = itemValue => {
    let pointsToAdd = 0;
    switch (itemValue) {
      case '17':
        pointsToAdd = 0;
        break;
      case '18':
        pointsToAdd = 90;
        break;
      case '19':
        pointsToAdd = 95;
        break;
      case '20':
        pointsToAdd = 100;
        break;
      case '30':
        pointsToAdd = 95;
        break;
      case '31':
        pointsToAdd = 90;
        break;
      case '32':
        pointsToAdd = 85;
        break;
      case '33':
        pointsToAdd = 80;
        break;
      case '34':
        pointsToAdd = 75;
        break;
      case '35':
        pointsToAdd = 70;
        break;
      case '36':
        pointsToAdd = 65;
        break;
      case '37':
        pointsToAdd = 60;
        break;
      case '38':
        pointsToAdd = 55;
        break;
      case '39':
        pointsToAdd = 50;
        break;
      case '40':
        pointsToAdd = 45;
        break;
      case '41':
        pointsToAdd = 35;
        break;
      case '42':
        pointsToAdd = 25;
        break;
      case '43':
        pointsToAdd = 15;
        break;
      case '44':
        pointsToAdd = 5;
        break;
      default:
        pointsToAdd = 0;
        break;
    }
    dispatch(addPoints(pointsToAdd));
  };
  const handleAddPoint = () => {
    dispatch(refreshState());
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'}/>
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
      <View
        style={{
          borderRadius: 20,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
          margin: 20,
          backgroundColor: 'white',
          elevation: 6,
          borderWidth:2,
          borderColor:'red'
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
          <Picker.Item label="Select your age" value=""/>
          <Picker.Item label="0-17" value="17" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20-29" value="20" />
          <Picker.Item label="31" value="31" />
          <Picker.Item label="32" value="32" />
          <Picker.Item label="33" value="33" />
          <Picker.Item label="34" value="34" />
          <Picker.Item label="35" value="35" />
          <Picker.Item label="36" value="36" />
          <Picker.Item label="37" value="37" />
          <Picker.Item label="38" value="38" />
          <Picker.Item label="39" value="39" />
          <Picker.Item label="40" value="40" />
          <Picker.Item label="41" value="41" />
          <Picker.Item label="42" value="42" />
          <Picker.Item label="43" value="43" />
          <Picker.Item label="44" value="44" />
          <Picker.Item label="45" value="45" />
        </Picker>
      </View>
      <TouchableOpacity disabled={pickerValue === ""} onPress={()=>navigation.navigate('Study')}>
        <View style={{backgroundColor:'red', width:80,height:40, alignSelf:'center', padding:10, borderRadius:10}}><Text style={{textAlign:'center', color:'white'}}>Next</Text></View>
      </TouchableOpacity>



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
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Raleway-Bold',
            fontSize: 15,
            color: 'black',
            marginBottom:20
          }}>
          Choose your best answer
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Raleway-Regular',
            color: 'black',
            fontSize: 14,
          }}>
          If you’ve been invited to apply, enter your age on the date you were
          invited.
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Raleway-Regular',
            color: 'red',
          }}>
          or
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Raleway-Regular',
            fontFamily: 'Raleway-Regular',
            color: 'black',
          }}>
          If you plan to complete an Express Entry profile, enter your current
          age.
        </Text>
      </View>
      
      
    </View>
  );
};

export default Age;

