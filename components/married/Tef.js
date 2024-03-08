import React,{useState} from "react";
import { SafeAreaView ,ImageBackground, View,Text, Pressable,Image, TouchableOpacity} from "react-native";
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';
import {addPoints, refreshState} from '../../actions/pointsActions';

const refresh = require('../../assets/rets.png');
const Tef = ({navigation}) =>{
  const [pickerValue, setPickerValue] = useState('');
  const [listen, setListen] = useState('');
  const[reading, setReading] = useState('');
  const [writing, setWriting] = useState('');
  const points = useSelector(state => state.points.points);
  const dispatch = useDispatch();

  const handleAddPoints = itemValue => {
    if (itemValue === '0') {
      dispatch(addPoints(0));
    } else if (itemValue === '1') {
      navigation.navigate('Celpip')
    } else if (itemValue === '19') {
      dispatch(addPoints(46));
    } else if (itemValue === '20') {
      dispatch(addPoints(56));
    } else if (itemValue === '30') {
      dispatch(addPoints(63));
    } else if (itemValue === '31') {
      dispatch(addPoints(70));
    } 
  }
  const handleAddPoint = () => {
    dispatch(refreshState());
  };
    return(
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
      <View  style={{
          borderRadius: 20,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 120,
          margin: 20,
          backgroundColor:'white',
          elevation:6,
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
      </View>
      <View  style={{
          borderRadius: 20,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 7,
          margin: 20,
          backgroundColor:'white',
          elevation:6,
          borderColor:'red'
        }}>
      <Picker
        padding={20}
        dropdownIconColor="red"
        style={{flex:1,width:343,height:40, 
        color: 'black', fontSize: 20,  }}
        selectedValue={listen}
        onValueChange={(itemValue, itemIndex)=>{
        setListen(itemValue);
        handleAddPoints(itemValue);
          }}
         >
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
      </View>
      <View  style={{
          borderRadius: 20,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 7,
          margin: 20,
          backgroundColor:'white',
          elevation:6,
          borderColor:'red'
        }}>
      <Picker
        padding={20}
        dropdownIconColor="red"
        style={{flex:1,width:343,height:40, 
        color: 'black', fontSize: 20,  }}
        selectedValue={reading}
        onValueChange={(itemValue, itemIndex)=>{
        setReading(itemValue);
        handleAddPoints(itemValue);
          }}
         >
          <Picker.Item label="Reading" value="0r"/>
          <Picker.Item label="393-450" value="10-12r"/>
          <Picker.Item label="371-392" value="9r"/>
          <Picker.Item label="349-370" value="8r" />
          <Picker.Item label="310-348" value="7r" />
          <Picker.Item label="271-309" value="6r" />
          <Picker.Item label="226-270" value="5r" />
          <Picker.Item label="181-225" value="4r" />
          <Picker.Item label="0-180" value="3r" />
        </Picker>
      </View>
<View  style={{
          borderRadius: 20,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 7,
          margin: 20,
          backgroundColor:'white',
          elevation:6,
          borderColor:'red'
        }}>
      <Picker
        padding={20}
        dropdownIconColor="red"
        style={{flex:1,width:343,height:40, 
        color: 'black', fontSize: 20,  }}
        selectedValue={writing}
        onValueChange={(itemValue, itemIndex)=>{
        setWriting(itemValue);
        handleAddPoints(itemValue);
          }}
         >
      <Picker.Item label="Writing" value="0w"/>
          <Picker.Item label="393-450" value="10-12w"/>
          <Picker.Item label="371-392" value="9w"/>
          <Picker.Item label="349-370" value="8w" />
          <Picker.Item label="310-348" value="7w" />
          <Picker.Item label="271-309" value="6w" />
          <Picker.Item label="226-270" value="5w" />
          <Picker.Item label="181-225" value="4w" />
          <Picker.Item label="0-180" value="3w" />
        </Picker>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Second')}>
      <View style={{width:80, backgroundColor:'red', padding:10, alignSelf:'center', borderRadius:10}}><Text style={{color:'white',textAlign:'center'}}>Next</Text></View>
      </TouchableOpacity>

</ImageBackground>
        </SafeAreaView>
    

    )
}

export default Tef;