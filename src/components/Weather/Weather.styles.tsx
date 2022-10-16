import styled from 'styled-components';
import { respondTo } from '../../helpers/responsive/responsive';

export const StyledWeatherInfoContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;

    ${respondTo.MEDIUM} {
        padding: 2rem;
    }

    .current-weather{
        display: flex;
        flex-direction: row;

        .city-name{
            font-size: 1.5rem;
            padding-right: 1rem;
            color: ${({theme}) => theme.color.text};

            ${respondTo.LARGE} {
                font-size: 3rem;
            }
        }
    }

    .current-weather-data{
        margin-left: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-bottom: 2rem;

        .current-temperature-container{
            display: grid;
            grid-template-areas:
            "a c"
            ". c"
            "b c";

            .current-temperature{
                font-size: 3rem;
                color: ${({theme}) => theme.color.text};
                grid-area: c;
                margin-right: 0.3rem;

                ${respondTo.LARGE} {
                    font-size: 6rem;
                }
            }

            .current-temperature-high{
                font-size: 1rem;
                color: ${({theme}) => theme.color.warn};
                grid-area: a;
                align-items: flex-start;
            }

            .current-temperature-low{
                font-size: 1rem;
                color: ${({theme}) => theme.color.cool};
                grid-area: b;
            }
        }

        .current-additional-info{
            margin-top: 1rem;
            display: flex;
            justify-content: flex-end;

            .current-description{
                font-size: 1rem;
                color: ${({theme}) => theme.color.text};
                display: flex;
                align-items: center;
                justify-content: center;
                text-transform: uppercase;
                margin: 0 1rem;
                text-align: right;
            }

            .weather-icon {
                font-size: 2rem;
                color: ${({theme}) => theme.color.text};
            }
        }
    }

    .forecast-data{
        margin-top: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        .day-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            &:first-child {
                border-right: 1px solid ${({theme}) => theme.color.grey};
            }

            &:last-child {
                border-left: 1px solid ${({theme}) => theme.color.grey};
            }
        
            .day-name{
                font-size: 1rem;
                color: ${({theme}) => theme.color.text};

                ${respondTo.MEDIUM} {
                    font-size: 1.5rem;
                }
            }

            .weather-icon{
                font-size: 2rem;
                color: ${({theme}) => theme.color.text};
            }

            .forecast-temperature-container{
                display: grid;
                grid-template-areas:
                ". c ."
                "a . b";

                ${respondTo.MEDIUM} {
                    grid-template-areas:
                    "a c"
                    ". c"
                    "b c";
                }

                .forecast-temperature {
                    font-size: 1.5rem;
                    color: ${({theme}) => theme.color.text};
                    grid-area: c;
                    margin-left: 0;

                    ${respondTo.MEDIUM} {
                        font-size: 2rem;
                        margin-left: 0.3rem;
                    }
                }

                .forecast-temperature-high {
                    font-size: 0.8rem;
                    color: ${({theme}) => theme.color.warn};
                    grid-area: a;

                    ${respondTo.MEDIUM} {
                        font-size: 1rem;
                    }
                }

                .forecast-temperature-low {
                    font-size: 0.8rem;
                    color: ${({theme}) => theme.color.cool};
                    grid-area: b;

                    ${respondTo.MEDIUM} {
                        font-size: 1rem;
                    }
                }
            }
        }
    }
`

export const StyledLoader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledErrorContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 10rem 0;
`

