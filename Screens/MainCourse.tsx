import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

interface MainCourseProps {
  navigation: any; // Replace with a more specific type if needed
}

const MainCourse = ({ navigation }) => {
  const mainCourseItems = [
    {
      name: 'Grilled Salmon',
      description: 'Delicious grilled salmon served with lemon butter sauce.',
      price: 'R15.00',
    },
    {
      name: 'Chicken Alfredo',
      description: 'Creamy Alfredo sauce over fettuccine pasta with grilled chicken.',
      price: 'R13.00',
    },
    {
      name: 'Vegetable Stir Fry',
      description: 'Mixed seasonal vegetables stir-fried in a savory sauce.',
      price: 'R11.00',
    },
    {
      name: 'Beef Tacos',
      description: 'Soft tacos filled with seasoned beef and fresh toppings.',
      price: 'R12.00',
    },
    {
      name: 'Pasta Primavera',
      description: 'Pasta tossed with fresh vegetables and light olive oil.',
      price: 'R10.00',
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

      <Text style={styles.title}>Main Course </Text>
      {mainCourseItems.map((item, index) => (
        <View key={index} style={styles.menuItemContainer}>
          <Text style={styles.menuItem}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default MainCourse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  arrowButton: {
    padding: 10,
  },
  arrow: {
    fontSize: 24,
    color: 'white',
  },
  logo: {
    width: 100, // Adjust width as needed
    height: 50, // Adjust height as needed
    alignSelf: 'center',
    marginBottom: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  navItem: {
    fontSize: 18,
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  menuItemContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#222', // Dark background for item
    marginBottom: 15,
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#aaa',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
