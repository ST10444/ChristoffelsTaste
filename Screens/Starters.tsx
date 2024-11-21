import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

interface StartersProps {
  navigation: any; // Replace with a more specific type if needed
}

const Starters = ({ navigation }: StartersProps) => {
  // State to store the starter items
  const [starterItems, setStarterItems] = useState([
    {
      name: 'Bruschetta',
      description: 'Grilled bread topped with diced tomatoes, garlic, and basil.',
      price: 150.00, // Store the price as a number for easy calculations
    },
    // You can add more starter items here
  ]);

  // Function to calculate the average price of all meals
  const calculateAveragePrice = () => {
    const totalPrice = starterItems.reduce((sum, item) => sum + item.price, 0);
    return (totalPrice / starterItems.length).toFixed(2); // Return as a string with 2 decimal places
  };

  // Function to handle adding a new starter (just an example, in a real app it would come from a form)
  const addNewStarter = () => {
    const newStarter = {
      name: 'Caprese Salad',
      description: 'Fresh mozzarella, tomatoes, and basil drizzled with olive oil.',
      price: 180.00,
    };

    setStarterItems([...starterItems, newStarter]); // Add the new starter and update the state
  };

  // Function to handle deleting a starter item
  const deleteStarter = (index: number) => {
    const newStarterItems = starterItems.filter((_, i) => i !== index); // Remove item at the given index
    setStarterItems(newStarterItems); // Update the state with the new list
  };

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

      {/* Display the starter items */}
      {starterItems.map((item, index) => (
        <View key={index} style={styles.menuItemContainer}>
          <Text style={styles.menuItem}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>R{item.price.toFixed(2)}</Text>

          {/* Delete button for each starter item */}
          <TouchableOpacity onPress={() => deleteStarter(index)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Average price display */}
      <View style={styles.averagePriceContainer}>
        <Text style={styles.averagePriceLabel}>Average Price:</Text>
        <Text style={styles.averagePrice}>R{calculateAveragePrice()}</Text>
      </View>

      {/* Button to simulate adding a new starter */}
      <TouchableOpacity onPress={addNewStarter} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New Starter</Text>
      </TouchableOpacity>
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
  averagePriceContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  averagePriceLabel: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  averagePrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow',
  },
  addButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: 'white',
  },
  deleteButton: {
    marginTop: 10,
    padding: 8,
    backgroundColor: '#F44336',
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    fontSize: 16,
    color: 'white',
  },
});
