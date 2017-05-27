import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Easing
} from 'react-native'

class TouchableElastic extends React.Component {
  static TouchableElastic = {
    elasticity: React.PropTypes.number,
    shrinkage: React.PropTypes.number
  };

  static TouchableElastic = {
    elasticity: 2,
    shrinkage: 0.9
  };

  state = {
    scale: new Animated.Value(1)
  };

  render() {
    let { style, children } = this.props;
    return (
      <TouchableWithoutFeedback
        {...this.props}
        onPressIn={() => {
          this.shrink();
          this.props.onPressIn ? this.props.onPressIn() : null;
        }}
        onPressOut={() => {
          this.expand();
          this.props.onPressOut ? this.props.onPressOut() : null;
        }}
        >
        <Animated.View style={[styles.centerXY, { transform: [ { scale: this.state.scale } ] }, style]}>
          {children}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }

  shrink() {
    Animated.timing(this.state.scale, {
      toValue: this.props.shrinkage,
      duration: 100
    }).start();
  }

  expand() {
    Animated.timing(this.state.scale, {
      toValue: 1,
      duration: 200,
      easing: Easing.elastic(this.props.elasticity)
    }).start();
  }
}

const styles = StyleSheet.create({
  centerXY: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TouchableElastic;
