import React from 'react';
import {Text,View, ScrollView} from 'react-native';


export function SimpleList(props){
const list = props.data;

const listLayout = list.map((item,key)=>
        <Text key={key} style={{padding:50}}>{item}</Text>
); 

return (
    <ScrollView>
        <View>
            <Text>any Data</Text>
            { listLayout }
        </View>
    </ScrollView>
    );
}