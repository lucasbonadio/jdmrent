import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'


import { Car } from '../../components/Car'

import Logo from '../../assets/logo.svg'

import {
    Container, 
    Header,
    HeaderContent, 
    TotalCars,
    CarList
} from './styles'

const Home = () => {
    const carDataOne = {
        brand: 'Nissan',
        name: 'Skyline',
        rent: {
            period: 'ao dia',
            price: 120,
        },
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5gLmeMF_5IiVVUsKj3EDhZoYgWVnZhEaTw&usqp=CAU'
    }
    const carDataTwo = {
        brand: 'Toyota',
        name: 'Supra MK4',
        rent: {
            period: 'ao dia',
            price: 150,
        },
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUvdz3mSse4J4n_cnGKuf_1gwjatKRO0cpQ&usqp=CAU'
    }
    

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>Total de 12 Carros</TotalCars>
                </HeaderContent>
            </Header>

            <CarList 
            data={[1,2,3,4,5,6]}
            keyExtractor={item => String(item)}
            renderItem={({ item }) => <Car data={carDataOne} />}            
            />
            

        </Container>
    )
}

export default Home;
