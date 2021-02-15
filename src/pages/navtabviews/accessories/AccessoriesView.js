import { useState, useEffect, useContext } from 'react'
import { getStarwarsPlanet } from '../../../shared/api/service/StarwarsAPIService'
import { CharacterContext } from '../../../shared/provider/CharacterProvider'

export const AccessoriesView = () => {
    const [planetData, setPlanetData] = useState()
    const [count, setCount] = useContext(CharacterContext)
    //const [counter, setCounter] = useContext(CharacterContext)

    const getData = async () => { //Version2
        //const response = undefined
   
            const response = await getStarwarsPlanet(count)
            setPlanetData(response)

        
    }
    const setCounterdata = (x) => {
        if (x < 1) {
            setCount(1)
        } else {
            setCount(x)
        }
    }

    useEffect(() => {
        getData()
    }, [count])


    return (
        <div>
            <h1>ACCESSORIES</h1>
            <h1>Planet : {planetData?.data?.name}</h1>
            <h2>Gravity : {planetData?.data?.gravity}</h2>
            <h2>Population : {planetData?.data?.population}</h2>
            <button onClick={() => console.log(setPlanetData.data)}>Load Star Wars</button>
            <button onClick={() => setCounterdata(count - 1)}>Previous</button>
            <button onClick={() => setCounterdata(count + 1)}>Next</button>



        </div>
    )
}


