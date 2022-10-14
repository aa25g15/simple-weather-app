import styled from 'styled-components';
import { respondTo } from '../../helpers/responsive/responsive';

export const StyledHeaderContainer = styled.div`
  display: flex;
  height: 100%; 
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${respondTo.LARGE}{
    flex-direction: row;
  }

  .custom-select{
    margin-left: 0;
    margin-top: 1rem;
    
    ${respondTo.LARGE}{
      margin-left: auto;
      margin-top: 0;
    }
  }
`