import React,{useState} from "react";
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

const canada = require('../assets/can.jpg')

 const Home = () =>{
  const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);


    const goMarry= () =>{
      navigation.navigate('Age')
    }

    const goSingle= () =>{
      navigation.navigate('Ages')
    }
    return(
        <SafeAreaView style={{backgroundColor:"white", flex:1}}>
            <StatusBar backgroundColor={'red'} />
            <View style={styles.logoflag}>
                <Image  source={canada} style={{width:200, height:200}}/>
                <Text style={{fontSize:16, fontFamily:'Raleway-ExtraBold', color:'black'}}>Comprehensive Ranking System</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={goMarry}>
                <View style={styles.btn}>
                    <Text style={{color:'white', fontFamily:'Raleway-ExtraBold'}}>Married</Text>
                </View>
                </TouchableOpacity> 
               <TouchableOpacity onPress={goSingle}>
               <View style={styles.btn}>
                    <Text style={{color:'white', fontFamily:'Raleway-ExtraBold'}}>Single</Text>
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
            <Text style={styles.modalText}>Is your Spouse Or Common-Law Partner A Citizen Or Permanent Resident of Canada</Text>
           <View style={{flexDirection:'row', justifyContent:"space-between", gap:40}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Age')}>

            <View style={{backgroundColor:'red', width:70, padding:10, borderRadius:10}}>
              <Text style={{textAlign:'center', color:'white'}}>NO</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Age')}>
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
 export default Home;

 
const Age = () =>{
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator initialRouteName='Age' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Age" component={Age} />
        <Stack.Screen name="Cblf" component={Cblf} />
        <Stack.Screen name="Study" component={Study} />
       </Stack.Navigator>
    )
}

 const styles = StyleSheet.create({
 logoflag:{
    flex:2,
    alignItems:'center',
    justifyContent:'flex-end',
    gap:20
 },

 button:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around'
 },
 btn:{
    backgroundColor:'red',
    width:130,
    height:45,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
 },
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

 })