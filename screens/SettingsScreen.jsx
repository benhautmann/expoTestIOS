import { StyleSheet, Text, View, SectionList } from 'react-native';


export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    { title: "Verion", data: [{ name: "Version 1.0" },] },
                    { title: "Impressum", data: [{ name: "Firma XYZ" }, { name: "(c) 2023" }] }
                ]}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                renderSectionHeader={({ section }) => (<Text style={styles.section}>{section.title}</Text>)}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
    },
    section: {
        backgroundColor: "whitesmoke",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "lightgrey",
        fontSize: 18,
        padding: 5
    }
});
