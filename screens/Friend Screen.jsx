
import { StyleSheet, Text, View, Button } from 'react-native';


export default function FriendScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>DetailAnsicht</Text>
            <Button title="Gehe zurück" onPress={() => navigation.goBack()} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
