import React from 'react';
import {
  TouchableOpacity, // Provides touch feedback when pressed
  Text, // Used for displaying text
  Dimensions, // Provides screen dimensions
  StyleSheet, // Allows for defining styles
  View, // Container for other components
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Icon library for adding icons

// Get the screen dimensions
const {height, width} = Dimensions.get('window');

// Button component with customizable title, onPress event, icon, and styles
const Btn = ({Title, onpress, IconName, style}) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onpress}>
      <View style={styles.content}>
        {/* Conditionally render the icon if IconName is provided */}
        {IconName && <Icon name={IconName} size={25} color={'#FFFFFF'} />}
        <Text style={styles.title}>{Title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Btn;

// Define styles for the button and its content
const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row', // Arrange children in a row
    height: height * 0.06, // Set height relative to screen height
    width: width * 0.7, // Set width relative to screen width
    borderRadius: height + width / 2, // Make the button rounded
    alignItems: 'center', // Center children vertically
    justifyContent: 'center', // Center children horizontally
    backgroundColor: '#FF6000', // Set button background color
    elevation: 5, // Add shadow for Android
  },
  content: {
    flexDirection: 'row', // Arrange children in a row
    alignItems: 'center', // Center children vertically
  },
  title: {
    marginLeft: 10, // Add space between icon and text
    fontSize: 16, // Set font size
    fontWeight: '700', // Set font weight
    color: '#FFFFFF', // Set text color
  },
});
