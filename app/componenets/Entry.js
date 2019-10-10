import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class Entry extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.addNote.bind(this)}
                    style={styles.submitButton}
                    activeOpacity={0.9}>
                    <View style={styles.entryContainer}>
                        <View style={styles.row}>
                            <View style={styles.entryName}>
                                <Text style={styles.tableText}>
                                    {this.props.value.firstName} {this.props.value.lastName}
                                        </Text>
                            </View>
                            <View style={styles.entryPhone}>
                                <Text style={styles.tableText}>
                                    {this.props.value.phone}
                                        </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.entryEmail}>
                                <Text style={styles.tableText}>
                                    {this.props.value.email}
                                        </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.entryHobbies}>
                                <Text style={styles.tableText}>
                                    <Text style={styles.hobbiesText}>
                                        Hobbies: {' '}
                                    </Text>
                                    {this.props.value.hobbies}
                                    </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    addNote() {
        alert('Please Enter Someting!');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
    entryContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
    },
});