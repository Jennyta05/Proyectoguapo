import {NavLink} from "react-router-dom"
function Navbar(){
    return (

        <div>
            <ul>
                <li>
                    <NavLink to="/Characters">Characters</NavLink>
                </li>
                <li>
                    <NavLink to="/">Home</NavLink> {/* el navlink sirve para que no se recargue la pag al hace click */}
                </li>
                <li>
                    <NavLink to="/Episodes">Episodes</NavLink>
                </li>
                <li>
                    <NavLink to="/Location">Location</NavLink>
                </li>
                
            </ul>
        </div>
    )
}

export {Navbar} 