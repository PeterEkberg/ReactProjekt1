import { useState, useEffect, useContext } from 'react'
import { getPokemonCharacter } from '../../../shared/api/service/PokemonAPIService'

export const BrandsView = () => {
    const [pokemonData, setPokemonData] = useState()
    const [id, setId] = useState(1)
    const [name, setName] = useState('')

    const getData = async () => { //Version2
        try {
            const response = await getPokemonCharacter(name)
            setPokemonData(response)
            //setId(pokemonData.data.id)
            console.log('DATA  ',pokemonData.data.id)
        } catch (error) {
            console.log('pokemonData  ',pokemonData)
            if(pokemonData){
                console.log('NO DATA')
                setName(1)
            }else{
                setName('')
            }
         }
    }

    const setCounterdata = (newCount) => {
        console.log('ID 1=', id, ', newCount= ', newCount)
        /*const aa=id
        const   bb=newCount
        const cc=aa+bb
        console.log('ccc=', cc)
        {setId(cc)}
        console.log('ID 2=', id)*/
        //if (id < 1) {
            //setId(1)
        //    setName(1)
        //} else {
            setId(newCount)
            setName(newCount)
        //}
        console.log('setCounterdata name=', newCount)
    }

    useEffect(() => {
        getData()
    }, [name])

    return (
        <div>
            <h1>POKEMON</h1>
            <h1 >Name : {pokemonData?.data?.name}</h1>
            <h2>Id : {pokemonData?.data?.id}</h2>
            <h2>Längd : {pokemonData?.data?.height}</h2>
            <input onChange={event => setName(event.target.value)}></input>
            <button onClick={() => console.log(pokemonData)}>Load PokemonData</button><br/><br/>
            <button onClick={() => setCounterdata(-1)}>Previous</button>
            <button onClick={() => setCounterdata(1)}>Next</button><br/><br/>
            <button onClick={() => setCounterdata((pokemonData.data.id<2) ? 1 : pokemonData.data.id-1)}>Previous</button>
            <button onClick={() => setCounterdata((pokemonData.data.id==NaN) ? 1 : pokemonData.data.id+1)}>Next</button>
        </div>
    )
}


