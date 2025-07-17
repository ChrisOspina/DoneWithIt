import { Image, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  console.log('App Executed');

  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <Image 
        blurRadius={10}
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
