import React, { useState } from 'react';
import { GrabarID } from './Type';
import bask from "./../img/Basket.png";
import { useDispatch } from 'react-redux';
import { addItem } from './Redux/Slice';

interface GrabarProps {
    grabar: GrabarID;
}

const Word: React.FC<GrabarProps> = (props) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(props.grabar));
    };

    return (
        <div className='grabar-block'>
            <img className='otardr' src={props.grabar.otardrosh} alt="flag" /> 
            <p className='otarhosk'>{props.grabar.otar}</p>
            <div className='garbar-cent'>
                <p className='punktir'>-</p>
                <img onClick={handleAddToCart} className='zvezda' src={bask} alt="zvz" />
            </div>
            <img className='haydr' src={props.grabar.eraguin} alt="flag" />
            <p className='hayhosk' onClick={handleAddToCart} >{props.grabar.grab}</p>
        </div>
    );
}

export default Word;