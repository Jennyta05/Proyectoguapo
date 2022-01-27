import { useEffect, useState } from "react";
import {ChangePage} from "./Changepage";
import {Character} from './Character';

function Characters(){
    // useState -> parametro1 : estado | parametro2 : nos pertmite cambiar el estado
    const [apicharacter, setApiCharacter] = useState("https://rickandmortyapi.com/api/character");
    // api info tiene  la pagina siguiente y anterior
    const [apiInfo, setApiInfo] = useState ([])
    const [charactersResults, setCharactersResults] = useState([])
    

    useEffect(() => {
    const fetchData = async () => {
        const getData = await fetch(apicharacter)
        const jsonData = await getData.json()
        setCharactersResults(jsonData.results)
        // guardamos info (link anterior, link siguiente)
        setApiInfo(jsonData.info)
    } 
    fetchData()
  }, [apicharacter]) 
    return (
        
        <>
        <div className="card-container">
            {charactersResults.map(character => (
                <Character
                    characterObject={character}
                    key={character.id}
                    />

            ))} 
         </div>
        
        <ChangePage
         apiInfo={apiInfo}
         setApiCharacter={setApiCharacter}
        />
        </>
    )
}


export {Characters};