import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import List from '../../components/list/List'

function Main(props) {
    const categories = [
        {
            name: 'books',
            title: 'Books',
            description: 'This is about books.'
        },
        {
            name: 'characters',
            title: 'Characters',
            description: 'This is about characters.'
        },
        {
            name: 'authors',
            title: 'Authors',
            description: 'This is about authors.'
        }
    ]

    return (
        <div>
            <Header />
            <List categories={categories} {...props} />
        </div>
    )
}

export default Main