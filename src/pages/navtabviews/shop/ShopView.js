
//import Axios from 'axios'
import {useState, useEffect} from 'react'
import StarwarsAPIServices from '../../../shared/api/service/StarwarsAPIService'

export const ShopView = () => {
    const [starwarsData, setStarwarsData] = useState()
    const [count, setCount] = useState(1)

    /*const getDataFromStarWarsAPI = () => {
        return (
            Axios.get(`https://swapi.dev/api/people/${count}/`)
            .then(response => setStarwarsData(response))
            .catch(error => console.log(error))
        )
    }*/

    const getData  = async () =>{ //Version2
        const response = await StarwarsAPIServices.getStarwarsCharacter(count)
        setStarwarsData(response)
    }
 
    useEffect(()=>{
        getData()
    },[count])

   
    return (
        <div>
            <h1>SHOP</h1>
            <h1>Name : {starwarsData?.data?.name}</h1>
            <h2>Gender : {starwarsData?.data?.gender}</h2>
            <h2>Längd : {starwarsData?.data?.height}</h2>
            <h2>Hair : {starwarsData?.data?.hair_color}</h2>
            <button onClick={()=>console.log(starwarsData.data)}>Load Star Wars</button>
            <button onClick={()=>setCount(count-1)}>Previous</button>
            <button onClick={()=>setCount(count+1)}>Next</button>


       
        </div>
    )
}


