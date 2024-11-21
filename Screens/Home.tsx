import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    // Navigate to the Login page
    navigation.navigate('Login'); // Replace 'Login' with the actual name of your login route
  };

  const handleReservePress = () => {
    // Navigate to the Reservation page
    navigation.navigate('Reservation'); // Replace 'Reservation' with the actual name of your reservation route
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

      <TouchableOpacity style={styles.reserveButton} onPress={handleReservePress}>
        <Text style={styles.buttonText}>Reserve</Text>
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
  reserveButton: {
    backgroundColor: 'green', // Button color for Reserve
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
