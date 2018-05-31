import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { CustomButton } from "./components/common/CustomButton";

class Books extends Component {
  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <CustomButton
          onPress={() => this.props.navigation.navigate('Home', {
            todos: ["Something"],
            value: "Something else",
            selected: [true]
          })}
          underlayColor="#ccc"
        >
          <Text>Go to TODO App</Text>
        </CustomButton>
      </View>
    );
  }
}

export default Books;