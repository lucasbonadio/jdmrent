import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize' 
import { FlatList } from 'react-native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
`

export const HeaderContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Header = styled.View`
    height: 113px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.header};
    justify-content: flex-end;
    padding: 4px 24px;
` 

export const TotalCars = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text}
`

export const CarList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})``;