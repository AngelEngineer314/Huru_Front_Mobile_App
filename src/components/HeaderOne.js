import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';

const HeaderOne = props => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.header}>
      <LinearGradient colors={['#474E61', '#263238']}>
        <View style={styles.headerView}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{props.screenName}</Text>
          </View>
          <Modal 
            isVisible={modalVisible}
            style={styles.headerModal}
            onBackdropPress={() => setModalVisible(false)}
            onRequestClose={() => {
              props.navigation.navigate('Dashboard');
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.logOutView}>
                  <TouchableOpacity onClick={() => { props.navigation.navigate('Login'); }}>
                    <Text style={styles.logOut}>Log Out</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.counterView}>
                  <View style={styles.profileStat}>
                    <Image
                      style={{width: 40, height: 40, marginTop: 5}}
                      source={require('../../assets/header/interview.png')}
                    />
                    <Text style={styles.statName}>Total Interview </Text>
                    <Text style={styles.statNumber}> 20 </Text>
                  </View>
                  <View style={styles.profileStat}>
                    <Image
                      style={{width: 36, height: 36, marginTop: 5}}
                      source={require('../../assets/header/time.png')}
                    />
                    <Text style={styles.statName}>Total Interview </Text>
                    <Text style={styles.statNumber}> 34 </Text>
                  </View>
                  <View style={styles.specialNav}>
                    <TouchableOpacity onClick={() => { props.navigation.navigate('Setting'); }}>
                      <Text style={styles.specialTitle}> Settings </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}>
                      <IonIcon name="remove-outline" size={40} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            <View style={styles.profileView}>
              <Image
                style={styles.profilePic}
                source={require('../../assets/header/profile.jpg')}
              />
              <Entypo
                style={{marginTop: -8}}
                name="chevron-thin-down"
                color="#fff"
                size={30}
              />
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  logOutView: {
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderBottomColor: '#F17720',
    borderBottomWidth: 2,
    paddingVertical: 20,
  },
  logOut: {
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#F17720',
  },
  counterView: {},
  profileStat: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    paddingVertical: 1,
    backgroundColor: '#FFF1E3',
    borderBottomWidth: 1,
    borderBottomColor: '#FF640F',
  },
  statName: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: 22,
    paddingHorizontal: 20,
    color: '#000000',
    fontFamily: 'Poppins',
  },
  statNumber: {
    lineHeight: 32,
    fontSize: 36,
    lineHeight: 54,
    color: '#F17720',
    fontFamily: 'Poppins',
  },
  specialNav: {
    height: 70,
    backgroundColor: '#FFC256',
    alignItems: 'center',
    paddingTop: 10,
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
  },
  specialTitle: {
    fontSize: 22,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  header: {
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  headerView: {
    minHeight: 140,
    borderBottomEndRadius: 20,
    overflow: 'hidden',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleView: {},
  title: {
    color: '#ffffff',
    fontSize: 22,
    fontFamily: 'Poppins',
    fontWeight: '400',
    marginTop: 20,
  },
  profileView: {
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 999,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 30,
  },
  headerModal: {
    margin: 0,
  }
});

export default withNavigation(HeaderOne);
