import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

const Chat = ({ route, navigation }) => {
    const { username, background } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: username });
      }, []);

 return (
   <View style={[styles.container, { backgroundColor: background }]}>
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
 }
});

export default Chat;