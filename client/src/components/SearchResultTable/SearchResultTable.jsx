
import "./SearchResultTable.css"

export default function SearchResultTable ({ items }) {

    const handleAddItem = (item) => {
        alert("Pressed: " + item.product)
    }

    return (
        <div className="tableContainer">
            <table className="searchResultTable">
                <thead>
                    <tr>
                        <th>Vare</th>
                        <th>Leverandør</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => (
                            <tr onClick={() => handleAddItem(item)} className="dataRow">
                                <td>{item.product}</td>
                                <td>{item.vendor}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}