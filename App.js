import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  AVATAR,
} from './src/images';

import PhotoModal from './src/components/PhotoModal'

export default class App extends Component {
  state = {
    firstImage: AVATAR,
    secondImage: AVATAR,
    thirdImage: AVATAR,
    forthImage: AVATAR,
    modalVisible: false,
    position: 0,
    homeScore: 0,
    opponentScore: 0,
    homeTotalScore: 0,
    opponentTotalScore: 0,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setImage(image, position = this.state.position) {
    if (position === 1) {
      this.setState({ firstImage: image });
    }
    if (position === 2) {
      this.setState({ secondImage: image });
    }
    if (position === 3) {
      this.setState({ thirdImage: image });
    }
    if (position === 4) {
      this.setState({ forthImage: image });
    }
  }

  resetBoard = () => {
    this.setState({
      homeScore: 0,
      opponentScore: 0,
    })
  }

  resetTotalBoard = () => {
    this.setState({
      firstImage: AVATAR,
      secondImage: AVATAR,
      thirdImage: AVATAR,
      forthImage: AVATAR,
      homeTotalScore: 0,
      opponentTotalScore: 0,
      homeScore: 0,
      opponentScore: 0,
    })
  }

  setHomeScore = (value) => {
    if (this.state.homeScore + value < 0) {
      this.setState({
        homeScore: 0
      })
    } else {
      if (this.state.homeScore + value > 11) {
        this.setState({
          homeTotalScore: this.state.homeTotalScore + 1,
        })
        this.resetBoard()
      } else {
        this.setState({
          homeScore: this.state.homeScore + value
        })
      }
    }
  }

  setOpponentScore = (value) => {
    if (this.state.opponentScore + value < 0) {
      this.setState({
        opponentScore: 0
      })
    } else {
      if (this.state.opponentScore + value > 11) {
        this.setState({
          opponentTotalScore: this.state.opponentTotalScore + 1,
        })
        this.resetBoard()
      } else {
        this.setState({
          opponentScore: this.state.opponentScore + value
        })
      }
    }
  }

  render() {
    return (
      <View style={styles.externalContainer}>
        <PhotoModal onCancel={() => this.setState({ modalVisible: false })}
          setImage={(image) => this.setImage(image)}
          visible={this.state.modalVisible} />
        <View style={styles.container}>
          <View style={styles.teamContainer}>
            <View style={styles.photoContainer}>
              <TouchableOpacity
                onPress={() => { this.setState({ modalVisible: true, position: 1 }) }}>
                <Image style={styles.teamImage} source={this.state.firstImage} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { this.setState({ modalVisible: true, position: 2 }) }}>
                <Image style={styles.teamImage} source={this.state.secondImage} />
              </TouchableOpacity>
            </View>
            <Text style={styles.teamTotalScore}>{this.state.homeTotalScore}</Text>
            <Text style={styles.teamResult}>{this.state.homeScore}</Text>
            <TouchableOpacity onPress={() => { this.setHomeScore(1) }}>
              <Text style={styles.scores}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setHomeScore(3) }}>
              <Text style={styles.scores}>+3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setHomeScore(6) }}>
              <Text style={styles.scores}>+6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setHomeScore(9) }}>
              <Text style={styles.scores}>+9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setHomeScore(12) }}>
              <Text style={styles.scores}>+12</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setHomeScore(-1) }}>
              <Text style={styles.scores}>-1</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.versus}>Vs</Text>
          <View style={styles.teamContainer}>
            <View style={styles.photoContainer}>
              <TouchableOpacity
                onPress={() => { this.setState({ modalVisible: true, position: 3 }) }}>
                <Image style={styles.teamImage} source={this.state.thirdImage} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { this.setState({ modalVisible: true, position: 4 }) }}>
                <Image style={styles.teamImage} source={this.state.forthImage} />
              </TouchableOpacity>
            </View>
            <Text style={styles.teamTotalScore}>{this.state.opponentTotalScore}</Text>
            <Text style={styles.teamResult}>{this.state.opponentScore}</Text>
            <TouchableOpacity onPress={() => { this.setOpponentScore(1) }}>
              <Text style={styles.scores}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setOpponentScore(3) }}>
              <Text style={styles.scores}>+3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setOpponentScore(6) }}>
              <Text style={styles.scores}>+6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setOpponentScore(9) }}>
              <Text style={styles.scores}>+9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setOpponentScore(12) }}>
              <Text style={styles.scores}>+12</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setOpponentScore(-1) }}>
              <Text style={styles.scores}>-1</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => { this.resetTotalBoard() }}>
          <Text style={styles.scores}>ZERA TUDO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const fullWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  externalContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#8B4513',
    width: fullWidth,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#8B4513',
    width: fullWidth,
  },
  photoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  teamContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  teamDescription: {
    fontSize: 40,
    color: '#FFF',
    fontFamily: 'GROBOLD'
  },
  teamTotalScore: {
    fontSize: 25,
    fontFamily: 'GROBOLD',
    color: '#FFF',
    textShadowColor:'#000',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:10,
  },
  teamResult: {
    fontSize: 60,
    fontFamily: 'GROBOLD',
    color: '#FFF',
    marginBottom: 30,
    textShadowColor:'#000',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:10,
  },
  scores: {
    fontSize: 30,
    fontFamily: 'GROBOLD',
    color: '#FFF',
    marginBottom: 15,
    textShadowColor:'#000',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:10,
  },
  versus: {
    fontSize: 30,
    fontFamily: 'GROBOLD',
    color: '#FFF',
    marginTop: 50
  },
  teamImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
});
