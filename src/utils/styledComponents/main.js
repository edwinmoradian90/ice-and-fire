import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/colors'
import { css } from '@emotion/core'

const { lightRed, red, darkRed, bloodRed, yellow } = colors

const colorMatcher = color => colors[color]

export const StyledLink = styled(Link)`
    text-decoration: none;
`
export const Container = styled.div`
    background: ${darkRed};
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'none'};
    height: ${props => props.height || 'auto'};
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
    display: ${props => props.display || 'flex'};
    justify-content: ${props => props.justifyContent || 'center'};
    font-size: ${props => props.fontSize || '1.2em'};
    color: ${props => colorMatcher(props.color) || yellow};
    font-family: Game of Thrones;
    padding: 20px;
    line-height: 40px;
    &: hover {
        hColor: ${ props => colorMatcher(props.hColor)};
        cursor: ${ props => props.cursor};
}
`

export const center = css`
    display: block;
    margin: 0 auto;
`