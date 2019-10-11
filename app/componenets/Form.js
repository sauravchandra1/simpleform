import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    CheckBox,
    Alert,
} from 'react-native';

var { height } = Dimensions.get('window')
var boxHeight = (height - 20) / 2
var inputHeight = boxHeight / 4

import Display from './Dislplay'

export default class Form extends React.Component {
    componentDidMount() {
    }
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            cricket: false,
            football: false,
            dance: false,
            editMode: false,
            key: ''
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
                            onChangeText={(firstName) => this.setState({ firstName })}
                            value={this.state.firstName}
                            placeholder='First Name'
                            placeholderTextColor='gray'
                            underlineColorAndroid='transparent'>
                        </TextInput>
                        <TextInput style={styles.textInput}
                            onChangeText={(lastName) => this.setState({ lastName })}
                            value={this.state.lastName}
                            placeholder='Last Name'
                            placeholderTextColor='gray'
                            underlineColorAndroid='transparent'>
                        </TextInput>
                    </View>
                    <View style={styles.inputHeight, styles.row}>
                        <View style={styles.email}>
                            <TextInput style={styles.textInput}
                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}
                                placeholder='Email'
                                placeholderTextColor='gray'
                                underlineColorAndroid='transparent'>
                            </TextInput>
                        </View>
                        <View style={styles.phone}>
                            <TextInput style={styles.textInput}
                                onChangeText={(phone) => this.setState({ phone })}
                                value={this.state.phone}
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
                                onChange={() => this.toggleCheckBox('cricket')}>
                            </CheckBox>
                            <Text style={styles.checkBoxText}>Cricket</Text>
                        </View>
                        <View style={styles.checkBoxInput}>
                            <CheckBox style={styles.checkBox} value={this.state.football}
                                onChange={() => this.toggleCheckBox('football')}>
                            </CheckBox>
                            <Text style={styles.checkBoxText}>Football</Text>
                        </View>
                        <View style={styles.checkBoxInput}>
                            <CheckBox style={styles.checkBox} value={this.state.dance}
                                onChange={() => this.toggleCheckBox('dance')}>
                            </CheckBox>
                            <Text style={styles.checkBoxText}>Dance</Text>
                        </View>
                    </View>
                    <View style={styles.submitHeight}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={this.addEntry.bind(this)}
                            style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.boxHeightBottom}>
                    <Display ref='display' firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        phone={this.state.phone}
                        cricket={this.state.cricket}
                        football={this.state.football}
                        dance={this.state.dance}
                        editMethod={(entry, key) => this.editEntry(entry, key)}
                    />
                </View>
            </View>
        );
    }
    toggleCheckBox(hobby) {
        if (hobby === 'cricket') {
            this.setState({ cricket: !this.state.cricket })
        } else if (hobby === 'football') {
            this.setState({ football: !this.state.football })
        } else if (hobby === 'dance') {
            this.setState({ dance: !this.state.dance })
        }
    }
    showError(errorMsg) {
        Alert.alert(
            "Please Enter Valid Details!",
            errorMsg,
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        )
    }
    nameValid(firstName, lastName) {
        let lenCheck = true
        if (firstName.length > 15) {
            lenCheck = false
        }
        if (lastName.length > 15) {
            lenCheck = false
        }
        var nameReg = /^[A-Za-z]+$/
        if (firstName.match(nameReg) && lastName.match(nameReg) && lenCheck) {
            return true
        } else {
            return false
        }
    }
    emailValid(email) {
        let lenCheck = true
        if (email.length > 30) {
            lenCheck = false
        }
        var emailReg = /^[A-Za-z0-9_]+([\.-]?[A-Za-z0-9_]+)*@[A-Za-z]+(\.[A-Za-z]{2,3})+$/
        if (email.match(emailReg)) {
            return true
        } else {
            return false
        }
    }
    phoneValid(phone) {
        var phoneReg = /^\d{10}$/
        if (phone.match(phoneReg)) {
            return true
        } else {
            return false
        }
    }
    addEntry() {
        var isNameValid = this.nameValid(this.state.firstName, this.state.lastName)
        var isEmailValid = this.emailValid(this.state.email)
        var isPhoneValid = this.phoneValid(this.state.phone)
        if (!this.refs.display.emailExist() && !this.state.editMode || this.state.editMode) {
            if (isNameValid && isEmailValid && isPhoneValid) {
                if (this.state.editMode) {
                    this.state.editMode = !this.state.editMode
                    this.refs.display.editAddEntry(this.state.key)
                } else {
                    this.refs.display.addEntry()
                }
                this.setState({ firstName: '' })
                this.setState({ lastName: '' })
                this.setState({ email: '' })
                this.setState({ phone: '' })
                this.setState({ cricket: false })
                this.setState({ football: false })
                this.setState({ dance: false })
            } else {
                let nameError = '* Name is not correct'
                let emailError = '* Email is not correct'
                let phoneError = '* Phone Number is not correct'
                let errorMsg = ''
                if (!isNameValid) {
                    errorMsg += nameError
                }
                if (!isEmailValid) {
                    if (errorMsg.length > 0) {
                        errorMsg += '\n'
                    }
                    errorMsg += emailError
                }
                if (!isPhoneValid) {
                    if (errorMsg.length > 0) {
                        errorMsg += '\n'
                    }
                    errorMsg += phoneError
                }
                this.showError(errorMsg)
            }
        } else {
            this.showError('* Email Already Exist!')
        }
    }
    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray });
    }
    editEntry(entry, key) {
        this.setState({ firstName: entry.firstName })
        this.setState({ lastName: entry.lastName })
        this.setState({ email: entry.email })
        this.setState({ phone: entry.phone })
        this.setState({ cricket: entry.cricket })
        this.setState({ football: entry.football })
        this.setState({ dance: entry.dance })
        this.setState({ editMode: true })
        this.setState({ key: key })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    boxHeightTop: {
        height: boxHeight - 40,
    },
    boxHeightBottom: {
        height: boxHeight + 40,
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
        right: 95,
        backgroundColor: '#17a589',
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