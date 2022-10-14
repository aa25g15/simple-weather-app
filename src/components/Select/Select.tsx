import { ReactElement, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StyledSelect, StyledSelectContainer } from './Select.styles';
import { CitiesContext } from '../../stores/Cities/Cities';

const Select = observer((): ReactElement => {
  const citiesContext = useContext(CitiesContext);

  return (
    <StyledSelectContainer>
      <StyledSelect>
        {citiesContext.cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.nm}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectContainer>
  );
});

export default Select;
