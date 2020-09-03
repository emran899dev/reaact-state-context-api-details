import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Categories = (props) => {
    const {count} = props
    return (
        <div>
            <h3>This is Category Page.</h3>
            <CategoryDetail count={count}/>
        </div>
    );
};

export default Categories;