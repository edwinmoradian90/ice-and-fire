import React, { useEffect, useDispatch } from 'react'
import Header from '../../components/header/Header'
import axios from 'axios'

function Display(props) {
    const currentUrl = props.location.pathname.split(('/'))
    console.log(currentUrl)
    useEffect(() => {
        axios.get(currentUrl)
    })

    return (
        <div>
            <Header />
        </div>
    )
}

export default Display