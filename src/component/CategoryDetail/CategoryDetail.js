import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
     
    const category = useContext(CategoryContext)
    return (
        <div>
            <h4>This is Category Detail Page</h4>
            <p>Selected Category: {category}</p>
        </div>
    );
};

export default CategoryDetail;