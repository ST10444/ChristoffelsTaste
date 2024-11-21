import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

interface DessertProps {
  navigation: any; // Replace with a more specific type if needed
}

const Dessert = ({ navigation }: DessertProps) => {
  // State to manage the dessert items
  const [dessertItems, setDessertItems] = useState([
    {
      name: 'Tiramisu',
      description: 'Classic Italian dessert made with coffee-soaked ladyfingers.',
      price: 'R7.00',
    },
    // Add more items as needed
  ]);

  // Function to calculate the average price
  const calculateAveragePrice = () => {
    const totalPrice = dessertItems.reduce(
      (acc, item) => acc + parseFloat(item.price.replace('R', '')),
      0
    );
    return totalPrice / dessertItems.length;
  };

  // Function to simulate adding a new item
  const addNewItem = () => {
    const newItem = {
      name: 'Chocolate Cake',
      description: 'Rich and moist chocolate cake with a creamy frosting.',
      price: 'R9.00',
    };

    // Update the dessert items list
    setDessertItems([...dessertItems, newItem]);
  };

  // Function to handle deleting a dessert item
  const deleteItem = (index: number) => {
    const newDessertItems = dessertItems.filter((_, i) => i !== index); // Remove item at the given index
    setDessertItems(newDessertItems); // Update the state with the new list
  };

  return (
    <View style={styles.container}>
      {/* Arrow container with the back arrow */}
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowButton}>
          <Text style={styles.arrow}>←</Text>
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

      {/* Title for the section */}
      <Text style={styles.title}>Dessert Menu</Text>

      {/* Dessert Menu Items */}
      {dessertItems.map((item, index) => (
        <View key={index} style={styles.menuItemContainer}>
          <Text style={styles.menuItem}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>

          {/* Delete button for each dessert item */}
          <TouchableOpacity onPress={() => deleteItem(index)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Average Price */}
      <Text style={styles.averagePrice}>Average Price: R{calculateAveragePrice().toFixed(2)}</Text>

      {/* Button to add a new dessert item */}
      <TouchableOpacity style={styles.addButton} onPress={addNewItem}>
        <Text style={styles.addButtonText}>Add New Item</Text>
      </TouchableOpacity>
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
    padding: 15,
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
  averagePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#4CAF50', // Green background
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: 'white',
  },
  deleteButton: {
    backgroundColor: '#F44336', // Red background
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  deleteButtonText: {
    fontSize: 16,
    color: 'white',
  },
});
