import { Image, Text, Pressable, StyleSheet, View } from "react-native";




export default function FriendListItem({ friend, onPress }) {

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={require("../assets/lucyVerkleinert.png")} />
            <View style={styles.info}>
                <Text style={styles.name}>{friend.first} {friend.last}</Text>
                <Text style={styles.email}>{friend.email}</Text>
            </View>

        </Pressable>
    );
}


const styles = StyleSheet.create({
    container: {

        height: 70,
        flexDirection: "row",
        gap: 10,
        padding: 10,
        alignItems: "center",
    },
    image: {
        height: 50, width: 50, borderRadius: 25
    },
    info: {
        justifyContent: "space-evenly"
    },
    name: { fontSize: 20 },
    email: { fontSize: 16, fontWeight: "100" },
})
