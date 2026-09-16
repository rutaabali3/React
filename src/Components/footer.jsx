import { Link } from "react-router-dom";

function Footer(){
return(
    <nav>
        <h2>Footer</h2>

        <Link to={'/'}>Home</Link>
        {'|'}
        
        <Link to={'/About'}>About</Link>
        {'|'}

        
        <Link to={'/Contact'}>Contact</Link>
        {'|'}

        <Link to={'/Services'}>Services</Link>
    </nav>
);
}

export default Footer;