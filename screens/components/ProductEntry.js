import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import Axios from 'axios';


export default class ProductEntry extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            price:'',
            message: ''
        }
    }

    handleProductName = (val) => {
        this.setState({
            name:val
        })
    }

    handleProductPrice = (val) => {
        this.setState({
            price:val
        })
    }

    handleSubmit = () => {
        const baseURL =  "http://localhost:3000/";
        const JsonData = {
            name: this.state.name,
            price: this.state.price
        }
        Axios.post(baseURL + "products",JsonData).then((item) =>{
            console.log(item);
            
            this.setState({
                message: 'Record saved successfully..!' 
            });

           // this.props.navigate("ProductList",{category:"Mouse"});
        }).catch((error) =>{
            console.log(error);
            this.setState({
                message: 'Error Occured while saving product..!' 
            })
        });

    }

   

    render(){
        return(
            <View style={styles.productEntryView}>
                <Text>Enter Product Name:</Text>
                <TextInput  style={styles.text} value={this.state.name} onChangeText={(val)=> this.handleProductName(val)}></TextInput>
                <Text>Enter Product Price:</Text>
                <TextInput style={styles.text} value={this.state.price} onChangeText={(val)=> this.handleProductPrice(val)}></TextInput>
                <Button title="Add Product" onPress={()=> this.handleSubmit()}>Add Product</Button>
        <Text>{this.state.message}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    productEntryView:{
        flex:1,
        flexDirection:"column",
        justifyContent:'center',
        padding:'5%',
        justifyContent:'space-between',
        borderColor:'lightgray',
        borderRadius: 4,
        borderWidth:1,
    },
    text:{
        backgroundColor:'',
        borderRadius:4,
        borderColor:'darkgray',
        borderWidth:1,
        paddingLeft: 5,
        height:'40px'
    }
})