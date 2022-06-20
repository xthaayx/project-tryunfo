import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { onInputChange } = this.props;

    return (
      <form>
        <label htmlFor="filterName">
          Buscar
          <input
            data-testid="name-filter"
            type="text"
            onChange={ onInputChange }
            name="filterName"
            id="filterName"
          />
        </label>
        <label htmlFor="filterRare">
          Filtar por raridade
          <select
            onChange={ onInputChange }
            data-testid="rare-filter"
            name="filterRare"
            id="filterRare"
          >
            <option value="todas" checked>Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="filterTrunfo">
          Filtrar por trunfo
          <input
            onChange={ onInputChange }
            data-testid="trunfo-filter"
            type="checkbox"
            name="filterTrunfo"
            id="filterTrunfo"
          />
        </label>
      </form>
    );
  }
}

Filters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
