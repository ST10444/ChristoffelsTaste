import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

interface MainCourseProps {
  navigation: any; // Replace with a more specific type if needed
}

const MainCourse = ({ navigation }: MainCourseProps) => {
  // Sample main course items
  const [mainCourseItems, setMainCourseItems] = useState([
    {
      name: 'Grilled Salmon',
      description: 'Delicious grilled salmon served with lemon butter sauce.',
      price: 15.00, // Store as number for easier calculation
    },
  ]);

  // Function to calculate the average price
  const calculateAveragePrice = () => {
    const totalPrice = mainCourseItems.reduce((acc, item) => acc + item.price, 0);
    return totalPrice / mainCourseItems.length;
  };

  // Adding a new item to the menu (example)
  const addNewItem = () => {
    const newItem = {
      name: 'Spaghetti Carbonara',
      description: 'Classic Italian pasta with creamy carbonara sauce.',
      price: 14.00, // Use a number format for easier calculations
    };

    setMainCourseItems([...mainCourseItems, newItem]);
  };

  // Function to delete a menu item
  const deleteItem = (index: number) => {
    const updatedItems = mainCourseItems.filter((_, i) => i !== index);
    setMainCourseItems(updatedItems);
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
      <Text style={styles.title}>Main Course</Text>

      {/* Main Course Menu Items */}
      {mainCourseItems.map((item, index) => (
        <View key={index} style={styles.menuItemContainer}>
          <Text style={styles.menuItem}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>R{item.price.toFixed(2)}</Text>

          {/* Delete button for each item */}
          <TouchableOpacity onPress={() => deleteItem(index)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Average Price */}
      <Text style={styles.averagePrice}>Average Price: R{calculateAveragePrice().toFixed(2)}</Text>

      {/* Button to simulate adding a new item */}
      <TouchableOpacity style={styles.addButton} onPress={addNewItem}>
        <Text style={styles.addButtonText}>Add New Item</Text>
      </TouchableOpacity>
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
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    fontSize: 16,
    color: 'white',
  },
});
