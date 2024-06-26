
import CopyIcon from "../../Icons/CopyIcon"
import EditIcon from "../../Icons/EditIcon"
import ShareIcon from "../../Icons/ShareIcon"

import "./ShoppingListItem.css"

export default function ShoppingListItem ({ item }) {

    const click = () => {
        alert("test")
    }

    const clickTwo = (event) => {
        event.stopPropagation()
        alert(item.name)
    }

    return (
        <div className="mainShoppingListComp" onClick={() => click()}>
            <div className="buttonContainer">
                <button className="actionButton" onClick={clickTwo}>
                    <EditIcon size={"35"} />
                </button>
                <button className="actionButton" onClick={clickTwo}>
                    <CopyIcon size={"35"} />
                </button>
                <button className="actionButton" onClick={clickTwo}>
                    <ShareIcon size={"35"} />
                </button>
            </div>
            <div className="shoppingListNameGrid">
                <p className="shoppingListName">{item.name}</p>
            </div>
            <div className="createdDateTitle">
                <p className="shoppingListSubtitle">Dato laget:</p>
            </div>
            <div className="createdDate">
                <p className="shoppingListData">{item.date}</p>
            </div>
            <div className="completedDateTitle">
                <p className="shoppingListSubtitle">Dato ferdig:</p>
            </div>
            <div className="completedDate">
                <p className="shoppingListData">20.20.2022</p>
            </div>
            <div className="numOfItemsTitle">
                <p className="shoppingListSubtitle"># Varer:</p>
            </div>
            <div className="numberOfItems">
                <p className="shoppingListData">18</p>
            </div>
        </div>
    )
}