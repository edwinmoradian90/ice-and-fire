import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import MainList from '../../components/list/MainList'

function Main(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://anapioficeandfire.com/api')
            .then(res => {
                setData(res)
                console.log('data set')
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <Header />
            <MainList data={data} {...props} />
        </div>
    )
}

export default Main