import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

interface StartersProps {
  navigation: any; // Replace with a more specific type if needed
}

const Starters = ({ navigation }) => {
  const starterItems = [
    {
      name: 'Bruschetta',
      description: 'Grilled bread topped with diced tomatoes, garlic, and basil.',
      price: 'R150.00',
    },
    
    
  ];

  return (
    <View style={styles.container}>
      {/* Arrow container with the back arrow */}
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowButton}>
          <Text style={styles.arrow}>Back</Text>
        </TouchableOpacity>
      </View>

      {/* Logo centered above the navigation bar */}
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Image
          source={require('./Logo.png')} // Update this path to your logo
          style={styles.logo}
        />
      </TouchableOpacity>

      {/* Navigation bar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Starters')}>
          <Text style={styles.navItem}>Starters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MainCourse')}>
          <Text style={styles.navItem}>Main Course</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Dessert')}>
          <Text style={styles.navItem}>Dessert</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Starters Menu</Text>
      {starterItems.map((item, index) => (
        <View key={index} style={styles.menuItemContainer}>
          <Text style={styles.menuItem}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default Starters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10, // Space below the arrow
  },
  arrowButton: {
    padding: 15,
    color: 'white',
  },
  arrow: {
    fontSize: 24,
    color: 'white',
  },
  logo: {
    width: 110, // Adjust width as needed
    height: 70, // Adjust height as needed
    alignSelf: 'center', // Center the logo
    marginBottom: 10, // Space below the logo
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  navItem: {
    fontSize: 18,
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  menuItemContainer: {
    marginBottom: 15, // Space between menu items
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#222', // Optional: background color for the item
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 14,
    color: 'grey',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
