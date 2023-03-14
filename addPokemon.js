const baseUri =
  "https://pokemonapi20230221123533.azurewebsites.net/api/pokemons";

Vue.createApp({
    data(){
      return{
        pokemons: [],
        error: null,
        response: null,
        Id: "",
        Name: "",
        MaxLevel: "",
        MinLevel: "",
        Pokedex: "",
        Level: ""      
      }
  
    },
    methods: {
      async Save(name, pokedex, level){
        //const element = document.getElementsByClassName("response")
        const path = "/index.html"
        const newPokemon = {Name: name, Level: level, Pokedex: pokedex}
        const response = await axios.post(baseUri, newPokemon)
        this.pokemons = await response.data;
        window.location.href = path;
      }
      }
  
  }).mount("#addPokemonapp")