import styled from 'styled-components'
import colors from '../../utils/colors'

const { yellow, red } = colors

export const CategoryItem = styled.ul`
    padding: 20px;
    list-style: none;
    color: ${yellow};
    background: ${red};
    font-family: Game of Thrones;
    &:hover {
        color: ${red};
        background: ${yellow};
        transition: .5s;
        transform: scale(1.01)
    }
`;