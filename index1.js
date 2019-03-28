import React,{Component} from 'react';
import{StyleSheet,Text,View,Image} from 'react-native';

 class Kontol extends Component{
	render(){
		return(

            <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,marginLeft:20,
                borderColor:'#ddd'}}>
                     <View style={{flex:2}}>
                        <Image source = {this.props.imageUrl}
                        style={{flex:1,width:null,height:null,resizeMode:'cover'}}
                        />
                     </View>
                    <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
                        <Text>{this.props.name}</Text>
                    </View>
                 </View>


			);
	}
}

export default Kontol;

