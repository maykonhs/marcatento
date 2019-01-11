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
    homeScoreColor: 'yellow',
    opponentScoreColor: 'yellow',
    homeTotalScoreColor: 'yellow',
    opponentTotalScoreColor: 'yellow',

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
              <TouchableOpacity
                onPress={() => { this.setState({ modalVisible: true, position: 3 }) }}>
                <Image style={styles.teamImage} source={this.state.thirdImage} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { this.setState({ modalVisible: true, position: 4 }) }}>
                <Image style={styles.teamImage} source={this.state.forthImage} />
              </TouchableOpacity>
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
  }
});
