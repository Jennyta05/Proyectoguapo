function ChangePage({setApiCharacter, apiInfo}) {

    const prevPage =(event) => {
        setApiCharacter(apiInfo.prev);
    }

    const nextPage =(event) => {
        setApiCharacter(apiInfo.next);
    }

    return (
        <div> 
            <button className="sig" onClick={nextPage}>Siguiente</button>
            <button classname="prev" onClick={prevPage}>Anterior</button>
        </div>
    )
}
export {ChangePage}
