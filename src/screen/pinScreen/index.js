import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const PinScreen = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { setTouchId } = route.params;

  const closeModal = () => {
    setModalVisible(true);
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setModalVisible(setTouchId);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={[styles.container, modalVisible ? '' : { backgroundColor: '#009ccc' }]}>
      <View style={{ flex: 1, width: '90%', top: '20%', alignItems: 'center' }}>

        <View>
          <Text style={styles.textStyle}>กรุณากรอกรหัส PIN</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.circleBeforePin} />
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
          <TouchableOpacity>
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

        <TouchableOpacity>
            <View style={styles.iconSize} >
              <MaterialCommunityIcons name="fingerprint" size={60} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.circleButton} >
              <Text style={styles.numberStyle}>0</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.iconSize}>
              <Feather name="delete" size={60} color="black" />
            </View>
          </TouchableOpacity>


        </View>


        <Modal transparent={true} visible={!modalVisible}>
          <View style={{ flex: 1, top: '30%' }}>
            <View style={styles.modalView} >

              <MaterialCommunityIcons name="fingerprint" size={55} color="black" />
              <Text style={styles.textStyleModal}>Touch ID for</Text>
              <Text style={styles.textStyleModal}>"CGS AppLication"</Text>
              <Text style={{ fontFamily: 'Itim', marginTop: '5%' }}>เข้าใช้งานด้วย Touch ID หรือ</Text>
              <Text style={{ fontFamily: 'Itim' }}>ยกเลิกเพื่อกลับไปใช้รหัส PIN</Text>

              <View style={{ width: '100%', flex: 1 }}>
                <View style={{ flex: 1, width: '100%' }}/>

                <TouchableOpacity style={styles.buttonModal}>
                  <Text style={styles.textStyleModal}>Enter Password</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonModal} onPress={closeModal}>
                  <Text style={styles.textStyleModal}>ยกเลิก</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>

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
  textStyleModal: {
    fontSize: 20,
    fontFamily: 'Itim',
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
  circleButton: {
    width: 66,
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
  },
  modalView: {
    margin: 50,
    height: 320,
    backgroundColor: '#ccf3ff',
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,


    alignItems: 'center',
  },
  buttonModal: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#48d3ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1%'
  },
  iconSize: {
    width: 65, 
    height: 65, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});

export default PinScreen;







