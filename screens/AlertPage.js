import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const ALertPage = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

 

  return (
    <View style={styles.container}>
      <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default ALertPage;