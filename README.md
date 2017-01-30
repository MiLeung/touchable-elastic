# touchable-elastic

A React Native component that shows feedback via scale transform animations

![](https://media.giphy.com/media/26gsxyTcMV3VvhgGc/giphy.gif)

### Installation

`npm install --save touchable-elastic`

### Importation

`import TouchableElastic from 'touchable-elastic';`

### Usagation
Treat TouchableElastic like TouchableOpacity.  TouchableElastic centers children horizontally and vertically.

### Examplelation
```javascript
render() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableElastic style={{ borderWidth: 1, padding: 5 }}>
        <Text>Hello World</Text>
      </TouchableElastic>
    </View>
  );
}
```

### Props
[TouchableWithoutFeedback](http://facebook.github.io/react-native/docs/touchablewithoutfeedback.html#props)
and
```javascript
elasticity: React.PropTypes.number // how bouncy the onPressOut animation is; default is 2
shrinkage: React.PropTypes.number // how small TouchableElastic gets onPressIn; default is 0.9
```
