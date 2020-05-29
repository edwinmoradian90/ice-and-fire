import React from 'react'
import Header from '../../components/header/Header'
import List from '../../components/list/List'

function Categories(props) {
    const categories = [
        {
            name: 'book-one',
            title: 'Book One',
            description: 'This is the first book.'
        },
        {
            name: 'book-two',
            title: 'Book Two',
            description: 'This is the second book.'
        }
    ]
    console.log(props)
    const category = props.match.params.categories
    return (
        <>
            <Header category={category} />
            <List categories={categories} />
        </>
    )
}

export default Categories