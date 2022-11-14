import React from "react";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import speed from '../../assets/speed.svg'
import acceleration from '../../assets/acceleration.svg'
import steeringwheel from '../../assets/steeringwheel.svg'
import petrol from '../../assets/petrol.svg'
import transmission from '../../assets/transmission.svg'
import people from '../../assets/people.svg'

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
    About,
    Accessories,
    Footer,
} from './styles';
import { Button } from "../../components/Button";

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

                <Accessories>
                    <Accessory name="335Km/h" icon={speed} />
                    <Accessory name="4.3s" icon={acceleration} />
                    <Accessory name="321hp" icon={steeringwheel} />
                    <Accessory name="Gasolina" icon={petrol} />
                    <Accessory name="Manual" icon={transmission} />
                    <Accessory name="2 pessoas" icon={people} />
                </Accessories>

                <About>
                    O lendario supra. Um dos mais iconicos carros do mercado jdm
                    O lendario supra. Um dos mais iconicos carros do mercado jdm
                    O lendario supra. Um dos mais iconicos carros do mercado jdm
                    O lendario supra. Um dos mais iconicos carros do mercado jdm
                    O lendario supra. Um dos mais iconicos carros do mercado jdm
                    O lendario supra. Um dos mais iconicos carros do mercado jdm
                </About>
            </Content>

            <Footer>
                <Button
                    title="Confirmar"
                />
            </Footer>

        </Container>
    )
}