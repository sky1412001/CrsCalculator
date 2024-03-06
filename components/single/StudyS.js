import React,{useState} from "react";
import { SafeAreaView, Text, View, TouchableOpacity, Image, ScrollView, Pressable } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import {addPoints, refreshState} from './../../actions/pointsActions';
import { Picker } from '@react-native-picker/picker';

const refresh = require('../assets/rets.png')

const StudyS = () => {
    const [pickerValue, setPickerValue] = useState('');

    const points = useSelector((state) => state.points.points);
    const dispatch = useDispatch();
    const handleAddPoints = itemValue => {
        if (itemValue === '17') {
            dispatch(addPoints(0));
        } else if (itemValue === '18') {
            dispatch(addPoints(30));
        } else if (itemValue === '19') {
            dispatch(addPoints(90));
        } else if (itemValue === '20') {
            dispatch(addPoints(98));
        } else if (itemValue === '30') {
            dispatch(addPoints(120));
        } else if (itemValue === '31') {
            dispatch(addPoints(128));
        } else if (itemValue === '32') {
            dispatch(addPoints(135));
        } else if (itemValue === '33') {
            dispatch(addPoints(150));
        }
    };
    return (
        <SafeAreaView>
            <View
                style={{
                    borderRadius: 10,
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 10,

                }}>
                <Picker
                    style={{
                        flex: 1, width: 343, height: 40, backgroundColor: '#BA181B',
                        color: 'white', fontSize: 20,
                    }}
                    selectedValue={pickerValue}
                    onValueChange={(itemValue, itemIndex) => {
                        setPickerValue(itemValue);
                        handleAddPoints(itemValue);
                    }}
                >
                    <Picker.Item label="Select your Education" value="" />
                    <Picker.Item label=" Less than secondary school (high school)	" value="17" />
                    <Picker.Item label=" Secondary diploma (high school graduation)" value="18" />
                    <Picker.Item label="One-year degree, diploma or certificate from  a university, college, trade or technical school, or other institute" value="19" />
                    <Picker.Item label="Two-year program at a university, college, trade or technical school, or other institute" value="20" />
                    <Picker.Item label="Bachelor's degree OR  a three or more year program at a university, college, trade or technical school, or other institute" value="30" />
                    <Picker.Item label="Two or more certificates, diplomas, or degrees. One must be for a program of three or more years" value="31" />
                    <Picker.Item label="Master's degree, OR professional degree needed to practice in a licensed profession (For “professional degree,” the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)" value="32" />
                    <Picker.Item label="Doctoral level university degree (Ph.D.)" value="33" />
                </Picker>
            </View>
        </SafeAreaView>
    )
}

export default StudyS;