import { Link } from "react-router-dom";

function Navbar(){
return(
    <nav>
        <h2>My React Website</h2>

        <Link to={'/'}>Home</Link>
        {'|'}
        
        <Link to={'/About'}>About</Link>
        {'|'}

        
        <Link to={'/Contact'}>Contact</Link>
        {'|'}
    </nav>
);
}

export default Navbar;