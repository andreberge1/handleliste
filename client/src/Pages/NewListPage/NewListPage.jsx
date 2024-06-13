import { useState } from 'react';

import getGroceriesFromAPI from '../../utils/kassalappApi';
import SearchResult from '../../components/SearchResult/SearchResult';

import SaveIcon from "../../Icons/SaveIcon";
import RemoveIcon from "../../Icons/RemoveIcon"

import "./NewListPage.css"
import Button from '../../components/Button/Button';

export default function NewListPage () {
  const [query, setQuery] = useState()
  const [searchItemList, setSeachItemList] = useState([])
  const [shoppingList, setShoppingList] = useState({})

  const handleSumbit = async (event) => {
    event.preventDefault()
    const items = await getGroceriesFromAPI(query)
    setSeachItemList(items)
  }

  const handleChange = (event) => {
    event.preventDefault()
    setQuery(event.target.value)
  }

  const handleRemove = value => {
    setShoppingList(prev => {
        const updatedList = {}

        Object.keys(prev).forEach(category => {
            const updatedCategoryItems = prev[category].filter(item => item.ean !== value.ean)

            if (updatedCategoryItems.length > 0) {
                updatedList[category] = updatedCategoryItems
            }
        })

        return updatedList
    })
  }

  return (
    <div className='newListPage'>

        <div className="newListContainer">
            <div className="newListHeader">
                <input type="text" placeholder="Ny liste" className="nameInput"/>
                <SaveIcon size={"45"} />
            </div>

            {Object.entries(shoppingList).map(([category, items]) => (
                <div key={category} className="shoppingListCategory">
                    <p>{category}</p>

                    <ul>
                        {items.map(item => (
                            <li className="shoppingListItem" key={item.ean}>
                                <span>
                                    <p className="product">{item.product}</p>
                                    <p className="vendor">{item.vendor || "Ukjent"}</p>
                                </span>
                                <span id='removeButton' onClick={() => handleRemove(item)}>
                                    <RemoveIcon size={"35"} />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <div className="searchContainer">
            <form onSubmit={handleSumbit} className='apiQueryForm'>
                <input type='text' className="searchInput" value={query} onChange={handleChange}/>
                <Button text={"Søk"} />
            </form>

            {
                searchItemList.length > 0 ? (
                    <SearchResult queryItems={searchItemList} setShoppingList={setShoppingList} />
                ) : (
                <p>ingen funn</p>
                )
            }
        </div>
    </div>
  );
}