const baseUri =
  "https://pokemonapi20230221123533.azurewebsites.net/api/pokemons";

Vue.createApp({
  data() {
    return {
      pokemons: [],
      error: null,
      deleteid: 0,
      Name: "",
      MaxLevel: "",
      MinLevel: "",
      Pokedex: "",
      Level: "",
      deleteMessage: ""
    };
  },
  async created() {
    console.log("created method called");
    try {
      const response = await axios.get(baseUri);
      this.pokemons = await response.data;
      this.error = null;
    } catch (e) {
      this.pokemons = [];
      this.error = e.message;
    }
  },
  methods: {
    cleanList() {
      this.pokemons = [];
      this.namefilter = [];
      this.error = null;
      console.log("list cleared..")
    },
    async showAll() {
      console.log("list created");
      try {
        const response = await axios.get(baseUri);
        this.pokemons = await response.data;
        this.namefilter = await response.data;
        this.error = null;
      } catch (e) {
        this.pokemons = [];
        this.error = e.message;
      }
    },
    async search(maxLevel, minLevel, pokedex, name) {
      try {
        const response = await axios.get(baseUri + "?namefilter=" + name + "&maxlevelfilter=" + maxLevel + "&minlevelfilter=" + minLevel + "&pokedexfilter=" + pokedex);
        this.pokemons = await response.data;
        this.error = null;
      } catch (e) {
        this.pokemons = [];
        this.error = e.message;
      }
    }
  },
}).mount("#app");

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
