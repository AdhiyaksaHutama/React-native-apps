import React, {Component} from 'react';
import {
	Platform, 
	StyleSheet, 
	Text, 
	View,
	SafeAreaView,
	TextInput,
	Platform,
	StatusBar,
	ScrollView,
  	Dimensions} from 'react-native';

class Tag extends Component<Props> {
  render() {
    return (
     <View style={{minHeight:20,minWidth:40,padding:5,backgroundColor:'white',borderColor:'#ddd',borderWidth:1,
	borderRadius:2}}>
    <Text style={{fontWeight:'700',fontSize:10}}>{this.props.name}</Text>
    </View>

);
}
}
export default Tag;
