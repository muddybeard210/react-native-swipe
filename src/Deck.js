import React, { Component } from "react";
import { View, Animated, PanResponder } from "react-native";

class Deck extends Component {
  state = {};

  position = new Animated.ValueXY();

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      // this.position = gesture.
      this.position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: () => {}
  });

  getCardStyle = () => {
    console.log("doodle");
    return {
      ...this.position.getLayout(),
      transform: [{ rotate: "45deg" }]
    };
  };

  renderCards = () => {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={this.getCardStyle()}
            {...this.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return this.props.renderCard(item);
    });
  };

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default Deck;
