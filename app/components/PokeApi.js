

//import CONFIGURLS from  "../constants/";

// creamos un cliente para consumir api
const pokeApi = {
 

  getPokemons() {
   
       
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20').then(function(response) {
      if(response.ok) {
        return response => response.json();      
      } else {
        return "Error: Server Response";        
      }
    })    
    .catch(function(error) {
      console.log('Fetch request Problems getting data:' + error.message);
      return error.message;
    });

  } 

};

export default pokeApi;