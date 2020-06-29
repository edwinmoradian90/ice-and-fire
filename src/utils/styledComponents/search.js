import styled from 'styled-components'
import colors from '../colors'

const { red, yellow } = colors

export const SearchContainer = styled.div`
    height: 100px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SearchBar = styled.input`
    display: flex;
    justify-content: center;
    padding: 10px;
    border: 0;
    background: black;
    color: ${yellow};
    font-size: 1em;
`;

export const SearchButton = styled.span`
    margin-left: 10px;
    padding: 10px;
    &:hover {
        cursor: pointer;
    }
`
