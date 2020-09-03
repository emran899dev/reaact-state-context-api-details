import React from 'react';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const {count} = props
    return (
        <div style={{border:"1px solid purple"}}>
            <h1>This is Home Component,{count}</h1>
            <Categories count={count}/>
        </div>
    );
};

export default Home;