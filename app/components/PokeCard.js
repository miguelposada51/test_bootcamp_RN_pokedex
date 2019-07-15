//import React form react
import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
//import styles fro your PokeCard component.
import { StyleSheet } from 'react-native';
//Define your stateless componetns, and destrcuts props from function arguments
const PokeCard = ({name, url, height, weight, navigation}) => {
          
    return (
        <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => navigation.navigate('Pokemon', {name, url, height, weight})}>
                    <View  style={styles.listItemContainer}>
                        <Text style={styles.pokeItemHeader}>{name}</Text>
                        <Image source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+`${url.split('/')[6]}`+'.png'}} 
                                style={styles.pokeImage}/>
                    </View>
                </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    pokeItemHeader: {  
        fontSize: 24,
    },
    pokeImage: {
        backgroundColor: 'transparent',
        height: 50,
        width: 50
    }
})

export default PokeCard;