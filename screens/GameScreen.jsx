import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import { styles } from "../constants/Styles";
import { nameToPic } from "../constants/Constants";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";
const names = Object.keys(nameToPic);

/* Here, we have a React functional component. 
    This function returns the JSX that defines the GameScreen. */
export default function GameScreen() {
  // TODO: Declare and initialize state variables here, using "useState".

  // The timer is handled for you.
  const [timeLeft, setTimeLeft] = useState(5000);

  // This method is called by the timer every 10 seconds.
  const countDown = () => {
    if (timeLeft > 0) {
      // Time is still left, so decrement time state variable.
      setTimeLeft(timeLeft - 10);
    } else {
      // TODO: Time has expired. Update state here.
    }
  };

  // This is used in the useEffect(...) hook bound on a specific STATE variable.
  // It updates state to present a new member & name options.
  const getNextRound = () => {
    // Fetches the next member name to guess.
    let correct = names[Math.floor(Math.random() * names.length)];
    let correctName = nameToPic[correct][0];
    let correctImage = nameToPic[correct][1];

    // Generate 3 more wrong answers.
    var nameOptions = [correctName];
    while (nameOptions.length < 4) {
      let wrong = names[Math.floor(Math.random() * names.length)];
      let wrongName = nameToPic[wrong][0];
      if (!nameOptions.includes(wrongName)) {
        nameOptions.push(wrongName);
      }
    }
    nameOptions = shuffle(nameOptions);

    // TODO: Update state here.

    setTimeLeft(5000);
  };

  // Called when user taps a name option.
  // TODO: Update correct # and total # state values.
  const selectedNameChoice = (index) => {};

  // Call the countDown() method every 10 milliseconds.
  useEffect(() => {
    const timer = setInterval(() => countDown(), 10);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  // TODO: Finish this useEffect() hook such that we automatically
  // get the next round when the appropriate state variable changes.
  useEffect(
    () => {
      getNextRound();
    },
    [
      /* TODO: Your State Variable Goes Here */
    ]
  );

  // Set up four name buttons, with the appropriate names and onPress handlers.
  const nameButtons = [];
  for (var i = 0; i < 4; i++) {
    const j = i;
    nameButtons.push(
      // A button is just a Text component wrapped in a TouchableOpacity component.
      <TouchableOpacity
        key={i}
        style={styles.button}
        onPress={() => selectedNameChoice(j)}
      >
        <Text style={styles.buttonText}>
          {/* TODO: Use something from state here. */}
        </Text>
      </TouchableOpacity>
    );
  }

  // Style & return the view.
  return (
    <View style={styles.container}>
      {/* TODO: Build out your UI using Text and Image components
          Hint: What does the nameButtons list above hold? What types of objects is this list storing? 
                Really get a sense of whats going on in the for loop above this return statement. */}
    </View>
  );
}
