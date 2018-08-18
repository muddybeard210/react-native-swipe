import React, { Component } from "react";
import { View, Animated, PanResponder } from "react-native";

class Deck extends Component {
  state = {};
  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      debugger;
      console.log(gesture);
    },
    onPanResponderRelease: () => {}
  });

  renderCards = () => {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  };

  render() {
    return <View {...this.panResponder.panHandlers}>{this.renderCards()}</View>;
  }
}

export default Deck;
