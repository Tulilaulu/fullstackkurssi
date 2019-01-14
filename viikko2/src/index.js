import React from 'react'
import ReactDOM from 'react-dom'

//Ensimmäinen tehtäväsetti
/*
import App from './components/App'

const kurssit = [
  {
    nimi: 'Half Stack -sovelluskehitys',
    id: 1,
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  },
  {
    nimi: 'Node.js',
    id: 2,
    osat: [
      {
        nimi: 'Routing',
        tehtavia: 3,
        id: 1
      },
      {
        nimi: 'Middlewaret',
        tehtavia: 7,
        id: 2
      }
    ]
  }
]

ReactDOM.render(
  <App kurssit={kurssit} />,
  document.getElementById('root')
)
*/

import Filter from './components/Filter';
import Person from './components/Person';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        persons: [
          { name: 'Arto Hellas', number: '040-123456' },
          { name: 'Martti Tienari', number: '040-123456' },
          { name: 'Arto Järvinen', number: '040-123456' },
          { name: 'Lea Kutvonen', number: '040-123456' }
        ],
        newName: '',
        newNumber: '',
        filter: ''
      }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  addPerson = (event) => {
    event.preventDefault()
    if (this.state.persons.find(o => o.name === this.state.newName) === undefined){
        const person = {
            name: this.state.newName,
            number: this.state.newNumber
        }
    
        const persons = this.state.persons.concat(person)
    
        this.setState({
            persons: persons,
            newName: '',
            newNumber: ''
        })
    } else {
        alert("Nimi löytyy jo")
    }
  }
  
  render() {

    const persons =
    this.state.filter === '' ?
      this.state.persons :
      this.state.persons.filter(person => person.name.toLowerCase().startsWith(this.state.filter.toLowerCase()) === true)
  
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Filter action={this.handleFilterChange} filter={this.state.filter} />
        <form onSubmit={this.addPerson}>
            <p>Lisää uusi:</p>
            <div>
                nimi: <input 
                    onChange={this.handleNameChange}
                    value={this.state.newName}/>
            </div>
            <div>
                numero: <input 
                    onChange={this.handleNumberChange}
                    value={this.state.newNumber}/>
            </div>
            <div>
                <button type="submit">lisää</button>
            </div>
        </form>
        <h2>Numerot</h2>
        {persons.map(person => <Person key={person.name} person={person} />)}
      </div>
    )
  }
}

export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)