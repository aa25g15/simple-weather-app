import styled from 'styled-components';

export const StyledSelect = styled.select`
  height: 2rem;
  border: none;
  outline: none;
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
`