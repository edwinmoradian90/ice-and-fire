import React from 'react'
import PropTypes from 'prop-types'
import { convertName } from '../../utils/helpers'
import { StyledLink } from '../../utils/styledComponents/main'
import { CategoryItem, CategoryItemIcon } from '../../utils/styledComponents/category'
import { GiWingedSword } from 'react-icons/gi'

function CategoryListItem(props) {
    const { category } = props
    const { name, aliases, url } = props.item
    const id = url.split('/')[url.split('/').length - 1]
    let availableName = name ? name : aliases[0]
    const convertedName = convertName(availableName)
    const newUrl = `${category}/${id}/${convertedName}`

    return (
        <StyledLink to={newUrl} id={id}>
            <CategoryItem id={id}>
                <CategoryItemIcon>
                    <GiWingedSword />
                </CategoryItemIcon>
                <li id={id} className={name ? 'title' : 'd_none'}> {name} </li>
                <li id={id} className={aliases && !name ? 'aliases' : 'd_none'}> {aliases}</li>
            </CategoryItem>
        </StyledLink>
    )
}

const { string, array } = PropTypes
CategoryListItem.propTypes = {
    category: string.isRequired,
    name: string,
    aliases: array,
    url: string
}

export default CategoryListItem
