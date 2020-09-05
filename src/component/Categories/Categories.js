import React, { useContext, useState, useEffect } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { CategoryContext } from '../../App';

const allProduct = [{name: 'Lenavo',category: 'laptop'},{name: 'Asus',category: 'laptop'},{name: 'Dell',category: 'laptop'},
                {name: 'Samsung',category: 'mobile'},{name: 'Nokia',category: 'mobile'},{name: 'Apple',category: 'mobile'},
                {name: 'Canon',category: 'camera'},{name: 'Nikkon',category: 'camera'},{name: 'Sony',category: 'camera'}
]

const Categories = () => {
    const [category] = useContext(CategoryContext)
    const [product,setProduct] = useState([])
    useEffect(()=>{
        const matchProduct = allProduct.filter(pd => pd.category.toLowerCase() === category.toLowerCase())
        setProduct(matchProduct)
    },[category])
    return (
        <div>
            <h3>This is Category Page.{category}</h3>
            {
                product.map(pd => <CategoryDetail product={pd}/>)
            }
        </div>
    );
};

export default Categories;