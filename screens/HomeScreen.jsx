import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../constants/Styles";

// Our HomeScreen is a simple React Functional Component.
// Notice how it doesn't use "useState" or "useEffect"
// It simply returns what we want our view to look like!
export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require("../assets/mdb_logo.png")}
          style={styles.imageLogo}
        />
      </View>
      {/* To create a custom-styled button, we're using a <Text/> component wrapped in a 
            <TouchableOpacity/> component. TouchableOpacity takes in a function, onPress, that is called
            when the user taps on that view. Here, we navigate to the Play screen.  */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Play")}
      >
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
    </View>
  );
}