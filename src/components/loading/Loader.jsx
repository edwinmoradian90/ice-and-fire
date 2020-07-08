import React from 'react'
import PropTypes from 'prop-types'
import {
    Text,
    Title,
    LoadingContainer,
    Container,
    center
} from '../../utils/styledComponents/main'
import RingLoader from 'react-spinners/ClipLoader'
import colors from '../../utils/colors'

const { red } = colors

export function Loader(props) {
    const { loading } = props
    return (
        <Container className="loading">
            <Title>Ice and Fire</Title>
            <LoadingContainer>
                <Text className="loadingText">Loading...</Text>
                <RingLoader
                    css={center}
                    size={60}
                    color={red}
                    loading={loading}
                />
            </LoadingContainer>
        </Container>
    )
}

Loader.propTypes = {
    loading: PropTypes.bool
}