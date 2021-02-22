import http from '../PokemonAPI'


export const getPokemonCharacter=(characterName)=>{
    return http.get(`/pokemon/${characterName}`)
}

