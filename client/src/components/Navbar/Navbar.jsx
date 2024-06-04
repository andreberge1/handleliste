
import "./Navbar.css"
import avatar from "../../img/avatar.jpg"

export default function Navbar () {

    return (
        <>
            <div className="navbar">
                <span className="pageName">
                    <p>Handlelappen</p>
                </span>
                <img src={avatar} alt="Profile avatar" className="profileAvatar" />
            </div>
        </>
    )
}