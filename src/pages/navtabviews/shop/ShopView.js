
import Axios from 'axios'
import {useState, useEffect} from 'react'


export const ShopView = () => {
    const [starwarsData, setStarwarsData] = useState()

    const getDataFromStarWarsAPI = () => {
        return (
            Axios.get('https://swapi.dev/api/people/1/')
            .then(response => setStarwarsData(response))
            .catch(error => console.log(error))
        )
    }

    useEffect(()=>{
        getDataFromStarWarsAPI()
    },[])

        
    return (
        <div>
            <h1>SHOP</h1>
            <button onClick={()=>console.log(starwarsData)}>Load Star Wars</button>

        </div>
    )
}


