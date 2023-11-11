
import { StyleSheet, View, FlatList, Text, ActivityIndicator } from 'react-native';
import FriendListItem from '../components/FriendListItem';
import { useState, useEffect } from 'react';

export default function HomeScreen({ navigation }) {

    async function fetchData() {
        setIsLoading(true);
        try {
            const response = await fetch("https://randomuser.me/api?results=20");
            const json = await response.json();

            setData(json.results);
            setIsLoading(false);
        } catch (error) {
            alert("Fehler beim laden");
            setIsLoading(false);
        }

    }

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        async function fetchData() {

            try {
                const response = await fetch("https://randomuser.me/api?results=20");
                const json = await response.json();

                setData(json.results);
                setIsLoading(false);
            } catch (error) {
                alert("Fehler beim laden");
                setIsLoading(false);
            }

        }
        fetchData();
    }, []);

    if (isLoading) {
        return <View style={styles.center}><ActivityIndicator size="large" color="darkorange" /></View>
    }

    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={({ item }) => {
                return <FriendListItem friend={item} onPress={() => navigation.navigate("Friend", { friend: item })} />

            }}
                keyExtractor={(item) => item.email}
                ItemSeparatorComponent={<View style={styles.listSeperator} />}
                ListEmptyComponent={<Text style={styles.listEmpty}>Keine Daten gleaden</Text>}

                refreshing={isLoading}
            // onRefresh={fetchData}
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
    },
    listEmpty: {
        fontSize: 32,
        paddingTop: 100,
        textAlign: "center"
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
