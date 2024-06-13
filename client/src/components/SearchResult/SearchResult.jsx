
import "./SearchResult.css"

export default function SearchResult ({ queryItems, setShoppingList }) {

    const handleAddItem = (item) => {
        setShoppingList(prev => {
            const itemCategory = item.category
                ? item.category.find(cat => cat.depth === -2)?.name || "Annet"
                : "Annet"

            const categoryItems = prev[itemCategory] || []
            const itemExists = categoryItems.some(existingItem => existingItem.ean === item.ean)

            if (itemExists) {
                return prev
            }

            const updatedCategoryItems = [...categoryItems, item]

            return {
                ...prev,
                [itemCategory]: updatedCategoryItems
            }

        })
    }

    return (
        <div className="listContainer">
            <ul className="searchList">
                {
                    queryItems.map(item => (
                        <li onClick={() => handleAddItem(item)} className="groceryItem">
                            <span>
                                <p className="product">{item.product}</p>
                                <p className="vendor">{item.vendor || "Ukjent"}</p>
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}