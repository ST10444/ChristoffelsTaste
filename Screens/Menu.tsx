import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react';

const Menu = ({ navigation }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Starters');
  const [menuItems, setMenuItems] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const categories = ['Starters', 'Main Course', 'Dessert'];

  const addDish = () => {
    if (dishName && description && price) {
      const newItem = {
        name: dishName,
        description,
        price,
        category,
      };
      setMenuItems([...menuItems, newItem]);
      setDishName('');
      setDescription('');
      setPrice('');
    }
  };

  const deleteDish = (index) => {
    const updatedItems = menuItems.filter((_, i) => i !== index);
    setMenuItems(updatedItems);
  };

  const renderCategoryItems = (category) => {
    const filteredItems = menuItems.filter(item => item.category === category);

    return (
      <View>
        <Text style={styles.categoryTitle}>{category}</Text>
        {filteredItems.length === 0 ? (
          <Text>No dishes available in this category.</Text>
        ) : (
          <FlatList
            data={filteredItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.menuItemContainer}>
                <Text style={styles.menuItem}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => deleteDish(index)}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Clickable Logo */}
      <TouchableOpacity onPress={() => navigation.navigate('Starters')}>
        <Image
          source={require('./Logo.png')} // Update this path to your logo
          style={styles.logo}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Chef Menu Management</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
      />

      {/* Dropdown for Categories */}
      <TouchableOpacity onPress={() => setShowCategories(!showCategories)} style={styles.dropdown}>
        <Text style={styles.dropdownText}>{category}</Text>
      </TouchableOpacity>
      
      {showCategories && (
        <FlatList
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => {
                setCategory(item);
                setShowCategories(false);
              }}
            >
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={addDish}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>

      {/* Render items for each category */}
      {categories.map(renderCategoryItems)}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  logo: {
    width: 100,
    height: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    
  },
  dropdown: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
  dropdownText: {
    fontSize: 16,
  },
  categoryItem: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryText: {
    fontSize: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  menuItemContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
