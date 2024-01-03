import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/Home';
import ChapterList from './src/screen/ChapterList';
import ShowPDF from './src/screen/ShowPdf';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1F2B60',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="ChapterList"
          component={ChapterList}
          options={({route}) => ({
            title: route.params.title || 'Previous Year Paper',
          })}
        />
        <Stack.Screen name="ShowPDF" component={ShowPDF} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
