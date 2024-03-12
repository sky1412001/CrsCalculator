// App.js

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import { Age, Cblf , Study, Error, Exp, Celpip, Ielts,Tef, Tcf, Second, Work} from './components/married';
import { Ages, Studys, Cblfs, Exps, Celpips, Ieltss, Tcfs , Tefs, Works, Seconds } from './components/single';
import Splash from './components/Splash';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Age" component={Age}/>
        <Stack.Screen name='Study' component={Study}/>
        <Stack.Screen name='Cblf' component={Cblf} />
        <Stack.Screen name='Error' component={Error} />
        <Stack.Screen name='Exp' component={Exp}/>
        <Stack.Screen name='Celpip' component={Celpip}/>
        <Stack.Screen name='Ielts' component={Ielts} />
        <Stack.Screen name='Tef' component={Tef} />
        <Stack.Screen name='Tcf' component={Tcf} />
        <Stack.Screen name='Second' component={Second}/>
        <Stack.Screen name='Work' component={Work}/>
        <Stack.Screen name='Ages' component={Ages} />
        <Stack.Screen name='Studys' component={Studys} />
        <Stack.Screen name='Cblfs' component={Cblfs} />
        <Stack.Screen name='Exps' component={Exps} />
        <Stack.Screen name='Celpips' component={Celpips}/>
        <Stack.Screen name='Ieltss' component={Ieltss} />
        <Stack.Screen name='Tcfs' component={Tcfs} />
        <Stack.Screen name='Tefs' component={Tefs} />
        <Stack.Screen name='Works' component={Works} />
        <Stack.Screen name='Seconds' component={Seconds} />
       </Stack.Navigator>
    </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
