import { useEffect, useState } from 'react';
import { StyleSheet, View, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, InputToolbar } from "react-native-gifted-chat";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MapView from 'react-native-maps';
import CustomActions from './CustomActions';

const Chat = ({ route, navigation, db, isConnected, storage }) => {
    const { userID, username, background } = route.params;
    const [messages, setMessages] = useState([]);
    const onSend = (newMessages) => {
      addDoc(collection(db, "messages"), newMessages[0]) //`addDoc(collection(db, "messages"), newMessages[0])` replaced `setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))`
    }

    const renderInputToolbar = (props) => {
      if (isConnected) return <InputToolbar {...props} />;
      else return null;
     }

    // useEffect hook to set chat start & system messages
    let unsubMessages; 
    useEffect(() => {
      if (isConnected === true) {
        // unregister current onSnapshot() listener to avoid registering multiple listeners when useEffect code is re-executed.
      if (unsubMessages) unsubMessages();
      unsubMessages = null;
        navigation.setOptions({ title: username }); // set username at top of page
        const q = query(collection(db, "messages"), orderBy("createdAt", "desc")); //`orderBy("createdAt", "desc")` replaced `where("uid", "==", userID)`
        unsubMessages = onSnapshot(q, (docs) => { //replaced `documentsSnapshot` by `docs`
          let newMessages = [];
          docs.forEach(doc => {
            newMessages.push({
              id: doc.id,
              ...doc.data(),
              createdAt: new Date(doc.data().createdAt.toMillis())
            });
          });
      cacheMessages(newMessages);
      setMessages(newMessages);
    });
    } else {
      loadCachedMessages();
      }

    // Clean up code
    return () => {
        if (unsubMessages) unsubMessages();
      }
    // setMessages no longer needed, fetching msgs fm database in real time     
    /*setMessages([ 
        {
          _id: 1,
          text: `Hello ${username}, you’ve entered the chat!`,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native"
          },
        },
        {
        _id: 2,
        text: 'Welcome to Chat App',
        createdAt: new Date(),
        system: true,
      }
      ]); */ 
    }, [isConnected]);   

    // Function that fetches messages from Firestore database and cache messages onSnapshot callback, when isConnected is TRUE
    const cacheMessages = async (messagesToCache) => {
      try {
        await AsyncStorage.setItem("messages", JSON.stringify(messagesToCache));
      } catch (error) {
        console.log(error.message);
      }
    };

    // Function that loads cached messages from the local storage, when isConnected is FALSE
    const loadCachedMessages = async () => {
      const cachedMessages = await AsyncStorage.getItem("messages") || [];
      setMessagess(JSON.parse(cachedMessages));
    };

    // Function for creating the “action” button to the left of the message composer (input field)
    const renderCustomActions = (props) => {
      return <CustomActions storage={storage} {...props} />;
    };

    // Function sending location and rendering a map
    const renderCustomView = (props) => {
      const { currentMessage} = props;
      if (currentMessage.location) {
        return (
            <MapView
              style={{width: 150,
                height: 100,
                borderRadius: 13,
                margin: 3}}
              region={{
                latitude: currentMessage.location.latitude,
                longitude: currentMessage.location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
        );
      }
      return null;
    };

 //UI display (selected backgroundColor & starts chat with GiftedChat, Comms features)
 return (
   <View style={[styles.container, { backgroundColor: background }]}>
      <GiftedChat
        messages={messages}
        renderInputToolbar={renderInputToolbar}
        onSend={messages => onSend(messages)}
        renderActions={renderCustomActions}
        renderCustomView={renderCustomView}
        user={{
          _id: userID,
          name: username
        }}
   />
   { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
 }
});

export default Chat;