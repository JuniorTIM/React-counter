import React from 'react';
import { useDispatch } from 'react-redux';

const Increment = () => {
    const dispatch = useDispatch()
    const handlePlus = () => {
        dispatch({type: 'Increment'})
    }
    return (
        <button className='plus' onClick={handlePlus}>+</button>
    );
};

export default Increment;