
import { StyleSheet, View, FlatList } from 'react-native';
import FriendListItem from '../components/FriendListItem';
// nur für Commit


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList data={[
                { first: "Alice", last: "Smith", email: "test1@example.de" },
                { first: "Bob", last: "Smith", email: "test2@example.de" },
                { first: "Jane", last: "Smith", email: "test3@example.de" },
                { first: "Joe", last: "Smith", email: "test4@example.de" },

            ]} renderItem={({ item }) => {
                return <FriendListItem friend={item} onPress={() => navigation.navigate("Friend", { friend: item })} />

            }}
                keyExtractor={(item) => item.email}
                ItemSeparatorComponent={<View style={styles.listSeperator} />}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        paddingTop: 50,
    },
    listSeperator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: "lightsalmon"
    }
});
