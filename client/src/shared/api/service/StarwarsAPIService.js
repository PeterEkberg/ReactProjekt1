import http from '../StarwarsAPI'


export const getStarwarsCharacter=(characterNumber)=>{
    return http.get(`/people/${characterNumber}`)
}

export const getStarwarsPlanet=(characterNumber)=>{
    return http.get(`/planets/${characterNumber}`)
}

/*export default {
    getStarwarsCharacter
}*/