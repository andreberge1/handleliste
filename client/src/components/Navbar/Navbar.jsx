
import "./Navbar.css"
import avatar from "../../img/avatar.jpg"
import { Link } from "react-router-dom"

export default function Navbar () {

    return (
        <>
            <div className="navbar">
                <span className="pageName">
                    <p className="title">
                        <Link to="/">Handlelappen</Link>
                    </p>
                </span>

                <ul>
                    <li className="navListItem">
                        <Link to="/">Mine lister</Link>
                    </li>
                    <li className="navListItem">
                        <Link to="/newlist">Ny liste</Link>
                    </li>
                </ul>

                <div className="avatarContainer">
                    <img src={avatar} alt="Profile avatar" className="profileAvatar" />
                </div>
                
            </div>
        </>
    )
}