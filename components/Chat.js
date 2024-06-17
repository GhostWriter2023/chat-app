import { useEffect, useState } from 'react';
import { StyleSheet, View, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";

const Chat = ({ route, navigation, db }) => {
    const { userID, username, background } = route.params;
    const [messages, setMessages] = useState([]);

    const onSend = (newMessages) => {
      addDoc(collection(db, "messages"), newMessages[0]) //`addDoc(collection(db, "messages"), newMessages[0])` replaced `setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))`
    }

    // useEffect hook to set chat start & system messages    
    useEffect(() => {
      navigation.setOptions({ title: username }); // set username at top of page
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc")); //`orderBy("createdAt", "desc")` replaced `where("uid", "==", userID)`
      const unsubMessages = onSnapshot(q, (docs) => { //replaced `documentsSnapshot` by `docs`
        let newMessages = [];
      docs.forEach(doc => {
        newMessages.push({
           id: doc.id,
           ...doc.data(),
           createdAt: new Date(doc.data().createdAt.toMillis())
        })
      })
      setMessages(newMessages);
    })
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
    }, []);   

 //UI displays selected backgroundColor & starts chat with GiftedChat
 return (
   <View style={[styles.container, { backgroundColor: background }]}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
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