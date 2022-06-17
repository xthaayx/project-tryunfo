import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const SUM_MAX = 210;
const NUMBER_MAX = 90;
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
    this.buttonDisabled = this.buttonDisabled.bind(this);
    this.saveState = this.saveState.bind(this);
  }

  onInputChange(event) {
    const { name } = event.target;
    let { value } = event.target;
    this.setState({ [name]: value }, () => this.buttonDisabled());
    value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  }

  buttonDisabled() {
    const { name, description, image, rare, attr1, attr2, attr3 } = this.state;
    const sum = Number(attr1) + Number(attr2) + Number(attr3);
    if (
      name !== ''
      && description !== ''
      && image !== ''
      && rare !== ''
      && attr1 >= 0 && attr2 >= 0 && attr3 >= 0
      && attr1 <= NUMBER_MAX && attr2 <= NUMBER_MAX && attr3 <= NUMBER_MAX
      && sum <= SUM_MAX
    ) return this.setState({ disabled: false });
    this.setState({ disabled: true });
  }

  saveState() {
    this.setState({ ...INITIAL_STATE });
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
          onSaveButtonClick={ this.saveState }
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
