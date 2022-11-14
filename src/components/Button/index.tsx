import React from "react";
import theme from "../../styles/theme";

import {
    Container,
    Title
} from './styles'

interface Props {
    title: string
    color?: string
}

export function Button({
    title,
    color,
    ...rest
} : Props) {
    return (
        <Container {...rest} color={color ? color : '#DC1637'}>
            <Title>{title}</Title>
        </Container>
    )
}