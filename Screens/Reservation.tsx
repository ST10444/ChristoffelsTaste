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
