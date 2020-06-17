import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/colors'

const { lightRed, red, darkRed, bloodRed, yellow } = colors

export const StyledLink = styled(Link)`
    text-decoration: none;
`
export const Container = styled.div`
    background: ${darkRed};
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
`

export const LoadingContainer = styled.div`
    background: ${darkRed};
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 50%;
    padding-bottom: 100px;
    padding-top: 100px;
`
export const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 2em;
    padding: 20px;
    text-decoration: none;
    background: ${red};
    color: ${yellow};
    font-family: Game of Thrones;
`
export const Text = styled.p`
    display: flex;
    justify-content: center;
    font-size: 1.5em;
    color: ${yellow};
    background: ${red};
    font-family: Game of Thrones;
`

