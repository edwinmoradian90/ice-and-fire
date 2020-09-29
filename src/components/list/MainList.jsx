import React from 'react'
import PropTypes from 'prop-types'
import MainListItem from './MainListItem'

function MainList(props) {
    const { data } = props
    return (
        <>
            {data['data']
                ? Object.keys(data.data).map((item, i) => (
                    <div key={i}><MainListItem {...props} item={item} /></div>
                ))
                :
                null
            }
        </>
    )
}

MainList.propTypes = {
    data: PropTypes.object,
}

export default MainList