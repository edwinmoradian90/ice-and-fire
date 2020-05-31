import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import CategoryList from '../../components/list/CategoryList'
import axios from 'axios'

function Categories(props) {
    console.log(props.match.path)
    const category = props.match.path
    console.log(category)
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://anapioficeandfire.com/api${category}`)
            .then(res => {
                setData(res.data)
                console.log(data)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <Header category={category} />
            <CategoryList data={data} category={category} />
        </>
    )
}

export default Categories