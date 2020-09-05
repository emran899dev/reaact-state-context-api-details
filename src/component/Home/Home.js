import React from 'react';
import Categories from '../Categories/Categories';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Home = () => {
    const count = useContext(CategoryContext)
    return (
        <div style={{border:"1px solid purple"}}>
            <h1>This is Home Component,{count}</h1>
            <Categories/>
        </div>
    );
};

export default Home;