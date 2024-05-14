import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from './screens/Home';
import {Post} from './screens/Post';
import {PostCreate} from './screens/PostCreate';
import {ContextProvider} from './Context';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="PostCreate" component={PostCreate} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;
