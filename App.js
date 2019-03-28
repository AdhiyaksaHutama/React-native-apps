import React from 'react';
import{StyleSheet,Text,View} from 'react-native';
import{createBottomTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Sell from './Screen/Sell'
import Jualan from './Screen/Jualan'
import Inbox from './Screen/Inbox'

var userIcon;
var settingsIcon;
var settingsOutlineIcon;
var peopleIcon;
var iosNavigateOutline;
var iosNavigate;
 class App extends React.Component{
	constructor() {
		Icon.getImageSource('ios-settings', 30).then((source) => { settingsIcon = source});
		Icon.getImageSource('ios-home', 30).then((source) => { homeIcon = source});
		Icon.getImageSource('ios-contact', 30).then((source) => { profileIcon = source});
		Icon.getImageSource('ios-navigate-outline', 30).then((source) => { iosNavigateOutline = source});
		Icon.getImageSource('ios-cafe', 30).then((source) => { cafeIcon = source});
	}
	render(){
		return(
			<Text>aaaaa</Text>
			);
	}
}

export default createBottomTabNavigator({
	Sell:{
		screen:Sell,
		navigationOptions:{
			tabBarLabel:'Home',
			tabBarIcon:({tintColor}) =>(
			<Icon name="ios-home" color={tintColor} size={24}/>	
			)
		}
	},
	Jualan:{
		screen:Jualan,
		navigationOptions:{
			tabBarLabel:'Other',
			tabBarIcon:({tintColor}) =>(
			<Icon name="ios-cafe" color={tintColor} size={24}/>	
			)	
		}
	},

	Inbox:{
		screen:Inbox,
		navigationOptions:{
			tabBarLabel:'Profile',
			tabBarIcon:({tintColor}) =>(
			<Icon name="ios-contact" color={tintColor} size={24}/>	
			)
		}
	},
	
	
},{
	tabBarOptions:{
		activeTintColor:'orange',
		inactiveTintColor:'grey',
		style:{
			backgroundColor:'white',
			borderTopWidth:0,
			shadowOffset:{width:5,height:3},
			shadowColor:'black',
			shadowOpacity:0.5,
			elevation:5
		}

	}
})

const styles = StyleSheet.create({
  container:{
  	flex:1,
  	backgroundColor:'powderblue',
  }

});