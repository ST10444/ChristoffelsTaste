import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';



import Home from './Screens/Home';
import Login from './Screens/Login';
import Starters from './Screens/Starters';
import MainCourse from './Screens/MainCourse';
import Dessert from './Screens/Dessert';
import Menu from './Screens/Menu';

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
      <Stack.Screen name='Menu' component={Menu} options={{headerShown:false}}/>
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='Starters' component={Starters} options={{headerShown:false}}/>
      <Stack.Screen name='MainCourse' component={MainCourse} options={{headerShown:false}}/>
      <Stack.Screen name='Dessert' component={Dessert} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    backgroundColor: "grey",
    
  }
});

