import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';


export class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products:[
                // {id:101, name:'Lg Optical Mouse', price: 350},
                // {id:102, name:'Lg Optical Monitor', price: 330},
                // {id:103, name:'Lg Optical Keyboard', price: 340},
                // {id:104, name:'Asus Optical Mouse', price: 380},
                // {id:105, name:'Asus Optical Monitor', price: 390},
                // {id:106, name:'Asus Optical Keyboard', price: 400},
                // {id:107, name:'Samsung Optical Mouse', price: 200},
            ]
        }
    }

    componentDidMount(){
        this.fetchProducts();
    }

    fetchProducts(){
        const baseURL =  "http://localhost:3000/";
        axios.get(baseURL + "products").then((response)=>{
            this.setState({
                products: response.data
            })

        })
    }

    getSepCompo = () => {
        return (
            <View style={{height:2, backgroundColor:'black'}}></View>
        );
    }

    getListItemLayout(p){
        return(
            <View style={styles.listItemView}>
                <Text style={styles.title}>{p.name}</Text>
                <Text style={styles.price}>{p.price}</Text>
            </View>
        );
    }

    render(){
//const category = this.props.route.params.category;

  //      let products = this.state.products.filter((p)=> p.category === category );

        return(
            <View>
                <Text style={styles.productSummary}>Total Products: {this.state.products.length}</Text>
                <FlatList
                data={this.state.products}
                renderItem={({item}) => this.getListItemLayout(item)}
                ItemSeparatorComponent={this.getSepCompo} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listItemView: {
        padding:'2%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'blue',
        marginRight: 50,
    },
    price:{
        color:'red',
        fontSize:28,
    },
    productSummary:{
       backgroundColor: 'yellow',
       color:'red',
       fontSize:20,
    }
});