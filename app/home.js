import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Link, router, Stack } from "expo-router";
import Test from "../components/createPost";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import pr from '../assets/hridoy.jpeg'
// {text:'Hello Native', img:''},
//     {text:'Hello', img:''},
//     {text:'Hello1', img:''},
//     {text:'Hello2', img:''},
//     {text:'Hello3', img:''},
//     {text:'Hello4', img:''}


const home = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const [post, setPost] = useState([
    
  ]);


  useEffect(() => {
    console.log(post)
  }, [post]);

  return (
    <SafeAreaView style={{backgroundColor:"#18191a"}}>
      <Test modalVisible={modalVisible} setModalVisible={setModalVisible} post={post} setPost={setPost}/>
      <Stack.Screen options={{title:"Home", headerShown:true}} />

      <FlatList
        ListHeaderComponent={()=> (<View style={styles.container1}>
          <Image source={require('../assets/hridoy.jpeg')} style={styles.image} />
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.button}
          >
            <Text style={styles.text}>Create Post</Text>
          </Pressable>
        </View>)}
        ListFooterComponent={() => (<View style={{height:50}}></View>)}
        data={post}
        renderItem={({item}) => (<TouchableWithoutFeedback onPress={()=>{}}>
          <View style={{marginTop:20, padding:10,backgroundColor:'salmon'}}>
            <Text style={{color:'white'}}> Hey{item?.text}</Text>
            <Image source={{uri:item?.img}} style={styles.image1} />
          </View>
        </TouchableWithoutFeedback>)}
        keyExtractor={(pst) => pst.text}
      />
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  container1: {
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:300
  },
  
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: 10,
  },
  image1: {
    height: 200,
    width: '100%',
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
