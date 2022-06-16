import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const INITIAL_STATE = {
  name: '',
  description: '',
  attr1: '0',
  attr2: '0',
  attr3: '0',
  image: '',
  rare: 'normal',
  trunfo: false,
  disabled: true,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ...INITIAL_STATE,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const { name } = event.target;
    let { value } = event.target;
    this.setState({ [name]: value });
    value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  }

  render() {
    const { name, description, attr1, attr2, attr3,
      image, rare, trunfo, disabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          isSaveButtonDisabled={ disabled }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
