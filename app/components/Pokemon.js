import React, { PureComponent } from 'react'; 
//import UI from react-native
import { View, Text, Image, Alert } from 'react-native';
//import styles for component.
import { StyleSheet } from 'react-native';
import { getTimeFieldValues } from 'uuid-js';


//Define your class component
export default class Pokemon extends PureComponent {
    constructor(props) {
        super(props);   
    
        this.state = {
          //Assing a array to your pokeList state
          //Have a loading state where when data retrieve returns data.          
          height: '',
          weight: '',
          types: ''
        }
       
      }

      async getpokeHeiWei(idPok) {
        try {
            //const { navigation2 } = this.props; 
            //Assign the promise unresolved first then get the data using the json method. 
            //const id = navigation2.getParam('url', 'Url image of Pokemon')  
            const pokemonApiCall = await fetch('https://pokeapi.co/api/v2/pokemon/'+`${idPok.split('/')[6]}`);
              const pokemon = await pokemonApiCall.json();              
              this.setState({height: pokemon.height, weight: pokemon.weight });  
             // Alert.alert('la altura y peso son', `${this.state.height} + ${this.state.weight}` +'use : nothing');
              
        } catch(err) {
            console.log("Error fetching data-----------", err); 
        }  
        

    }

    render() {
        //Destruct your navigation props (NOT SETUP YET!)
        const { navigation } = this.props;
        const idPok = navigation.getParam('url', 'Url image of Pokemon') 
        this.getpokeHeiWei(idPok); 
      

        return (
            <View>
                <Image source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+`${idPok.split('/')[6]}`+'.png'}}
                        style={styles.pokemonImage} />
            {/*Use navigation.getParam to get the params of navigation prefered since you can set a default value
            therefore not returning undefined and not crashing your app. */}
                <Text style={styles.nameOfPokemon}>Name: {navigation.getParam('name', 'Name of Pokemon')}</Text>
                <Text style={styles.nameOfPokemon}>Height: {this.state.height}</Text>
                <Text style={styles.nameOfPokemon}>Weight: {this.state.weight}</Text>
                <Text style={styles.nameOfPokemon}>Types: {this.state.types}</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    pokemonImage: {
        height: 250,
        width: 250
    },
    nameOfPokemon: {
        fontSize: 25
    }
})