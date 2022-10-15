import styled, { css } from 'styled-components';
import bgImageSunny from '../../assets/images/pexels-picjumbocom-196663.jpeg';
import bgImageCloud from '../../assets/images/pexels-pixabay-416920.jpeg';
import bgImageDrizzle from '../../assets/images/pexels-arina-krasnikova-7002970.jpeg';
import bgImageFrosty from '../../assets/images/pexels-pixabay-64227.jpeg';
import bgImageHail from '../../assets/images/pexels-julia-filirovska-8237250.jpeg';
import bgImageMist from '../../assets/images/pexels-pixabay-163323.jpeg';
import bgImageShowers from '../../assets/images/pexels-genaro-servín-763398.jpeg';
import bgImageWindy from '../../assets/images/pexels-gotta-be-worth-it-919306.jpeg';
import bgImageThunder from '../../assets/images/pexels-andre-furtado-1162251.jpeg';
import { WeatherCodes } from '../../data/weatherCodes';

const sunny = css`
  background-image: url('${bgImageSunny}');
`
const cloud = css`
  background-image: url('${bgImageCloud}');
`
const drizzle = css`
  background-image: url('${bgImageDrizzle}');
`
const frosty = css`
  background-image: url('${bgImageFrosty}');
`
const hail = css`
  background-image: url('${bgImageHail}');
`
const mist = css`
  background-image: url('${bgImageMist}');
`
const showers = css`
  background-image: url('${bgImageShowers}');
`
const windy = css`
  background-image: url('${bgImageWindy}');
`
const thunder = css`
  background-image: url('${bgImageThunder}');
`
const whiteSmoke = css`
  background-color: ${({theme}) => theme.color.pageBackground};
`
const darkGray = css`
  background-color: ${({theme}) => theme.color.text};
`

export type WeatherType = keyof typeof WeatherCodes;

export type StyledCardContainerProps = {
  weather: WeatherType | null | 'solidWhiteSmoke' | 'SolidDarkGray';
}

export const StyledCardContainer = styled.div<StyledCardContainerProps>`
  width: 100%;
  height: 100%;
  border-radius: 3rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({theme}) => theme.color.text};

  ${({weather}) => {
    switch(weather) {
      case 'sunny':
        return sunny;
      case 'cloud':
        return cloud;
      case 'drizzle':
        return drizzle;
      case 'frosty':
      case 'snowy':
      case 'windySnow':
      case 'sleet':
        return frosty;
      case 'hail':
        return hail;
      case 'mist':
        return mist;
      case 'rainy':
      case 'showers':
      case 'windyRain':
        return showers;
      case 'windy':
        return windy;
      case 'thunder':
        return thunder;
      case 'SolidDarkGray':
        return darkGray;
      default:
        return whiteSmoke;
    }
  }}
`