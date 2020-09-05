import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';


const CategoryDetail = (props) => {
const {name} = props.product

    return (
        <div>
            <p>Selected  Detail Category: {name}</p>
        </div>
    );
};

export default CategoryDetail;