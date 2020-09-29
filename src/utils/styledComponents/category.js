import styled from 'styled-components'
import colors from '../../utils/colors'

const { yellow, red } = colors

export const CategoryItem = styled.ul`
    display: flex;
    padding: 20px;
    list-style: none;
    color: ${yellow};
    background: ${red};
    font-family: Got;
    &:hover {
        color: ${red};
        background: ${yellow};
        transition: .5s;
        transform: scale(1.01)
    }
`;

export const CategoryItemIcon = styled.div`
    margin-right: 10px;
`


