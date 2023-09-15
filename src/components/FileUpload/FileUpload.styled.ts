import styled from 'styled-components'
import { Button } from '../Button/Button'
import { theme } from '@/theme.styled'
const height = '16rem'
const width = '28rem'
export const Form = styled.form`
  height: ${height};
  width: ${width};
  max-width: 100%;
  text-align: center;
  position: relative;
  border: 1px solid ${theme.borderColor};
  border-radius: 8px;
  background-color: ${theme.backgroundColor};
  padding: 8px 16px;
`
export const Input = styled.input<{ id: 'input-file-upload'; type: 'file' }>`
  height: ${height};
  width: ${width};
  max-width: 100%;
  text-align: center;
  position: relative;
  display: none;
`
export const Label = styled.label<{
  htmlFor: 'input-file-upload'
  className: 'drag-active' | ''
}>`
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  &.drag-active {
    background-color: ${theme.backgroundColorFocus};
  }
`
export const Title = styled.p`
  font-size: ${theme.h1};
`
export const FormButton = styled(Button)`
  cursor: pointer;
  padding: 0.25rem;
  font-size: 1rem;
  border: none;
  font-family: 'Oswald', sans-serif;
  background-color: transparent;
  &:hover {
    text-decoration-line: underline;
  }
`
export const DragFileElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`
export const Thumbnail = styled.img<{ src: string }>`
  height: 8rem;
  width: 10rem;
`
