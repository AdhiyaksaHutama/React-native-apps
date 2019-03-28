import React, {Component} from 'react';
import{StyleSheet,Text,View,SafeAreaView,TextInput,Platform,StatusBar,ScrollView,Image,TouchableOpacity,
Dimensions} from 'react-native';
import Kontol from  '../Kontol'
import Icon from 'react-native-vector-icons/Ionicons';

const{height,width} = Dimensions.get('window')

 class Sell extends Component{
	componentWillMount(){
		this.startHeaderHeight = 40
		if(Platform.OS == 'android')
		{
			this.startHeaderHeight = 100 + StatusBar.currentHeight
		}
	}
	render(){
		return(
			//Ini Home//

			<SafeAreaView style={{flex:1}}>
			<View style={{flex:1}}>
			<View style={{height:this.startHeaderHeight,backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'#ddd',}}>
			<View style={{flexDirection:'row',padding:10,backgroundColor:'white',marginHorizontal:20,
			shadowOffset:{width:0,height:0},shadowColor:'black',shadowOpacity:0.2,elevation:1,
			marginTop:Platform.OS=='android'?30:null}}>
			<Icon name="ios-search" size={40} style={{marginRight:10}}/>
			<TextInput
			underlineColorAndroid="transparent"
			placeholder="Search Here"
			placeholderTextColor="grey"
			style={{flex:1,fontWeight:'700',backgroundColor:'white'}}
			/>
			</View>
			</View>
			<ScrollView
			scrollEventThrottle={16}
			>
			    <View style={{flex:1,backgroundColor:'white',paddingTop:20}}>
					<Text style={{fontSize:24,fontWeight:'700'
					,paddingHorizontal:20}}>What Do You Wanna Eat Today?</Text>
					<View style={{height:130,marginTop:20,}}>
					 <ScrollView
					 horizontal ={true}
					 showsHorizontalScrollIndicator={false}
					 >
						
						<Kontol imageUrl= {require('./r.png')}
						name="Spesial Rawon"
						/>

						<Kontol imageUrl= {require('./dessert.jpg')}
						name="Spesial Dessert"
						/>

						<Kontol imageUrl= {require('./cf.jpg')}
						name="Spesial Coffee"
						/>

						<Kontol imageUrl= {require('./milkshake.jpg')}
						name="Spesial Milkshake"
						/>

					 </ScrollView>
					</View>
					<View style={{marginTop:40,paddingHorizontal:20}}>

					<Text style={{fontSize:24,fontWeight:'700'}}>Introducing Our New Special Menu
					</Text>
					<Text style={{fontWeight:'100',marginTop:10}}>
						Berikut ini adalah menu terfavorit dan Terlaris
						minggu ini,Anda dapat melakukan pesan antar di aplikasi ini.
					</Text>
					</View>
					<View style={{width:width - 40,height:350,marginTop:20,marginLeft:20,borderWidth:0.5,
					borderRadius:5,borderColor:'#ddd'
					}}>
				
						
						<Image
						style={{flex:1,height:null,width:null,resizeMode:'cover',borderRadius:5,
					borderWidth:1,borderColor:'#ddd'}} 
						source= {require('./r.png')}/>
					
						<Text style={{fontSize:20,fontWeight:'500',marginLeft:15,marginTop:20}}>Rawon Kuah Hitam</Text>
						<Text style={{marginLeft:20,marginTop:10}}>Rawon kuah hitam + telur asin 1/2 + nasi putih</Text>
						
						<TouchableOpacity style={{height:50,width:100,backgroundColor:'#e67e22',
						marginLeft:250,borderRadius:10,marginTop:10,marginBottom:10}}>
						  <Text  onPress={()=>this.props.navigation.navigate('Cart')} 
						  style={{color:'#fff',textAlign:'center',fontSize:20,marginTop:10}}>Beli</Text>

         				 </TouchableOpacity>
					</View>
				</View> 
			</ScrollView>
			</View>

			</SafeAreaView>
			

			);
	}
}

export default Sell;

const styles = StyleSheet.create({
  container:{
  	flex:1,
  	backgroundColor:'powderblue',
  }

});