import styled from 'styled-components';
import ChevronDown from '../Svg/Logo copy';

export const StyledSelect = styled.select`
  height: 2rem;
  border: none;
  outline: none;
  background-color: ${({theme}) => theme.color.white};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`

export const StyledSelectContainer = styled.div`
  border-radius: 100vh;
  padding: 0 1rem;
  border: 1px solid ${({theme}) => theme.color.grey};
  background-color: ${({theme}) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`

export const StyledChevronDown = styled(ChevronDown)`
  position: absolute;
  right: 1rem;
  top: 1rem;
`