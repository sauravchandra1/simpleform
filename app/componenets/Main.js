import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    Dimensions,
    CheckBox,
} from 'react-native';

var { height } = Dimensions.get('window')
var boxHeight = (height - 20) / 2
var inputHeight = boxHeight / 4

export default class Main extends React.Component {
    componentDidMount() {
    }
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            cricket: false,
            football: false,
            dance: false,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Moodcafe</Text>
                </View>
                <View style={styles.boxHeightTop, styles.container}>
                    <View style={styles.inputHeight, styles.row}>
                        <TextInput style={styles.textInput}
                            onChangeText={(noteText) => this.setState({ noteText })}
                            value={this.state.noteText}
                            placeholder='First Name'
                            placeholderTextColor='gray'
                            underlineColorAndroid='transparent'>
                        </TextInput>
                        <TextInput style={styles.textInput}
                            onChangeText={(noteText) => this.setState({ noteText })}
                            value={this.state.noteText}
                            placeholder='Last Name'
                            placeholderTextColor='gray'
                            underlineColorAndroid='transparent'>
                        </TextInput>
                    </View>
                    <View style={styles.inputHeight, styles.row}>
                        <View style={styles.email}>
                            <TextInput style={styles.textInput}
                                onChangeText={(noteText) => this.setState({ noteText })}
                                value={this.state.noteText}
                                placeholder='Email'
                                placeholderTextColor='gray'
                                underlineColorAndroid='transparent'>
                            </TextInput>
                        </View>
                        <View style={styles.phone}>
                            <TextInput style={styles.textInput}
                                onChangeText={(noteText) => this.setState({ noteText })}
                                value={this.state.noteText}
                                placeholder='Phone'
                                placeholderTextColor='gray'
                                underlineColorAndroid='transparent'>
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.inputHeight, styles.row}>
                        <View style={styles.checkBoxInput}>
                            <Text style={styles.hobbies}>Hobbies</Text>
                        </View>
                        <View style={styles.checkBoxInput}>
                            <CheckBox style={styles.checkBox} value={this.state.cricket}
                                onChange={() => this.toggleCheckBox()}>
                            </CheckBox>
                            <Text style={styles.checkBoxText}>Cricket</Text>
                        </View>
                        <View style={styles.checkBoxInput}>
                            <CheckBox style={styles.checkBox} value={this.state.cricket}
                                onChange={() => this.toggleCheckBox()}>
                            </CheckBox>
                            <Text style={styles.checkBoxText}>Football</Text>
                        </View>
                        <View style={styles.checkBoxInput}>
                            <CheckBox style={styles.checkBox} value={this.state.cricket}
                                onChange={() => this.toggleCheckBox()}>
                            </CheckBox>
                            <Text style={styles.checkBoxText}>Dance</Text>
                        </View>
                    </View>
                    <View style={styles.submitHeight}>
                        <TouchableOpacity onPress={this.addNote.bind(this)}
                            style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.boxHeightBottom}>
                    <Text style={styles.textInput}>Moodcafe</Text>
                </View>
            </View>
        );
    }
    toggleCheckBox() {
        this.setState({ cricket: !this.state.cricket })
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
    boxHeightBottom: {
        height: boxHeight + 20,
    },
    boxHeightTop: {
        height: boxHeight - 20,
    },
    inputHeight: {
        height: inputHeight,
    },
    submitHeight: {
        height: inputHeight - 20,
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
    form: {
        flex: 1,
        top: 5,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        flex: 1,
        alignSelf: 'stretch',
        padding: 5,
        backgroundColor: '#EBEBEB',
        borderColor: '#939393',
        borderBottomWidth: 3,
        marginTop: 4,
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    phone: {
        flex: 7,
        flexDirection: 'row',
    },
    email: {
        flex: 12,
        flexDirection: 'row',
    },
    checkBoxInput: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#EBEBEB',
        marginTop: 4,
    },
    checkBoxText: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    hobbies: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007575',
    },
    submitButton: {
        position: 'absolute',
        zIndex: 11,
        right: 100,
        backgroundColor: '#007575',
        width: 170,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        marginTop: 5,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});