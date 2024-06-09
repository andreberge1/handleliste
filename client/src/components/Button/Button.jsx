
import "./Button.css"

export default function Button ({ text }) {

    return (
        <button className="mainButton" type="submit">{text}</button>
    )
}