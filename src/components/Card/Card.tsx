import { PropsWithChildren, ReactElement } from 'react';
import { StyledCardContainer, WeatherType } from './Card.styles';

export type CardProps = {
  weather: WeatherType | null | 'solidWhiteSmoke' | 'solidDarkGray';
}

function Card({ children, weather }: PropsWithChildren<CardProps>): ReactElement {
  return (
    <StyledCardContainer className='card' weather={weather}>
      {children}
    </StyledCardContainer>
  );
}

export default Card;
