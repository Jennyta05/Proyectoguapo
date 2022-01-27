import "../styles/character.css"


function Character({characterObject}) {
   
    const colors={
        Human: ["#106EDC" , "#03AFC7"],
        Alien: ["#B2FF59" , "#EEFF41"],
        Humanoid: ["#25794F" , "#48C2B8"],
        unknow: ["#d6d6d6" , "#888888"]

        }
    
        return (
            <div className="card-character" style={{
                backgroundImage: `linear-gradient(to right, ${colors[characterObject.species]})`
            }}>
                <img className="character-img" src={characterObject.image} alt="este es un personaje :D" />
                <div className="character-info">
                    <h2>{characterObject.name}</h2>
                    <p>{characterObject.species}</p>
                </div>
                <button className="characterButton">Episodios</button>
            </div>
        )
}
export {Character}