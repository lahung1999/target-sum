import React from 'react';

import {Text, TouchableOpacity, StyleSheet} from 'react-native';

class RandomNumber extends React.Component {
  handlePress = () => {
    if (!this.props.isDisabled) {
      this.props.onPress(this.props.id);
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text
          style={[
            styles.randomNumber,
            this.props.isDisabled && styles.disabled,
          ]}>
          {this.props.number}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  randomNumber: {
    fontSize: 35,
    width: 100,
    backgroundColor: '#C6C8D0',
    marginHorizontal: 25,
    marginVertical: 25,
    textAlign: 'center',
  },

  disabled: {
    opacity: 0.3,
  },
});

export default RandomNumber;
