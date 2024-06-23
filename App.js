import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
// import the screens we want to navigate
import Start from './components/Start';
import Chat from './components/Chat';

import { Alert, LogBox } from 'react-native';
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  const connectionStatus = useNetInfo();

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
  const storage = getStorage(app); // Initialize the storage handler

  // useEffect() is used to  implement a real-time network connectivity detection system
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

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
          {props => <Chat isConnected={connectionStatus.isConnected} db={db} storage={storage} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>  
      </NavigationContainer>
  );
}

export default App;