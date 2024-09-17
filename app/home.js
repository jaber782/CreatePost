import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Link, router } from "expo-router";
import Test from "./createPost";





const home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <Image source={require("./hridoy.jpeg")} style={styles.image} />
        <Pressable
          onPress={() => router.replace("/createPost")}
          style={styles.button}
        >
          <Text style={styles.text}>Create Post</Text>
        </Pressable>
      </View>
      <View>
      </View>
    </ScrollView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "black",
  },
  container1: {
    flex: 1,
    // backgroundColor: 'black',
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: 10,
  },
  button: {
    backgroundColor: "hotpink",
    padding: 15,
    marginTop: 20,
    width: "70%",
    borderRadius: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
