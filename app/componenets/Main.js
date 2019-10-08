import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    Dimensions
} from 'react-native';

var { height } = Dimensions.get('window')
var boxHeight = (height / 2) - 20

export default class Main extends React.Component {
    componentDidMount() {
    }
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            phone: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Moodcafe</Text>
                </View>
                <View style={styles.form, styles.divHeight}>
                    <TextInput style={styles.textInput}
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                        placeholder='Email'
                        placeholderTextColor='gray'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                    <View style={styles.name}>
                        <TextInput style={styles.textInput}
                            onChangeText={(noteText) => this.setState({ noteText })}
                            value={this.state.noteText}
                            placeholder='Name'
                            placeholderTextColor='gray'
                            underlineColorAndroid='transparent'>
                        </TextInput>
                        <TextInput style={styles.textInput}
                            onChangeText={(noteText) => this.setState({ noteText })}
                            value={this.state.noteText}
                            placeholder='Email'
                            placeholderTextColor='gray'
                            underlineColorAndroid='transparent'>
                        </TextInput>
                    </View>
                </View>
                <View style={styles.divHeight}>
                    <Text style={styles.textInput}>Moodcafe</Text>
                </View>
                {/* <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
    addNote() {
        if (this.state.noteText) {
            var d = new Date();
            this.state.noteArray.push({
                'date': d.getDate() +
                    "/" + (d.getMonth() + 1) +
                    "/" + d.getFullYear(),
                'note': this.state.noteText,
            });
            this.setState({ noteArray: this.state.noteArray })
            this.setState({ noteText: '' })
        } else {
            alert('Please Enter Someting!');
        }
    }
    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    divHeight: {
        height: boxHeight,
    },
    header: {
        backgroundColor: '#007575',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 4,
        borderBottomColor: '#274D33',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,

    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    form: {
        top: 5,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        flex: 1,
        alignSelf: 'stretch',
        padding: 10,
        backgroundColor: '#EBEBEB',
        borderColor: '#939393',
        borderBottomWidth: 3,
        marginTop: 4,
    },
    name: {
        flex: 1,
        flexDirection: 'row'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#EBEBEB',
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
});