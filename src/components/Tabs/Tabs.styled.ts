import styled, { css } from 'styled-components'
import { theme } from '@/theme.styled'
export type TabProps = {
  $active: boolean
}
export type TabContentProps = {
  $width: number
  $height: number
}
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.borderColor};
  width: fit-content;
  border-radius: 8px;
  margin: 0px auto;
`
export const Tab = styled.div<TabProps>`
  height: 34px;
  width: 56px;
  color: black;
  font-size: 20px;
  &:hover {
    background-color: ${theme.backgroundColorFocus};
    cursor: pointer;
  }
  &:first-child {
    border-radius: 8px 0 0 8px;
  }
  &:last-child {
    border-radius: 0 8px 8px 0;
  }
  &:not(&:last-child) {
    border-right: 1px solid ${theme.borderColor};
  }
  ${(props) => {
    switch (props.$active) {
      case true:
        return css`
          background-color: ${theme.backgroundColorFocus};
        `
    }
  }}
`
export const TabContent = styled.div<TabContentProps>`
  display: flex;
  border: 1px solid ${theme.borderColor};
  width: 300px;
  height: 500px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 8px;
  padding: 8px 0;
  overflow: auto;
  overflow-x: hidden;
  & > div {
    height: inherit;
  }
  ${(props) => {
    return css`
      width: ${props.$width}px;
      height: ${props.$height}px;
    `
  }}
`
