import { useState } from 'react';

import getGroceriesFromAPI from '../../utils/kassalappApi';
import SearchResult from '../../components/SearchResult/SearchResult';

import SaveIcon from "../../Icons/SaveIcon";
import HamburgerIcon from "../../Icons/HamburgerIcon";
import RemoveIcon from "../../Icons/RemoveIcon"

import "./NewListPage.css"
import Button from '../../components/Button/Button';

export default function NewListPage () {
  const [query, setQuery] = useState()
  const [searchItemList, setsearchItemList] = useState([])
  const [shoppingList, setShoppingList] = useState([])

  const handleSumbit = async (event) => {
    event.preventDefault()
    const items = await getGroceriesFromAPI(query)
    setsearchItemList(items)
  }

  const handleChange = (event) => {
    event.preventDefault()
    setQuery(event.target.value)
  }

  const handleRemove = value => {
    setShoppingList(prev => {
        return prev.filter(item => item !== value)
    })
  }

  return (
    <div className='newListPage'>

        <div className="newListContainer">
            <div className="newListHeader">
                <input type="text" placeholder="Ny liste" className="nameInput"/>
                <SaveIcon size={"45"} />
            </div>

            {
                shoppingList.length > 0 ? (
                    <ul>
                        {
                            shoppingList.map(item => (
                                <li className="shoppingListItem" key={item.ean}>
                                    <span>
                                        <p className="product">{item.product}</p>
                                        <p className="vendor">{item.vendor}</p>
                                    </span>
                                    <span className="removeButton" onClick={() => handleRemove(item)}>
                                        <RemoveIcon size={"35"} />
                                    </span>

                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <p>Ingen varer</p>
                )
            }
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