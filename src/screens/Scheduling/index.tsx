import React from "react";
import { BackButton } from "../../components/BackButton";
import { useTheme } from "styled-components";
import { StatusBar } from "react-native";

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
} from './styles'

import Arrow from '../../assets/arrowright.svg'


export default function Scheduling() {
    const theme = useTheme()

    return (
        <Container>
            <Header>
                <StatusBar 
                    barStyle='light-content'
                    translucent
                    backgroundColor='transparent'
                />
                <BackButton
                    onPress={() => { }}
                    color={theme.colors.shape}
                />
                <Title>
                    Escolha uma {'\n'}
                    data de inicio e {'\n'}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}>

                        </DateValue>
                    </DateInfo>

                    <Arrow
                        height={35}
                        width={35}
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}>

                        </DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>
        </Container>
    )
}