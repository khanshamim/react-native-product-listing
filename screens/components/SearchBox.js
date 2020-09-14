import React from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';


export class SearchBox extends React.Component {
    constructor(props){
        super(props);

        this.refSearch = React.createRef();


        this.state = {
            itext : ''
        }


    }

    handleChange(val){
        this.setState({
            itext : val
        });
    }

    handSearch(){
        // const val = this.state.itext;
        // console.log(val);
        // this.setState({
        //     itext:''
        // });

        // Alert.alert('Search - Add',val,null);

        const value = this.refs.refSearch;
        console.log(value);
    }

    render(){
        return (
            <View style={styles.box}>
                <TextInput 
                style={styles.text} 
                placeholder="search word"
                // value={this.state.itext}
                // onChangeText={(val)=> this.handleChange(val)} 
                ref= {this.refSearch}/>
               
                <Button 
                style={styles.btn} 
                title="Search"
                onPress={()=> this.handSearch()}>Search</Button>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    box:{
        height: 70,
        flexDirection: 'row',
        padding:'5%',
        justifyContent:'space-between',
        borderColor:'lightgray',
        borderRadius: 4,
        borderWidth:1,
    },
    text: {
        backgroundColor:'',
        borderRadius:4,
        borderColor:'darkgray',
        borderWidth:1,
        paddingLeft: 5,
    },
    btn:{
        paddingHorizontal:5,
    }
});