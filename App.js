import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import the screens we want to navigate
import Start from './components/Start';
import Chat from './components/Chat';

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiHB1Sl0SKUH5cjPpRuo2n0W8sByTukno",
  authDomain: "chat-app-27f9a.firebaseapp.com",
  projectId: "chat-app-27f9a",
  storageBucket: "chat-app-27f9a.appspot.com",
  messagingSenderId: "746556239962",
  appId: "1:746556239962:web:ade4d228c4c8b8c4732863"
};

const app = initializeApp(firebaseConfig); // Initialize Firebase
const db = getFirestore(app); // Initialize Cloud Firestore and get a reference to the service

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
           name="Start"
           component={Start}
        />
        <Stack.Screen name="Chat">
           {props => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>  
      </NavigationContainer>
  );
}

export default App;