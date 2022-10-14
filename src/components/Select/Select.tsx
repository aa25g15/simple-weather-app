import { ReactElement } from 'react';
import { StyledSelect, StyledSelectContainer } from './Select.styles';
import cities from '../../data/cities-fr.json';

function Select(): ReactElement {
  return (
    <StyledSelectContainer>
      <StyledSelect>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.nm}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectContainer>
  );
}

export default Select;
