import React, { useState, useEffect } from 'react'
import CategoryListItem from './CategoryListItem'

function CategoryList(props) {
    const { data, category } = props
    return (
        <>
            {data.map((item, i) => {
                return (
                    <li key={i}><CategoryListItem item={item} category={category} /></li>
                )
            })}
        </>
    )
}

export default CategoryList