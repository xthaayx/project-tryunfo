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
      </form>
    );
  }
}

Filters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
