import { useEffect, useState } from 'react';
import { StyleSheet, View, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";

const Chat = ({ route, navigation }) => {
    const { username, background } = route.params;
    const [messages, setMessages] = useState([]);
    const onSend = (newMessages) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
    }

    // useEffect hook to set chat start & system messages    
    useEffect(() => {
      setMessages([
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
      ]);
    }, []);    

    // useEffect hook to set username at top of page
    useEffect(() => {
        navigation.setOptions({ title: username });
      }, []);

 //UI displays selected backgroundColor & starts chat with GiftedChat
 return (
   <View style={[styles.container, { backgroundColor: background }]}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1
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