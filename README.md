# touchable-elastic

A React Native component that shows feedback via scale transform animations

![](https://media.giphy.com/media/xUA7aWWRTZvVEi4rjW/giphy.gif)

### Install

`npm install --save touchable-elastic`

### Import

`import TouchableElastic from 'touchable-elastic';`

### Usage
```javascript
render() {
  // Treat TouchableElastic like TouchableOpacity.
  // TouchableElastic centers children horizontally and vertically.
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableElastic
        style={{ borderWidth: 1, height: 70, width: 70, borderRadius: 35 }}
        onPressIn={() => console.log('hello')}
        onPressOut={() => console.log('good')}
        onPress={() => console.log('sir')}
        hitSlop={{ top: 9, right: 9, bottom: 9, left: 9 }}

        // these props are specific to this package
        elasticity={2}
        shrinkage={0.5}
        >
        <Text>Hello World</Text>
      </TouchableElastic>
    </View>
  );
}
```
