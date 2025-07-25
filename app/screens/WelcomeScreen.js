import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/images/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image  style={styles.logo} source={require('../assets/images/react-logo.png')}/>
                <Text>Seize the Day!</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center"
    },

    loginButton:{
        width:'100%',
        height:70,
        backgroundColor:"#fc5c65"
    },

    logo:{
        width:100,
        height:100,
    },
    
    logoContainer:{
        position: "absolute",
        top:50,
        alignItems:"center",
    },

    registerButton:{
        width:'100%',
        height:70,
        backgroundColor:"#4ecdc4"
    }
    
})

export default WelcomeScreen;