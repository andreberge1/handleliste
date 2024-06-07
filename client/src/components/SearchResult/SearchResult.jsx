
import "./SearchResult.css"

export default function SearchResult ({ items }) {

    const handleAddItem = (item) => {
        alert("Pressed: " + item.product)
    }

    return (
        <div className="listContainer">
            <ul className="searchList">
                {
                    items.map(item => (
                        <li onClick={() => handleAddItem(item)} className="groceryItem">
                            <span>
                                {item.product}<br />
                                {item.vendor}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}