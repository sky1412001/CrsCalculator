// App.js

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import { Age, Cblf , Study, Work , Error, Exp, Celpip, Ielts,Tef, Tcf, Second,} from './components/married';
import { Sub } from './components/single';

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
        <Stack.Screen name='Celpip' component={Celpip}/>
        <Stack.Screen name='Ielts' component={Ielts} />
        <Stack.Screen name='Tef' component={Tef} />
        <Stack.Screen name='Tcf' component={Tcf} />
        <Stack.Screen name='Sub' component={Sub} />
        <Stack.Screen name='Second' component={Second}/>
       </Stack.Navigator>
    </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
