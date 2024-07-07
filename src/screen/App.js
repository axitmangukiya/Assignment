import {StyleSheet, Text, View} from 'react-native'; // Import necessary React Native components
import React from 'react'; // Import React
import Btn from '../common/Btn'; // Import custom button component
import QRCode from 'react-native-qrcode-svg'; // Import QR code generator
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import MaterialCommunityIcons for icons
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome for icons

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        {/* Custom button for "share my card" */}
        <Btn
          style={{elevation: 10}} // Add elevation to the button
          Title={'share my card'} // Button title
          IconName="chevron-down" // Icon name from MaterialCommunityIcons
        />

        {/* QR code container */}
        <View style={styles.qrCode}>
          <QRCode
            value="https://nexalink.co/" // QR code value
            size={200} // Size of the QR code
            logo={require('../assets/Nexa.jpg')} // Logo in the middle of QR code
            logoSize={40} // Size of the logo
            logoBackgroundColor="transparent" // Transparent background for the logo
          />
        </View>

        {/* Card container for additional options */}
        <View style={styles.card}>
          {/* Each card item with icon and text */}
          <View style={styles.cardItem}>
            <FontAwesomeIcon name="share-square-o" size={25} color={'gray'} />
            <Text style={styles.cardText}>Share my card</Text>
          </View>

          <View style={styles.cardItem}>
            <Icon name="wallet-outline" size={25} color={'gray'} />
            <Text style={styles.cardText}>Add card to wallet</Text>
          </View>

          <View style={styles.cardItem}>
            <Icon name="cellphone-text" size={25} color={'gray'} />
            <Text style={styles.cardText}>Add card to homescreen</Text>
          </View>

          <View style={styles.cardItem}>
            <Icon name="email-multiple-outline" size={25} color={'gray'} />
            <Text style={styles.cardText}>Create Email signature</Text>
          </View>

          <View style={styles.cardItem}>
            <Icon name="wallpaper" size={25} color={'gray'} />
            <Text style={styles.cardText}>Create virtual background</Text>
          </View>
        </View>

        {/* Custom button for "share with AirDrop" */}
        <Btn
          style={{elevation: 5}} // Add elevation to the button
          Title={'share with AirDrop'} // Button title
          IconName="broadcast" // Icon name from MaterialCommunityIcons
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full height of the screen
    backgroundColor: 'white', // Set background color to white
    alignItems: 'center', // Center items horizontally
    padding: 20, // Add padding around the container
  },
  card: {
    backgroundColor: '#E8E8E8', // Light gray background color for the card
    borderRadius: 10, // Rounded corners
    justifyContent: 'center', // Center items vertically
    padding: 20, // Add padding inside the card
    marginVertical: 40, // Add vertical margin
  },
  cardItem: {
    flexDirection: 'row', // Arrange items in a row
    paddingVertical: 10, // Add vertical padding
    alignItems: 'center', // Center items vertically
  },
  cardText: {
    fontWeight: '500', // Semi-bold text
    color: 'gray', // Gray text color
    textAlign: 'center', // Center text
    fontSize: 15, // Font size 15
    marginLeft: 5, // Add left margin
  },
  qrCode: {
    alignItems: 'center', // Center QR code horizontally
    marginTop: 40, // Add top margin
  },
});
