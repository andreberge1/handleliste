import { useState } from 'react';
import './Home.css';
import getGroceriesFromAPI from '../../utils/kassalappApi';
import SearchResultTable from '../../components/SearchResultTable/SearchResultTable';

export default function Home () {
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
    <div className='homePage'>
      <p>hello wordl</p>
      <form onSubmit={handleSumbit}>
        <input type='text' value={query} onChange={handleChange}/>
        <input type="submit" value="Submit" />
      </form>

      {
        itemList.length > 0 ? (
            <SearchResultTable items={itemList} />
        ) : (
          <p>ingen funn</p>
        )
      }
    </div>
  );
}