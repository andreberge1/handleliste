
import Button from '../../components/Button/Button';
import './Home.css';

import dummyLists from '../../utils/dummyList';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import ShoppingListItem from '../../components/ShoppingListItem/ShoppingListItem';
import NewListModal from '../../components/NewListModal/NewListModal';

export default function Home () {
    const [shoppingLists, setShoppingLists] = useState(dummyLists)
    const [modalState, setModalState] = useState(false)
    const navigate = useNavigate()

    const handleNewListClick = () => {
        const path = "newList"
        navigate(path)
    }

    const showModal = (e) => {
        setModalState(!modalState)
    }

  return (
    <div className='homePage'>
        <NewListModal onClose={showModal} show={modalState} />
        <div className="homePageHeading">
            <input type="text" placeholder="Finn handleliste" className="listSearch"/>
            <span onClick={showModal}>
                <Button text={"Ny handleliste"} />
            </span>
        </div>

        <div className="shoppingListContainer">
            <p className='shoppingListHeader'>Aktive lister</p>
            <ul>
                {
                    shoppingLists.map(item => (
                        item.completed && (
                            <li>
                                <ShoppingListItem item={item} />
                            </li>
                        )
                    ))
                }
            </ul>
        </div>

        <div className="shoppingListContainer">
            <p className='shoppingListHeader'>Fullførte lister</p>
            <ul>
                {
                    shoppingLists.map(item => (
                        !item.completed && (
                            <li>
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