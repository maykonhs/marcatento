import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
  Image,
  Modal,
} from 'react-native';

import {
  ANIVALDO,
  ARI,
  DENER,
  MARCELO,
  MAYKON,
  TCHE
} from '../images';

export default class App extends Component {

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxTitle}>Escolha o marreco</Text>
            <View style={styles.photoModalContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.props.onCancel()
                  this.props.setImage(MAYKON)
                }}>
                <Image style={styles.teamImage} source={MAYKON} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.onCancel()
                  this.props.setImage(MARCELO)
                }}>
                <Image style={styles.teamImage} source={MARCELO} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.onCancel()
                  this.props.setImage(DENER)
                }}>
                <Image style={styles.teamImage} source={DENER} />
              </TouchableOpacity>
            </View>
            <View style={styles.photoModalContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.props.onCancel()
                  this.props.setImage(ARI)
                }}>
                <Image style={styles.teamImage} source={ARI} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.onCancel()
                  this.props.setImage(ANIVALDO)
                }}>
                <Image style={styles.teamImage} source={ANIVALDO} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.onCancel()
                  this.props.setImage(TCHE)
                }}>
                <Image style={styles.teamImage} source={TCHE} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

const fullWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  teamImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    width: fullWidth,
  },
  photoModalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: fullWidth
  },
  boxTitle: {
    fontFamily: 'GROBOLD',
    fontSize: 20,
    marginBottom: 30
  },
});