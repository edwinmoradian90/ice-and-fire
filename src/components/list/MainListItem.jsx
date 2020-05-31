import React from 'react'
import { Link } from 'react-router-dom'

function MainListItem(props) {
    const item = props.item
    console.log(item)
    return (
        <>
            {

                <Link to={item} className='listItem' >
                    <h3 className="itemTitle">{item}</h3>
                </Link >

            }
        </>
    )
}

export default MainListItem