import styled, { css } from 'styled-components';
import bgImage from '../../assets/images/pexels-picjumbocom-196663.jpeg'

const sunny = css`
  background-image: url('${bgImage}');
`

export type WeatherType = 'sunny' | 'thunder' | 'drizzle' | 'hail' | 'showers'
| 'rainy' | 'snowy' | 'frosty' | 'windy' | 'windy-rain' | 'windy-snow' |
'sleet' | 'mist' | 'cloud'

export type StyledCardContainerProps = {
  weather: WeatherType | 'solidWhiteSmoke';
}

export const StyledCardContainer = styled.div<StyledCardContainerProps>`
  width: 100%;
  height: 100%;
  border-radius: 3rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({theme}) => theme.color.pageBackground};

  ${({weather}) => {
    if(weather === 'sunny'){
      return sunny;
    }
  }}
`