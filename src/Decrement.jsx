import React from 'react';
import { useDispatch } from 'react-redux';

const Decrement = () => {
        const dispatch = useDispatch()
        const handleMinus = () => {
            dispatch({type: 'Decrement'})
        }
        return (
            <button className='minus' onClick={handleMinus}>-</button>
        );
};

export default Decrement;