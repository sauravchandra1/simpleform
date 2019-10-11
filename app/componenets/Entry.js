import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Modal,
    Alert,
    Dimensions,
} from 'react-native';

var { width, height } = Dimensions.get('window')

export default class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View style={styles.container}>
                <Modal
                    transparent={true}
                    animationType='fade'
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible)
                    }}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={styles.modalButton}
                            onPress={() => {
                                this.props.editMethod()
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text style={styles.modalText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={styles.modalButton}
                            onPress={() => {
                                this.props.deleteMethod()
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                            <Text style={styles.modalText}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={styles.modalButton}
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text style={styles.modalText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <TouchableOpacity onLongPress={() => { this.setModalVisible(true) }}
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
    modalView: {
        position: 'absolute',
        elevation: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#0b5345',
        height: height / 4,
        padding: 10,
        margin: 90,
        marginTop: 180,
        width: width / 2,
    },
    modalText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',

    },
    modalButton: {
        zIndex: 11,
        backgroundColor: '#16a085',
        width: 150,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        marginTop: 5,
    },
});