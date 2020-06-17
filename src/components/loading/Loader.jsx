import React from 'react'
import { css } from '@emotion/core'
import RingLoader from 'react-spinners/ClipLoader'
import { Text, Title, LoadingContainer, Container } from '../../utils/styledComponents/main'
import colors from '../../utils/colors'

const { red } = colors

export function Loader(props) {
    const { loading } = props
    return (
        <Container className="loading">
            <LoadingContainer>
                <Title>Ice and Fire</Title>
                <Text className="loadingText">Loading...</Text>
                <RingLoader
                    size={60}
                    color={red}
                    loading={loading}
                />
            </LoadingContainer>
        </Container>
    )
}