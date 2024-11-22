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
import Reservation from './Screens/Reservation';

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
      <Stack.Screen name='Reservation' component={Reservation} options={{headerShown:false}}/>
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
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username && password) {
            // Here you can add authentication logic (API calls, etc.)
            Alert.alert('Login Successful', `Welcome, ${username}!`);
            // Navigate to the next screen after login (e.g., ClientsMenu)
            navigation.navigate('Starters');
        } else {
            Alert.alert('Error', 'Please enter both username and password.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 16,
    },
    title: {
        color: 'white',
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '100%',
        backgroundColor: 'white',
    },
});
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control'; // Import SegmentedControl

const Reservation = ({ navigation }) => { // Access navigation prop
  // State to store the input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(1);

  // Function to handle form submission
  const handleSubmit = () => {
    // Simple validation
    if (!name || !email || !date || !time) {
      alert('Please fill in all fields');
      return;
    }

    // Handle the reservation submission logic
    alert(`Reservation for ${name} has been made!`);
    console.log({
      name,
      email,
      date,
      time,
      partySize,
    });
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow Container */}
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowButton}>
          <Text style={styles.arrow}>←</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Make a Reservation</Text>

      <View style={styles.form}>
        {/* Name Input */}
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        {/* Email Input */}
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />

        {/* Date Input */}
        <Text style={styles.label}>Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Select a date"
          value={date}
          onChangeText={setDate}
        />

        {/* Time Input */}
        <Text style={styles.label}>Time:</Text>
        <TextInput
          style={styles.input}
          placeholder="Select a time"
          value={time}
          onChangeText={setTime}
        />

        {/* Party Size - Segmented Control */}
        <Text style={styles.label}>Party Size:</Text>
        <SegmentedControl
          values={['1', '2', '3', '4', '5', '6', '7', '8']} // Options for party size
          selectedIndex={partySize - 1}
          onChange={(event) => setPartySize(parseInt(event.nativeEvent.value))}
        />

        {/* Submit Button */}
        <Button title="Submit Reservation" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  form: {
    marginBottom: 20,
    color: 'white',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'white',
  },
});

export default Reservation;
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
