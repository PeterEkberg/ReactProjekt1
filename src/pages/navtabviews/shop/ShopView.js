
//import Axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import {getStarwarsCharacter} from '../../../shared/api/service/StarwarsAPIService'
import {CharacterContext} from '../../../shared/provider/CharacterProvider'

export const ShopView = () => {
    const [starwarsData, setStarwarsData] = useState()
    const [count, setCount] = useContext(CharacterContext)

    /*const getDataFromStarWarsAPI = () => {
        return (
            Axios.get(`https://swapi.dev/api/people/${count}/`)
            .then(response => setStarwarsData(response))
            .catch(error => console.log(error))
        )
    }*/

    const getData  = async () =>{ //Version2
        const response = await getStarwarsCharacter(count)
        setStarwarsData(response)
    }
    const setCounterdata = (x) => {
        if (x < 1) {
            setCount(1)
        } else {
            setCount(x)
        }
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
            <button onClick={()=>setCounterdata(count-1)}>Previous</button>
            <button onClick={()=>setCounterdata(count+1)}>Next</button>


       
        </div>
    )
}


