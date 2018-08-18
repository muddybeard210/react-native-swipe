import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import Deck from "./src/Deck";
import { Card, Button } from "react-native-elements";
import DATA from "./src/dummyData";

export default class App extends React.Component {
  renderCard = item => {
    return (
      <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
        <Text style={{ marginBottom: 10 }}>
          I can customize the Card further.
        </Text>
        <Button
          icon={{ name: "code" }}
          backgroundColor="#FFA7AF"
          raised
          title="View Now!"
        />
      </Card>
    );
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        maximumZoomScale={50}
        minimumZoomScale={1}
      >
        <Deck style={styles.deck} data={DATA} renderCard={this.renderCard} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20
  },
  deck: {
    flexDirection: "row",
    flexWrap: "nowrap"
  }
});
