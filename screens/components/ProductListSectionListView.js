import React from 'react';
import {View, Text,  StyleSheet, SectionList} from 'react-native';


export class ProductListSecListView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products:[
                {category:'Mouse', data:[
                    {id:101, name:'Lg Optical Mouse', price: 350},
                    {id:104, name:'Asus Optical Mouse', price: 380},
                    {id:107, name:'Samsung Optical Mouse', price: 200},
                ]},
                {category:'Keyboard', data:[
                    {id:103, name:'Lg Optical Keyboard', price: 340},
                    {id:106, name:'Asus Optical Keyboard', price: 400},
                ]},
                {category:'Monitor', data:[
                    {id:102, name:'Lg Optical Monitor', price: 330},
                    {id:105, name:'Asus Optical Monitor', price: 390},
                ]}
            ]
        }
    }

    getSecHeader(section){
        return(
            <View style={{padding:5, backgroundColor:'lightblue', flexDirection:'row', justifyContent:'flex-start'}}>
                <Text style={styles.title}>{section.category}</Text>
                <Text style={styles.productSummary}>Total Items: {section.data.length}</Text>
            </View>
        );
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
        return(
            <View>
                <SectionList
                sections={this.state.products}
                renderSectionHeader={({section})=> this.getSecHeader(section)}
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