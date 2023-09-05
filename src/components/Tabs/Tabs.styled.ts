import styled from 'styled-components'
import { theme } from '@/theme.styled'
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.borderColor};
    width: fit-content;
    border-radius: 8px;
    margin: 8px auto;
`
export const Tab = styled.div`
    height: 34px;
    width: 56px;
    color: black;
    font-size:20px;
    &:hover{
        background-color: ${theme.backgroundColorActive};
        cursor: pointer;
    }
    &:first-child{
        border-radius: 8px 0 0 8px;
    }
    &:last-child{
        border-radius: 0 8px 8px 0;
    }
    &:not(&:last-child){
        border-right: 1px solid ${theme.borderColor};
    }
`