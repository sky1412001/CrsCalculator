import React, { useState } from 'react';
import { View} from 'react-native';
import { Picker } from '@react-native-picker/picker';
const Sub = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [showPickers, setShowPickers] = useState(false);

  const handleValueChange = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);
    setShowPickers(false); // Show additional pickers
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Picker
       dropdownIconColor={'red'}
        style={{ color: 'red', backgroundColor: 'blue' }}
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
      >
        <Picker.Item label="Select Option" value="" />
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
      </Picker>
      {showPickers && selectedValue === 'option1' && (
         <View key="option1-picker">
        <Picker
          selectedValue={selectedValue} // You might want to manage these states independently``
          onValueChange={(itemValue, itemIndex) => {
          }}
        >
``        </Picker>
        </View>
      )}

      {showPickers && selectedValue === 'option2' && (
         <View key="option2-picker">
        <Picker
          selectedValue={selectedValue} // You might want to manage these states independently
          onValueChange={(itemValue, itemIndex) => {
          }}
        >
        </Picker>
        </View>
      )}
      {showPickers && selectedValue === 'option3' && (
         <View key="option3-picker">
        <Picker
          selectedValue={selectedValue} 
          onValueChange={(itemValue, itemIndex) => {
          }}
        >
        </Picker>
            </View>
      )}
    </View>
  );
};

export default Sub;
