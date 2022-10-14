import { PropsWithChildren, ReactElement } from 'react';
import { StyledCardContainer, WeatherType } from './Card.styles';

export type CardProps = {
  weather?: WeatherType
}

function Card({ children, weather }: PropsWithChildren<CardProps>): ReactElement {
  return (
    <StyledCardContainer className='card' weather={weather || 'solidWhiteSmoke'}>
      {children}
    </StyledCardContainer>
  );
}

export default Card;
