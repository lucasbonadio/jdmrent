import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import {
    Container,
    Header,
    CarImage,
} from './styles';

export default function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }} />
            </Header>
            <CarImage>
                <ImageSlider imagesUrl={['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUvdz3mSse4J4n_cnGKuf_1gwjatKRO0cpQ&usqp=CAU']} />
            </CarImage>
        </Container>
    )
}