import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './../Components/Redux/Slice';
import {RootState} from "./../Components/Redux/Store"
import remove from "./../img/remove.png"

export default function Basket() {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem({ id }));
    };


  return (

            <div className='grabar-block-basket'>

            {items && items.length > 0 ? (
               items.map(item => (
                <div key={item.id} className='basket-work'>
                    <img className='otardr' src={item.otardrosh} alt="flag" />
                    <p className='otarhosk'>{item.otar}</p>

                    <div className='garbar-cent'>
                        <p className='punktir'>-</p>
                        <img className='zvezda rem' src={remove} onClick={() => handleRemoveItem(item.id)} alt="zvz" />
                    </div>

                    <img className='haydr' src={item.eraguin} alt="flag" />
                    <p className='hayhosk'>{item.grab}</p>
                </div>
            ))

        ) : (
            <p className='basket-p'>Корзина пуста</p>
        )}

            </div>
);
};
