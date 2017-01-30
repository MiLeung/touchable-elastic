import React from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native'
import TouchableElastic from './TouchableElastic';

export default class Main extends React.Component {
  componentWillMount() {
    this.grid = Array(8).fill(Array(5).fill(0))
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <StatusBar hidden={true} />
        {this.grid.map((row, rowIndex) => {
          return (
            <View
              key={rowIndex}
              style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around', alignItems: 'center' }}
              >
              {row.map((val, columnIndex) => (
                  <TouchableElastic
                    key={columnIndex}
                    style={{ borderWidth: 1, height: 50, width: 50, borderRadius: 25 }}
                    onPressIn={() => console.log('huh')}
                    hitSlop={{ top: 9, right: 9, bottom: 9, left: 9 }}
                    elasticity={columnIndex * 0.8}
                    shrinkage={rowIndex / 4.5}
                    >
                    <Text>{`${columnIndex}, ${rowIndex}`}</Text>
                  </TouchableElastic>
                ))}
            </View>
          );
        })}
      </View>
    );
  }
}
