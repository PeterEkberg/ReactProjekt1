import http from '../StarwarsAPI'

const getDataLuke =()=>{
    return http.get('people/1/')
}
const getStarwarsCharacter=(characterNumber)=>{
    return http.get(`/people/${characterNumber}`)
}

export default {
    getStarwarsCharacter
}