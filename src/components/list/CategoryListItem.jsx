import React from 'react'
import { convertName } from '../../utils/helpers'
import { StyledLink } from '../../utils/styledComponents/main'
import { CategoryItem } from '../../utils/styledComponents/category'

function CategoryListItem(props) {
    const { category } = props
    const { name, numberOfPages, released, aliases, url } = props.item
    const id = url.split('/')[url.split('/').length - 1]
    console.log(id)
    let availableName = name ? name : aliases[0]
    const convertedName = convertName(availableName)
    const newUrl = `${category}/${id}/${convertedName}`

    return (
        <StyledLink to={newUrl} id={id}>
            <CategoryItem id={id}>
                <li id={id} className={name ? 'title' : 'd_none'}> {name} </li>
                <li id={id} className={aliases ? 'aliases' : 'd_none'}> {aliases}</li>
                <li id={id} className={numberOfPages ? 'numberOfPages' : 'd_none'}>
                    {numberOfPages} pages
                    </li>
                <li id={id} className={released ? 'released' : 'd_none'}>{released}</li>
            </CategoryItem>
        </StyledLink>
    )
}

export default CategoryListItem