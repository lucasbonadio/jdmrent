import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About
} from './styles';

export default function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }} />
            </Header>

            <CarImages>
                <ImageSlider imagesUrl={['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUvdz3mSse4J4n_cnGKuf_1gwjatKRO0cpQ&usqp=CAU']} />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Toyota</Brand>
                        <Name>Supra MK4</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <About>
                    O lendario supra. Um dos mais iconicos carros do mercado jdm
                </About>
            </Content>

        </Container>
    )
}