import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    // Navigate to the Login page
    navigation.navigate('Login'); // Replace 'Login' with the actual name of your login route
  };

  const handleEnterPress = () => {
    // Handle the Enter button action
    console.log("Enter button pressed");
    // You can add your logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ChristoffelsTaste</Text>

      <Image
        source={require('./Logo.png')}
        style={styles.logo} // Add styles to the logo
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 450, // Adjust as needed
    height: 450, // Adjust as needed
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'green', // Button color for Login
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10, // Space between buttons
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
