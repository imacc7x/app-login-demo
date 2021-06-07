import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SendEmailScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
             <View style={{ flex: 1, width: '90%', top: '25%'}}>

                <View style={{alignItems : 'center'}}>
                    <Feather name="check-circle" size={140} color="#48d3ff" />

                    <Text style={styles.textStyleHead}>สำเร็จ</Text>

                    <Text style={styles.textStyle}>ส่ง link สำหรับรีเซตรหัสผ่านของคุณสำเร็จแล้ว</Text>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginScreen")}>
                        <Text style={styles.textStyle}>ตกลง</Text>
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
        fontSize: 18,
        fontFamily: 'Itim',
      
    },
    textStyleHead: {
        fontSize: 30,
        fontFamily: 'Itim',
        marginBottom: '3%',
        marginTop:'20%'
    },
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#48d3ff',
        alignItems: 'center',
        marginTop: '10%',
        justifyContent:'center',
        width: '100%'
    },
});

export default SendEmailScreen;







