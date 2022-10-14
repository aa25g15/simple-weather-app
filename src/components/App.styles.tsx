import styled from 'styled-components';
import { respondTo } from '../helpers/responsive/responsive';

export const StyledAppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 6rem 1fr;
  padding:  0 2rem 2rem 2rem;
  overflow-x: hidden;

  ${respondTo.LARGE} {
    padding:  0 3rem 3rem 3rem;
  }

  .card {
    display: flex;
    flex-direction: column-reverse;

    ${respondTo.LARGE} {
      flex-direction: row-reverse;
    }
  }
`

export const WeatherCardContainer = styled.div`
  height: 50%;
  width: 100%;
  padding: 1rem;

  ${respondTo.LARGE} {
    height: 100%;
    width: 50%;
    padding: 2rem;
  }
`