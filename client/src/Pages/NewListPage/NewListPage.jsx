
import "./NewListPage.css"

import { useState } from 'react';
import getGroceriesFromAPI from '../../utils/kassalappApi';
import SearchResult from '../../components/SearchResult/SearchResult';

import SaveIcon from "../../Icons/SaveIcon";
import HamburgerIcon from "../../Icons/HamburgerIcon";
import RemoveIcon from "../../Icons/RemoveIcon"

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

  const handleRemove = (event) => {
    event.preventDefault();
  }

  return (
    <div className='newListPage'>

        <div className="newListContainer">
            <input type="text" placeholder="Ny liste" className="nameInput"/>

            <SaveIcon size={"45"} />

            <HamburgerIcon size={"45"} />

            {
                shoppingList.length > 0 ? (
                    <ul>
                        {
                            shoppingList.map(item => (
                                <li className="shoppingListItem">
                                    <span>
                                        <p className="product">{item.product}</p>
                                        <p className="vendor">{item.vendor}</p>
                                    </span>
                                    <span className="removeButton" onClick={() => handleRemove()}>
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
            <form onSubmit={handleSumbit}>
                <input type='text' value={query} onChange={handleChange}/>
                <input type="submit" value="Submit" />
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