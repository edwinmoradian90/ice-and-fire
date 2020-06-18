import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/colors'
import { css } from '@emotion/core'

const { lightRed, red, darkRed, bloodRed, yellow } = colors

export const StyledLink = styled(Link)`
    text-decoration: none;
`
export const Container = styled.div`
    background: ${darkRed};
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const LoadingContainer = styled.div`
    background: ${darkRed};
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
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
    font-family: Game of Thrones;
    padding: 20px;
`

export const center = css`
    display: block;
    margin: 0 auto;
`