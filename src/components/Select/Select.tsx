import { ReactElement, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StyledSelect, StyledSelectContainer } from './Select.styles';
import { CitiesContext } from '../../stores/Cities/Cities';

const Select = observer((): ReactElement => {
  const citiesContext = useContext(CitiesContext);

  return (
    <StyledSelectContainer className='custom-select'>
      <StyledSelect defaultValue={citiesContext.cities[0].id} onChange={(event) => citiesContext.setSelectedCity(Number(event.target.value))}>
        {citiesContext.cities.map((city, index) => (
          <option key={city.id} value={city.id}>
            {city.nm}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectContainer>
  );
});

export default Select;
