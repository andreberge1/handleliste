
import "./NewListPage.css"

import { useState } from 'react';
import getGroceriesFromAPI from '../../utils/kassalappApi';
import SearchResult from '../../components/SearchResult/SearchResult';

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

  return (
    <div className='newListPage'>

        <div className="newListContainer">
            <input type="text" placeholder="Ny liste" className="nameInput"/>

            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#072A40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>

            {
                shoppingList.length > 0 ? (
                    <ul>
                        {
                            shoppingList.map(item => (
                                <li>
                                    {item.product}
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