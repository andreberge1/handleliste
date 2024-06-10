
import Button from '../../components/Button/Button';
import './Home.css';

import dummyLists from '../../utils/dummyList';
import { useState } from 'react';
import ShoppingListItem from '../../components/ShoppingListItem/ShoppingListItem';

export default function Home () {
    const [shoppingLists, setShoppingLists] = useState(dummyLists)

    const handleListItemClick = () => {
        alert("Testing")
    }

  return (
    <div className='homePage'>
        <div className="homePageHeading">
            <input type="text" placeholder="Finn handleliste" className="listSearch"/>
            <Button text={"Ny handleliste"} />
        </div>

        <div className="shoppingListContainer activeLists">
            <ul>
                {
                    shoppingLists.map(item => (
                        item.completed && (
                            <li onClick={handleListItemClick}>
                                <ShoppingListItem item={item} />
                            </li>
                        )
                    ))
                }
            </ul>
        </div>

        <div className="shoppingListContainer completedLists">
                <ul>
                    {
                        shoppingLists.map(item => (
                           !item.completed && (
                                <li onClick={handleListItemClick}>
                                    <ShoppingListItem item={item} />
                                </li>
                           )
                        ))
                    }
                </ul>
        </div>
    </div>
  );
}