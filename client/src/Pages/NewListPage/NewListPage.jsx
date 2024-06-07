
import "./NewListPage.css"

import { useState } from 'react';
import getGroceriesFromAPI from '../../utils/kassalappApi';
import SearchResult from '../../components/SearchResult/SearchResult';

export default function NewListPage () {
  const [query, setQuery] = useState()
  const [itemList, setItemList] = useState([])

  const handleSumbit = async (event) => {
    event.preventDefault()
    const items = await getGroceriesFromAPI(query)
    setItemList(items)
  }

  const handleChange = (event) => {
    event.preventDefault()
    setQuery(event.target.value)
  }

  return (
    <div className='newListPage'>
      <form onSubmit={handleSumbit}>
        <input type='text' value={query} onChange={handleChange}/>
        <input type="submit" value="Submit" />
      </form>

      {
        itemList.length > 0 ? (
            <SearchResult items={itemList} />
        ) : (
          <p>ingen funn</p>
        )
      }
    </div>
  );
}