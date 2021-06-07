import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SetPinScreen = ({ navigation }) => {
    const [cornfirmPin, setConfirmPin] = React.useState(false);
    const [pin, setPin] = React.useState(0);

    const handleSetPin = (num) => {
        setPin(num);
        setConfirmPin(true);
    }

    const handleConfirmPin = (num) => {
        if (pin == num) {
            navigation.navigate("SetTouchIdScreen")
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, width: '90%', top: '20%', alignItems: 'center' }}>

                <View>
                    {cornfirmPin === true ?
                        <Text style={styles.textStyle}>
                            ยืนยันรหัส PIN CODE
                        </Text> :
                        <Text style={styles.textStyle}>
                            ตั้งรหัส PIN CODE
                        </Text>
                    }
                </View>

                <View style={{ flexDirection: 'row' }}>
                    {cornfirmPin === true ?
                        <View style={styles.circleAfterPin} /> : <View style={styles.circleBeforePin} />
                    }
                    <View style={styles.circleBeforePin} />
                    <View style={styles.circleBeforePin} />
                    <View style={styles.circleBeforePin} />
                    <View style={styles.circleBeforePin} />
                    <View style={styles.circleBeforePin} />
                   
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: '20%' }}>
                    <TouchableOpacity>
                        <View style={styles.circleButton} >
                            <Text style={styles.numberStyle}>1</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.circleButton} >
                            <Text style={styles.numberStyle}>2</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.circleButton} >
                            <Text style={styles.numberStyle}>3</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: '10%' }}>
                    <TouchableOpacity onPress={cornfirmPin === false ? () => handleSetPin(4) : () => handleConfirmPin(4)}>
                        <View style={styles.circleButton} >
                            <Text style={styles.numberStyle} >4</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.circleButton} >
                            <Text style={styles.numberStyle}>5</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.circleButton} >
                            <Text style={styles.numberStyle}>6</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: '10%' }}>
                    <TouchableOpacity>
                        <View style={styles.circleButton} >
                            <Text style={styles.numberStyle}>7</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.circleButton} >
                            <Text style={styles.numberStyle}>8</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.circleButton} >
                            <Text style={styles.numberStyle}>9</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', width: '90%', marginTop: '10%', justifyContent: 'space-between' }}>

                    <View style={{ width: 66, height: 65 }} />

                    <TouchableOpacity>
                        <View style={styles.circleButton} >
                            <Text style={styles.numberStyle}>0</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ width: 65, height: 65, justifyContent: 'center', alignItems: 'center' }}>
                            <Feather name="delete" size={60} color="black" />
                        </View>
                    </TouchableOpacity>


                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccf3ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'Itim',
        marginVertical: '5%'
    },
    circleBeforePin: {
        width: 35,
        height: 35,
        borderRadius: 100 / 2,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 3,
        marginLeft: '1%'
    },
    circleAfterPin: {
        width: 35,
        height: 35,
        borderRadius: 100 / 2,
        backgroundColor: '#48d3ff',
        borderColor: 'black',
        borderWidth: 3,
        marginLeft: '1%'
    },
    circleButton: {
        width: 65,
        height: 65,
        borderRadius: 100 / 2,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberStyle: {
        fontSize: 30,
        fontFamily: 'Itim',
    }
});

export default SetPinScreen;







