import React from 'react';
import{StyleSheet,Text,View} from 'react-native';
import{createStackNavigator} from 'react-navigation'

 class Inbox extends React.Component{
	render(){
		return(
			<View style ={styles.container}>
			<Text>Konrol</Text>	
			</View>	


			);
	}
}

export default Inbox;

const styles = StyleSheet.create({
  container:{
  	flex:1,
  	backgroundColor:'powderblue',
  }

});