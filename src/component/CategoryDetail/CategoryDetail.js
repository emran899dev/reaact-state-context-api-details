import React from 'react';

const CategoryDetail = (props) => {
    const {count} = props 
    return (
        <div>
            <h4>This is Category Detail Page. Count: {count}</h4>
        </div>
    );
};

export default CategoryDetail;