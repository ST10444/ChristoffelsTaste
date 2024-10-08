import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

interface DessertProps {
  navigation: any; // Replace with a more specific type if needed
}

const Dessert = ({ navigation }) => {
  const dessertItems = [
    {
      name: 'Tiramisu',
      description: 'Classic Italian dessert made with coffee-soaked ladyfingers.',
      price: 'R7.00',
    },
    {
      name: 'Chocolate Lava Cake',
      description: 'Rich chocolate cake with a gooey molten center.',
      price: 'R8.00',
    },
    {
      name: 'Cheesecake',
      description: 'Creamy cheesecake with a graham cracker crust.',
      price: 'R6.50',
    },
    {
      name: 'Apple Pie',
      description: 'Traditional apple pie with a flaky crust and cinnamon.',
      price: 'R5.50',
    },
    {
      name: 'Panna Cotta',
      description: 'Silky smooth Italian dessert topped with berry sauce.',
      price: 'R6.00',
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

      <Text style={styles.title}>Dessert Menu</Text>
      {dessertItems.map((item, index) => (
        <View key={index} style={styles.menuItemContainer}>
          <Text style={styles.menuItem}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default Dessert;

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
