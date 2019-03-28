import React from 'react';
import{StyleSheet,Text,View} from 'react-native';
import{createBottomTabNavigator} from 'react-navigation'


 class Jualan extends React.Component{
	render(){
		return(
				<View style ={styles.container}>
			<Text>Konrol</Text>	
			</View>	
			);
	}
}

export default Jualan;
const styles = StyleSheet.create({
  container:{
  	flex:1,
  	backgroundColor:'powderblue',
  }

});