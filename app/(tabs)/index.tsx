import { Alert, Button, Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  console.log('App Executed');

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text>Hello React Native</Text>
      <View style={{width:200, height:70, backgroundColor:"dodgerblue" }}/>
      <TouchableNativeFeedback onPress={()=>console.log("Image pressed")}>
      <Image
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"}}/>
      </TouchableNativeFeedback>
       <Button
          color= "orange"
          title='Click Me'
          onPress={()=> Alert.alert("Test Alert", "Button clicked",[
            {text: "Yes", onPress:()=> console.log("Yes")},
            {text: "No", onPress:()=> console.log}
          ])}>
      </Button>
    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor:"orange"};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
