import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet, Alert, Dimensions, Image } from 'react-native';
import { Header, Card, Badge } from 'react-native-elements';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plate45: 0,
      plate35: 0,
      plate25: 0,
      plate10: 0,
      plate5: 0,
      plate2: 0,
      barWeight: 45,
      finals: '',
      storedWeight: ''
    },
      this.plates = {
        plate45: 0,
        plate35: 0,
        plate25: 0,
        plate10: 0,
        plate5: 0,
        plate2: 0,
        inputWeight: ''
      };

  }
  findWeight(inputWeight, barWeight) {
    if (this.state.storedWeight < inputWeight) {
      this.reset();
    }
    this.setState({ storedWeight: inputWeight })

    if (barWeight === 45) {
      inputWeight -= 45;
    } else {
      inputWeight -= 35;
    }
    //counts the required plates 45 lb
    if (inputWeight >= 90) {
      inputWeight = inputWeight / 2;
    }
    while (inputWeight >= 45) {
      this.state.plate45++;
      inputWeight -= 45;
    }
    this.setState({ plate45: this.state.plate45 });

    //counts the required plates 35 lb
    while (inputWeight >= 35) {
      this.state.plate35++;
      inputWeight -= 35;
    }
    this.setState({ plate35: this.state.plate35 });

    //counts the required plates 25 lb
    while (inputWeight >= 25) {
      this.state.plate25++;
      inputWeight -= 25;
    }
    this.setState({ plate25: this.state.plate25 });

    //counts the required plates 10 lb
    while (inputWeight >= 20) {
      this.state.plate10++;
      inputWeight -= 20;
    }
    this.setState({ plate10: this.state.plate10 });

    //counts the required plates 5 lb
    while (inputWeight >= 10) {
      this.state.plate5++;
      inputWeight -= 10;
    }
    this.setState({ plate5: this.state.plate5 });

    //counts the required plates 2.5 lb
    while (inputWeight >= 5) {
      this.state.plate2++;
      inputWeight -= 5;
    }
    this.setState({ plate2: this.state.plate2 });

  }
  reset() {
    this.setState({ plate45: 0 });
    this.setState({ plate35: 0 });
    this.setState({ plate25: 0 });
    this.setState({ plate10: 0 });
    this.setState({ plate5: 0 });
    this.setState({ plate2: 0 });
  }
  render() {
    return (
      <View style={styles.buttonContainer}>
        <Image
          style={{ width: 150, height: 150, marginBottom: 20 }}
          source={{ uri: 'https://i.imgur.com/PkNOszO.png' }}
        />
        <TextInput
          style={styles.container}
          placeholder="Type the amount to lift!"
          onChangeText={(text) => this.findWeight(text, 45)}
          onKeyPress={event => { if (event.nativeEvent.key === 'Backspace') this.reset() }}
        />
        <View style={{ width: width, flexDirection: 'row', marginTop: 5 }}>
          <Badge containerStyle={{ width: width / 6 }}>
            <Text style={{ color: '#FFFFFF' }}>45: <Text style={{ color: '#1dabb8' }}>{this.state.plate45}</Text></Text>
          </Badge>
          <Badge containerStyle={{ width: width / 6 }}>
            <Text style={{ color: '#FFFFFF' }}>35: <Text style={{ color: '#1dabb8' }}>{this.state.plate35}</Text></Text>
          </Badge>
          <Badge containerStyle={{ width: width / 6 }}>
            <Text style={{ color: '#FFFFFF' }}>25: <Text style={{ color: '#1dabb8' }}>{this.state.plate25}</Text></Text>
          </Badge>
          <Badge containerStyle={{ width: width / 6 }}>
            <Text style={{ color: '#FFFFFF' }}>10: <Text style={{ color: '#1dabb8' }}>{this.state.plate10}</Text></Text>
          </Badge>
          <Badge containerStyle={{ width: width / 6 }}>
            <Text style={{ color: '#FFFFFF' }}>5: <Text style={{ color: '#1dabb8' }}>{this.state.plate5}</Text></Text>
          </Badge>
          <Badge containerStyle={{ width: width / 6 }}>
            <Text style={{ color: '#FFFFFF' }}>2.5: <Text style={{ color: '#1dabb8' }}>{this.state.plate2}</Text></Text>
          </Badge>

        </View>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // Setting up Hint Align center.
    textAlign: 'center',

    // Setting up TextInput height as 50 pixel.
    height: 50,
    width: Dimensions.get('window').width,

    // Set border width.
    borderWidth: 2,

    // Set border Hex Color Code Here.
    borderColor: '#1dabb8',
    backgroundColor: '#7f8c8d',
    color: '#fff',

    // Set border Radius.
    borderRadius: 20,
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#2c3e50',
    flex: 1
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
const width = Dimensions.get('window').width; //full width
