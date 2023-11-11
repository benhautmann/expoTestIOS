
import { StyleSheet, Text, Image, ScrollView, Dimensions } from 'react-native';


export default function FriendScreen({ navigation, route }) {
    const { friend } = route.params;
    return (
        <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
            <Image style={styles.image} source={{ uri: friend.picture.large }} />
            <Text>{friend.name.first} {friend.name.last}</Text>

        </ScrollView>
    );
}

const width = Dimensions.get("window").width * 0.80;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: '#fff',

    },
    image: {
        height: width,
        width: width
    }
});
