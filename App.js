// App.js

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import { Age, Cblf , Study, Work , Error, Exp} from './components/married';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Age" component={Age}/>
        <Stack.Screen name='Study' component={Study}/>
        <Stack.Screen name='Cblf' component={Cblf} />
        <Stack.Screen name='Work' component={Work}/>
        <Stack.Screen name='Error' component={Error} />
        <Stack.Screen name='Exp' component={Exp}/>
       </Stack.Navigator>
    </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
