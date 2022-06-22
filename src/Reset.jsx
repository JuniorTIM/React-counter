import React from 'react';
import { useDispatch } from 'react-redux';

const Reset = () => {
        const dispatch = useDispatch()
        const handleReset = () => {
            dispatch({type: 'Reset'})
        }
        return (
            <button className='reset' onClick={handleReset}>Reset</button>
        );
};

export default Reset;