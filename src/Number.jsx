import React from 'react';
import { useSelector } from 'react-redux';

const Number = () => {
    const num = useSelector((state) => state.number)
    return (
        <>
        <div className='num'>{num}</div>
        </>
    );
};

export default Number;