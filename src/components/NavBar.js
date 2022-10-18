import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="dropdown">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites</Link>
                </li>
            </ul> 
        </div>
        // <nav className="navbar navbar-dark bg-dark">
        //     <div className="container-fluid">
        //     <span className="navbar-brand mb-0 h1">Dog Pictures</span>
        //     </div>
        // </nav>
        
    )
}