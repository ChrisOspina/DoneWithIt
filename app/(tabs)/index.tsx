import {
  Platform,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import { useDeviceOrientation } from '@react-native-community/hooks';


export default function HomeScreen() {
  console.log('App Executed');

  const orientation = useDeviceOrientation()

  //Just to output the dimension
  //console.log(Dimensions.get('screen'))

  //console.log(useWindowDimensions());
  console.log(orientation);

  return (
      <View style={
          {
            backgroundColor:"#fff",
            flex:1,
            flexDirection: "row", //horizontal
            justifyContent: "center", //main axis
            alignItems:"stretch" //secondary
            
          }
        }>
        <View style={{
            width: 100,
            height: 300,
            backgroundColor:"dodgerblue"
          }}/>

        <View style={{
          backgroundColor:"gold",
          flex: 1,
          width: 100,
          height: 200,
        }}/>
        <View style={{
              backgroundColor:"tomato",
              flex: 1,
              width: 100,
              height: 100,
            }}/>
      </View>
//       <View>
//              <TouchableNativeFeedback onPress={()=>console.log("Image pressed")}>
//                   <Image
//                     fadeDuration={1000}
//                     source={{
//                       width: 200,
//                       height: 300,
//                       uri: "https://picsum.photos/200/300"}}/>
//                   </TouchableNativeFeedback>
//        <Button
//           color= "orange"
//           title='Click Me'
//           onPress={()=> Alert.alert("Test Alert", "Button clicked",[
//             {text: "Yes", onPress:()=> console.log("Yes")},
//             {text: "No", onPress:()=> console.log}
//           ])}>
//       </Button>
//       </View>
  );
}

//const containerStyle = {backgroundColor:"orange"};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
  }
});
