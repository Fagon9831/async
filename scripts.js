const link_pokeapi = "https://pokeapi.co/api/v2/pokemon/";
const link_openlibrary = "http://openlibrary.org/search.json?"
const link_audiodb = "https://theaudiodb.com/api/v1/json/2/search.php?s="
const link_swapiP = "https://swapi.dev/api/people/?search="
const link_nasa = "https://api.nasa.gov/neo/rest/v1/feed?"
const link_pokeapiG = "https://pokeapi.co/api/v2/generation/1/"
//Exercise1
const LoadPokemon = async () => {
    document.querySelector(".section-results").innerHTML = ""
    document.querySelector(".section-optinos").innerHTML = ""
    let searchPoke = document.querySelector(".section-options__inputsearch").value
    const response = await fetch(`${link_pokeapi}${searchPoke}`)
    const result = await response.json()
    for (let i in result.types) {
        console.log(result.types[i].type.name)
    }
    let span = document.createElement("span")
    span.textContent = "Se ha impreso por consola los tipos del pokemon: " + result.name
    document.querySelector(".section-results").appendChild(span)
}
let button_poke = document.querySelector(".section-buttons__pokemon")
button_poke.addEventListener("click", () => {
    document.querySelector(".section-options").innerHTML = ""    
    let input = document.querySelector(".section-options__inputsearch")
    if (!input) {
        document.querySelector(".section-results").innerHTML = ""
        input = document.createElement("input");
        input.classList.add("section-options__inputsearch")
        document.querySelector(".section-options").appendChild(input)
        let button = document.createElement("button");
        button.classList.add("section-options__inputbtn")
        button.textContent = "Buscar Pokemon"
        button.addEventListener("click", LoadPokemon)
        document.querySelector(".section-options").appendChild(button)
    }

});

//Exercise2
const LoadBooks = async (parameter) => {
    document.querySelector(".section-results").innerHTML = ""
    let parameterTosearch = document.querySelector(".section-options__inputsearch").value
    const response = await fetch(`${link_openlibrary}${parameter}${parameterTosearch}`)
    const result = await response.json()
    let authors = []
    let books = []
    if (parameter == "title=") {
        for (let i in result.docs) {
            //console.log(result.docs[i].title)
            for (let j in result.docs[i].author_name) {
              //  console.log(result.docs[i].author_name[j])
                authors.push(result.docs[i].author_name[j])
            }
            let span = document.createElement("span")            
            span.innerHTML = `El primer libro encontrado es:${result.docs[i].title}, 
              Los autores de este libro son: ${authors}`
            document.querySelector(".section-results").appendChild(span)
            break;
        }
    } else if (parameter == "author=") {
        for (let i in result.docs) {            
            books.push(result.docs[i].title)
        }
        let span = document.createElement("span")            
            span.innerHTML = `Los libros encontrados para este autor son: ${books}`
            document.querySelector(".section-results").appendChild(span)
    }
}
let button_oLibrary = document.querySelector(".section-buttons__olibrary1")
button_oLibrary.addEventListener("click", () => {
    document.querySelector(".section-options").innerHTML = ""
    document.querySelector(".section-results").innerHTML = ""
    let input = document.querySelector(".section-options__inputsearch")
    if (!input) {
        input = document.createElement("input");
        input.classList.add("section-options__inputsearch")
        document.querySelector(".section-options").appendChild(input)
        let button = document.createElement("button");
        button.classList.add("section-options__inputbtn")
        button.textContent = "Buscar Libro"
        button.addEventListener("click", () => LoadBooks("title="))
        document.querySelector(".section-options").appendChild(button)
    }

});
// Exercise 3
let button_oLibraryA = document.querySelector(".section-buttons__olibrary2")
button_oLibraryA.addEventListener("click", () => {
    document.querySelector(".section-options").innerHTML = ""
    document.querySelector(".section-results").innerHTML = ""
    let input = document.querySelector(".section-options__inputsearch")
    if (!input) {
        input = document.createElement("input");
        input.classList.add("section-options__inputsearch")
        document.querySelector(".section-options").appendChild(input)
        let button = document.createElement("button");
        button.classList.add("section-options__inputbtn")
        button.textContent = "Buscar Libro"
        button.addEventListener("click", () => LoadBooks("author="))
        document.querySelector(".section-options").appendChild(button)
    }

});
// Exercise 4
const LoadMusicBand = async () => {
    document.querySelector(".section-results").innerHTML = ""
    let searchBand = document.querySelector(".section-options__inputsearch").value
    const response = await fetch(`${link_audiodb}${searchBand}`)
    const result = await response.json()
    //console.log(result.artists)
    
    for (let i in result.artists) {
        // (type of result.types)-> other form where utilice to array of result
        console.log(result.artists[i].strGenre)
    }
    let span = document.createElement("span")            
    span.textContent = `Se ha escrito el genero de la banda en la consola`
    document.querySelector(".section-results").appendChild(span)
}
let button_MusicBand = document.querySelector(".section-buttons__audiodb")
button_MusicBand.addEventListener("click", () => {
    document.querySelector(".section-options").innerHTML = ""
    document.querySelector(".section-results").innerHTML = ""
    let span = document.createElement("span")            
    span.textContent = `La unica banda disponible en esta api para obtener el genero es: coldplay`
    document.querySelector(".section-results").appendChild(span)
    let input = document.querySelector(".section-options__inputsearch")
    if (!input) {
        input = document.createElement("input");
        input.classList.add("section-options__inputsearch")
        document.querySelector(".section-options").appendChild(input)
        let button = document.createElement("button");
        button.classList.add("section-options__inputbtn")
        button.textContent = "Buscar Banda"
        button.addEventListener("click", LoadMusicBand)
        document.querySelector(".section-options").appendChild(button)
    }

});

//Exercise 5
const LoadPersonaje = async () => {
    let searchPerson = document.querySelector(".section-options__inputsearch").value
    const response = await fetch(`${link_swapiP}${searchPerson}`)
    const result = await response.json()
//    console.log(result)
document.querySelector(".section-results").innerHTML = ""
let temp=[]
    for (let i in result.results[0].films) {
        const responsef = await fetch(`${result.results[0].films[i]}`)
        const resultf = await responsef.json()
        temp.push(resultf.title)
    }
    let span = document.createElement("span")            
    span.textContent = `Las peliculas donde aparece este peronaje son: ${temp}`
    document.querySelector(".section-results").appendChild(span)
    
}
let button_Person = document.querySelector(".section-buttons__swapi")
button_Person.addEventListener("click", () => {
    document.querySelector(".section-options").innerHTML = ""
    document.querySelector(".section-results").innerHTML = ""
    let input = document.querySelector(".section-options__inputsearch")
    if (!input) {
        input = document.createElement("input");
        input.classList.add("section-options__inputsearch")
        document.querySelector(".section-options").appendChild(input)
        let button = document.createElement("button");
        button.classList.add("section-options__inputbtn")
        button.textContent = "Buscar Personaje de Starwars"
        button.addEventListener("click", LoadPersonaje)
        document.querySelector(".section-options").appendChild(button)
    }

});

//Exercise 6
const Loadpoke151 = async () => {
    document.querySelector(".section-results").innerHTML = ""
    document.querySelector(".section-options").innerHTML = ""
    let span = document.createElement("span")            
    span.textContent = `Se ha impreso por consola el arreglo de objetos de los 151 pokemons de primera generacion`
    document.querySelector(".section-results").appendChild(span)
    const response = await fetch(`${link_pokeapiG}`)
    const result = await response.json()
    let arrayObject = []
    for (let i in result.pokemon_species) {
        const responsef = await fetch(`${link_pokeapi}${result.pokemon_species[i].name}`)
        const resultf = await responsef.json()
        let moveTemp = []
        let typeTemp = []
        resultf.moves.forEach((param1) => {
            moveTemp.push(param1.move.name)
        });
        resultf.types.forEach((param1) => {
            typeTemp.push(param1.type.name)
        });
        let pokeTemp = {
            "name": result.pokemon_species[i].name,
            "moves": moveTemp,
            "types": typeTemp,
            "height": resultf.height,
            "weight": resultf.weight
        }
        arrayObject.push(pokeTemp)
    }
    console.log(arrayObject)
}
let button_Pok151 = document.querySelector(".section-buttons__pokemon151")
button_Pok151.addEventListener("click", Loadpoke151);

//Exercise 7
const LoadDangerEarth = async () => {
    document.querySelector(".section-results").innerHTML = ""
    document.querySelector(".section-options").innerHTML = ""
    let dateC = new Date();
    dateC.setDate(dateC.getDate() - 1)
    dateC = dateC.toISOString().slice(0, 10)
    let dateP = new Date();
    dateP.setDate(dateP.getDate() - 8)
    dateP = dateP.toISOString().slice(0, 10)
    const response = await fetch(`${link_nasa}start_date=${dateP}&end_date=${dateC}&api_key=DEMO_KEY`)
    const result = await response.json()
    console.log(result.near_earth_objects)
    let span = document.createElement("span")                
    span.textContent = `Se ha impreso por consola el arreglo de objetos con todos los asteorides que estan cerca de la tierra,desde hace na semana`
    document.querySelector(".section-results").appendChild(span)
}
let button_nasa = document.querySelector(".section-buttons__nasa")
button_nasa.addEventListener("click", LoadDangerEarth);
