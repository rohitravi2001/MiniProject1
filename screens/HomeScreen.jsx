import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../constants/Styles";
import { TouchableOpacity } from "react-native-gesture-handler";

// Our HomeScreen is a simple React Class Component.
// It doesn't need to override any methods, since there isn't any logic
// or state associated with it. Thus, it only has the render() method.
export default class HomeScreen extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <View style={{ height: "20%", width: "100%" }}>
          <Image
            source={require("../assets/mdb_logo.png")}
            style={{
              flex: 1,
              width: null,
              height: null,
              marginBottom: 15,
              resizeMode: "contain",
            }}
          />
        </View>
        <View>
          {/* This is a button that, when clicked, takes us to the GameScreen.
              Notice how the parameter is "play" - it's the TITLE STRING of 
              that screen that we defined in App.js. */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Play")}
          >
            <Text style={styles.buttonText}>Play</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}
