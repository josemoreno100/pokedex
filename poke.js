const colors = {
    fire: '#fd0fdf',
    grass: '#defde0',
    electric: '#fcf7de',
    water: '#def3fd',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    draggon: '#97b3e6',
    psychic: '#eceda1',
    flying: '#f5f5f5',
    fightinh:'#e6e0d4',
    normal:'#f5f5f5'

    };

    const main_types = Object.keys(colors);
    // console.log(main_types);
     let color= white;

function luchadorPokemon(id, num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) /* con el id traigo datos dinamicos */
.then(function (response) {
     response.json()
     .then(function (pokemon) {
         crearPokemon(pokemon, num)
     })
})
}   

function luchadores(){
  let primerId = Math.round(Math.random()*150) /* crea enteros aleatorios hasta 150 */ 
  let segundoId = Math.round(Math.random()*150)
    // Segunda semifinal
  let tercerId = Math.round(Math.random()*150)
  let cuartoId= Math.round(Math.random()*150)
  

  luchadorPokemon(primerId, 1)
  luchadorPokemon(segundoId, 2)

  luchadorPokemon(tercerId, 3)
  luchadorPokemon(cuartoId, 4)

}


function crearPokemon(pokemon, num) {
//    Los datos se convierten en HTML
let item = document.querySelector(`#pokemon-${num}`)

/* console.log(item) */
// se selecciona sobre la lista
let imagen = item.getElementsByTagName("img")[0]
imagen.setAttribute("src", pokemon.sprites.front_default)
let nombre = item.getElementsByClassName("pokemonNombre")[0]
nombre.textContent = pokemon.name

// añadiendo codigo de prueba
const luchadorP = document.createElement('div');
luchadorP.classList.add('pokemon');
    const poke_types = pokemon.types.map(el => el.type.name);

    const type = main_types.find(
        type => poke_types.indexOf(type) > -1
    );
    
    const color = colors[type];
    console.log(color);
    luchadorP.style.backgroundColor = color;
    console.log(luchadorP);
const pokeInnerHTML = luchadorP;
luchadorP.innerHTML=pokeInnerHTML;

// hasta aqui codigo de prueba

}
luchadores()

/*   fetch("https://pokemon-go1.p.rapidapi.com/pokemon_stats.json", {
"method": "GET",
"headers": {
"x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
"x-rapidapi-key": "SIGN-UP-FOR-KEY"
}
})
.then(response => {
console.log(response);
})
.catch(err => {
console.log(err);
}); */
