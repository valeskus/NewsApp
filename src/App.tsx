import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from './screens/Home';
import {Post} from './screens/Post';
import {PostCreate} from './screens/PostCreate';
import {ContextProvider} from './Context';
import {StatusBar} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  PostCreate: undefined;
  Post: {
    id: string;
  };
};

const Stack = createNativeStackNavigator();
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

function App(): React.JSX.Element {
  return (
    <ContextProvider>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="PostCreate" component={PostCreate} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;
