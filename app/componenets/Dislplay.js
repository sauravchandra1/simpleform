import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Alert
} from 'react-native';

var { height } = Dimensions.get('window')
var boxHeight = (height - 20) / 2
var inputHeight = boxHeight / 4

import Entry from './Entry'

export default class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formArray: [],
        }
    }
    render() {
        let formEntries = this.state.formArray.map((value, key) => {
            return <Entry key={key}
                value={value}
            />
        })
        return (
            <View style={styles.boxHeightBottom}>
                <View style={styles.display}>
                    <View style={styles.row}>
                        <View style={styles.entry}>
                            <Text style={styles.menuText}>Entries</Text>
                        </View>
                    </View>
                    <ScrollView style={styles.scroll}>
                        {formEntries}
                    </ScrollView>
                </View>
            </View>
        );
    }
    showSuccess() {
        Alert.alert(
            'Success',
            'Form Submitted Successfully!',
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        )
    }
    addEntry() {
        let hobbies = ''
        if (this.props.cricket) {
            hobbies += 'Cricket'
        }
        if (this.props.football) {
            if (hobbies.length > 0) {
                hobbies += ', '
            }
            hobbies += 'Football'
        }
        if (this.props.dance) {
            if (hobbies.length > 0) {
                hobbies += ', '
            }
            hobbies += 'Dance'
        }
        if (hobbies.length == 0) {
            hobbies += 'None'
        }
        this.state.formArray.push({
            'firstName': this.props.firstName,
            'lastName': this.props.lastName,
            'email': this.props.email,
            'phone': this.props.phone,
            'cricket': this.props.cricket,
            'football': this.props.football,
            'dance': this.props.dance,
            'hobbies': hobbies,
        });
        this.setState({ formArray: this.state.formArray })
        this.showSuccess()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    boxHeightBottom: {
        height: boxHeight + 40,
    },
    display: {
        borderWidth: 4,
        borderColor: '#15582D',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    entry: {
        flex: 4,
        padding: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    entryName: {
        flex: 12,
        padding: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007575',
        borderColor: '#124E27',
        borderBottomWidth: 1,
        margin: 1,
    },
    entryPhone: {
        flex: 7,
        padding: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007575',
        borderColor: '#124E27',
        borderBottomWidth: 1,
        margin: 1,
    },
    entryEmail: {
        padding: 3,
        flex: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007575',
        borderColor: '#124E27',
        borderBottomWidth: 1,
        margin: 1,
    },
    entryHobbies: {
        flex: 12,
        padding: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007575',
        borderColor: '#124E27',
        borderBottomWidth: 1,
        margin: 1,
    },
    tableText: {
        fontSize: 15,
        color: '#ffffff',
        fontStyle: 'italic',
    },
    hobbiesText: {
        fontSize: 15,
        color: '#ffffff',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    scroll: {
        height: boxHeight + 15,
        borderTopColor: '#007575',
        borderTopWidth: 4,
        marginTop: 17,
    },
    entryContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
    },
});