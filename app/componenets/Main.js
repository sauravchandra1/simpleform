import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.heaederText}>- Noter -</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>

                </ScrollView>
                <View style={styles.footer}>
                    <TextInput style={styles.textInput}
                        placeholder='>note'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});