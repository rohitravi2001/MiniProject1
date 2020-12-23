import React from "react";
import { View } from "react-native";

import { styles } from "../constants/Styles";
import { nameToPic } from "../constants/Constants";

const names = Object.keys(nameToPic);

export default class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* TODO: What attributes do you need to store on this screen's state?
          Put them here, and set their default values. */
      timeLeft: 5000,
    };
    this.timer = null;
  }

  // componentDidMount is called when this component "mounts", or, informally,
  // shows up on the screen for the first time. We typically put code in here
  // that is used to set up the screen/view.
  componentDidMount = () => {
    this.getNextRound();
    this.timer = setInterval(() => this.countDown(), 10);
  };

  countDown = () => {
    if (this.state.timeLeft > 0) {
      this.setState({
        timeLeft: this.state.timeLeft - 10,
      });
    } else {
      this.setState(
        {
          timeLeft: 5000,
        },
        () => {
          this.getNextRound();
        }
      );
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  getNextRound() {
    // Fetches the next member name to guess.
    let correct = names[Math.floor(Math.random() * names.length)];
    let correctName = nameToPic[correct][0];

    // Generate 3 more wrong answers.
    let nameOptions = [correctName];
    while (nameOptions.length < 4) {
      let wrong = names[Math.floor(Math.random() * names.length)];
      let wrongName = nameToPic[wrong][0];
      if (!nameOptions.includes(wrongName)) {
        nameOptions.push(wrongName);
      }
    }

    this.setState({
      // TODO: Update the appropriate state attributes
      // using the appropriate local variables defined in this function.
    });
  }

  // This function might be helpful to use somewhere...
  selectedButton = () => {
    // TODO: Do something to update state.
    this.getNextRound();
  };

  render = () => {
    return (
      <View style={styles.container}>
        {/* TODO: Construct your component tree here. */}
      </View>
    );
  };
}
