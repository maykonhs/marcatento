/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

/* import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}; */

export default class App extends Component {
  state = {
    homeScore: 0,
    opponentScore: 0,
    homeTotalScore: 0,
    opponentTotalScore: 0,
    homeScoreColor: 'yellow',
    opponentScoreColor: 'yellow',
    homeTotalScoreColor: 'yellow',
    opponentTotalScoreColor: 'yellow',

  }

  resetBoard = () => {
    this.setState({
      homeScore: 0,
      opponentScore: 0,
    })
  }

  resetTotalBoard = () => {
    this.setState({
      homeTotalScore: 0,
      opponentTotalScore: 0,
      homeScore: 0,
      opponentScore: 0,
      homeScoreColor: 'yellow',
      opponentScoreColor: 'yellow',
      homeTotalScoreColor: 'yellow',
      opponentTotalScoreColor: 'yellow',
    })
  }

  setHomeScore = (value) => {
    if (this.state.homeScore + value < 0) {
      this.setState({
        homeScore: 0
      })
    } else {
      if (this.state.homeScore + value > 11) {
        if ((this.state.homeTotalScore + 1) < this.state.opponentTotalScore) {
          this.setState({
            homeTotalScore: this.state.homeTotalScore + 1,
            homeScoreColor: 'yellow',
            opponentScoreColor: 'yellow',
            homeTotalScoreColor: 'red',
            opponentTotalScoreColor: 'green',
          })
          this.resetBoard()
        }
        if ((this.state.homeTotalScore + 1) > this.state.opponentTotalScore) {
          this.setState({
            homeTotalScore: this.state.homeTotalScore + 1,
            homeScoreColor: 'yellow',
            opponentScoreColor: 'yellow',
            homeTotalScoreColor: 'green',
            opponentTotalScoreColor: 'red',
          })
          this.resetBoard()
        }
        if ((this.state.homeTotalScore + 1) === this.state.opponentTotalScore) {
          this.setState({
            homeTotalScore: this.state.homeTotalScore + 1,
            homeScoreColor: 'yellow',
            opponentScoreColor: 'yellow',
            homeTotalScoreColor: 'yellow',
            opponentTotalScoreColor: 'yellow',
          })
          this.resetBoard()
        }
      } else {
        if ((this.state.homeScore + value) < this.state.opponentScore) {
          this.setState({
            homeScoreColor: 'red',
            opponentScoreColor: 'green',
            homeScore: this.state.homeScore + value
          })
        }
        if ((this.state.homeScore + value) > this.state.opponentScore) {
          this.setState({
            homeScoreColor: 'green',
            opponentScoreColor: 'red',
            homeScore: this.state.homeScore + value
          })
        }
        if ((this.state.homeScore + value) === this.state.opponentScore) {
          this.setState({
            homeScoreColor: 'yellow',
            opponentScoreColor: 'yellow',
            homeScore: this.state.homeScore + value
          })
        }
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
        if ((this.state.opponentTotalScore + 1) < this.state.homeTotalScore) {
          this.setState({
            opponentTotalScore: this.state.opponentTotalScore + 1,
            homeScoreColor: 'yellow',
            opponentScoreColor: 'yellow',
            opponentTotalScoreColor: 'red',
            homeTotalScoreColor: 'green',
          })
          this.resetBoard()
        }
        if ((this.state.opponentTotalScore + 1) > this.state.homeTotalScore) {
          this.setState({
            opponentTotalScore: this.state.opponentTotalScore + 1,
            homeScoreColor: 'yellow',
            opponentScoreColor: 'yellow',
            opponentTotalScoreColor: 'green',
            homeTotalScoreColor: 'red',
          })
          this.resetBoard()
        }
        if ((this.state.opponentTotalScore + 1) === this.state.homeTotalScore) {
          this.setState({
            opponentTotalScore: this.state.opponentTotalScore + 1,
            homeScoreColor: 'yellow',
            opponentScoreColor: 'yellow',
            opponentTotalScoreColor: 'yellow',
            homeTotalScoreColor: 'yellow',
          })
          this.resetBoard()
        }
      } else {
        if ((this.state.opponentScore + value) < this.state.homeScore) {
          this.setState({
            opponentScoreColor: 'red',
            homeScoreColor: 'green',
            opponentScore: this.state.opponentScore + value
          })
        }
        if ((this.state.opponentScore + value) > this.state.homeScore) {
          this.setState({
            opponentScoreColor: 'green',
            homeScoreColor: 'red',
            opponentScore: this.state.opponentScore + value
          })
        }
        if ((this.state.opponentScore + value) === this.state.homeScore) {
          this.setState({
            opponentScoreColor: 'yellow',
            homeScoreColor: 'yellow',
            opponentScore: this.state.opponentScore + value
          })
        }
      }
    }
  }

  render() {
    return (
      <View style={styles.externalContainer}>
        <View style={styles.container}>
          <View style={styles.teamContainer}>
            <View style={styles.photoContainer}>
              <Image
                style={styles.teamImage}
                source={require('./assets/images/avatar.png')}
              />
              <Image
                style={styles.teamImage}
                source={require('./assets/images/avatar.png')}
              />
            </View>
            <Text style={{
              fontSize: 25,
              fontFamily: 'GROBOLD',
              color: `${this.state.homeTotalScoreColor}`,
            }}>{this.state.homeTotalScore}</Text>
            <Text style={{
              fontSize: 60,
              fontFamily: 'GROBOLD',
              color: `${this.state.homeScoreColor}`,
              marginBottom: 30
            }}>{this.state.homeScore}</Text>
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
              <Image
                style={styles.teamImage}
                source={require('./assets/images/avatar.png')}
              />
              <Image
                style={styles.teamImage}
                source={require('./assets/images/avatar.png')}
              />
            </View>
            <Text style={{
              fontSize: 25,
              fontFamily: 'GROBOLD',
              color: `${this.state.opponentTotalScoreColor}`,
            }}>{this.state.opponentTotalScore}</Text>
            <Text style={{
              fontSize: 60,
              fontFamily: 'GROBOLD',
              color: `${this.state.opponentScoreColor}`,
              marginBottom: 30
            }}>{this.state.opponentScore}</Text>
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
    backgroundColor: '#000',
    width: fullWidth,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000',
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
  },
  teamResult: {
    fontSize: 60,
    fontFamily: 'GROBOLD',
    color: '#FFF',
    marginBottom: 30
  },
  scores: {
    fontSize: 30,
    fontFamily: 'GROBOLD',
    color: '#FFF',
    marginBottom: 15
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
  },
});
