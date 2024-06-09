
import "./SearchResult.css"

export default function SearchResult ({ queryItems, setShoppingList }) {

    const handleAddItem = (item) => {
        setShoppingList(prev => [...prev, item])
    }

    return (
        <div className="listContainer">
            <ul className="searchList">
                {
                    queryItems.map(item => (
                        <li onClick={() => handleAddItem(item)} className="groceryItem">
                            <span>
                                <p className="product">{item.product}</p>
                                <p className="vendor">{item.vendor}</p>
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}