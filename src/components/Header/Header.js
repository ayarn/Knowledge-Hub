import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="text" style={{padding: "10px"}}>
            <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet"/>
            <Link to="/Home" className="title">
            <div className='box'>
            <h class="gradient-text">Knowledge-Hub</h>
            </div>
            </Link>
            <hr className="divider" />
        </div>
    )
}

export default Header
