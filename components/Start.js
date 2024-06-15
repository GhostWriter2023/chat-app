import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native';

const Start = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const colors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];
    const [background, setBackground] = useState('');

 return (
   <View style={styles.container}>
     <ImageBackground
       source={require("../images/BckgrdImage.png")}
       style={styles.imageBackground}
     >
       <Text style={styles.title}>Chat App</Text>
       <View style={styles.box}>
         {/* user types name */}
         <View style={styles.inputContainer}>
            <Image 
                source={require("../images/textfield-icon.png")} 
                style={styles.icon} 
              />
            <TextInput
              style={styles.textInput}
              value={username}
              onChangeText={setUsername}
              placeholder="Your name"
              placeholderTextColor="#757083"
            />
         </View>
         <Text style={styles.chooseBgColor}>Choose Background Color:</Text>
         {/* user selects backgroung color */}
         <View style={styles.colorButtonContainer}>
           {colors.map((color, index) => (
             <TouchableOpacity
               key={index}
               accessible={true}
               accessibilityRole="button"
               accessibilityHint="Personalize the background color for your chat screen"
               style={[
                 styles.colorButton,
                 { backgroundColor: color },
                 background === color && styles.selectedColor,
               ]}
               onPress={() => setBackground(color)}
             />
           ))}
         </View>
         {/* to start chat */}
         <TouchableOpacity
           accessible={true}
           accessibilityRole="button"
           accessibilityHint="Option to enter the chat room"
           style={styles.button}
           onPress={() => navigation.navigate('Chat', { username: username, background: background })}
         >
           <Text style={styles.buttonText}>Start Chatting</Text>
         </TouchableOpacity>
       </View>
     </ImageBackground>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageBackground: {
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center', 
    height: '100%',
    width: '100%'
  },
  title: {
    flex: 1,
    fontSize: 55, 
    fontWeight: '600', 
    color: '#FFFFFF',
    margin: 85
  },
  box: {
    // Chat Box background color: white 
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    width: '88%',
    height: '44%',
    bottom: 0,
    marginBottom: '6%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  inputContainer: {
    // Chat Box text input field (icon & textInput container)
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#757083',
    borderWidth: 1,
    borderRadius: 4,
    width: '88%',
    marginBottom: 10,
    paddingHorizontal: 10
  },  
  icon: {
    // Chat Box text input field (icon param)
    width: 20,
    height: 20,
    marginRight: 10
  },
  textInput: {
    // Chat Box text input field (text param)
    flex: 1,
    color: '#757083',
    fontSize: 16, 
    fontWeight: '300', 
    opacity: 0.5
    },
  chooseBgColor:{
    // Choose Bckgd text color: light grayish purple 
    color: '#757083',
    fontSize: 16,
    fontWeight: '300',
    opacity: 100
  },
  colorButtonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5
},
selectedColor:{
    // Choose Bckgd buttons selected option ring color: neon purple 
    borderColor: '#9D00FF',
    borderWidth: 4
},
  button:{
    // Start Chatting Button color: light grayish purple 
    alignItems: 'center',
    backgroundColor: '#757083',
    borderRadius: 4,
    height: '20%',
    justifyContent: 'center',
    padding: 10,
    width: '88%'
  },
  buttonText: {
    // Start Chatting Button text
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF'
  }
});

export default Start;