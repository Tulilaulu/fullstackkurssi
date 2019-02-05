import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

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

//Toinen tehtäväsetti
/*
import Filter from './components/Filter';
import Person from './components/Person';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        persons: [],
        newName: '',
        newNumber: '',
        filter: ''
      }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('promise fulfilled')
      this.setState({ persons: response.data })
    })    
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
        {persons.map(person => <Person key={person.id} person={person} />)}
      </div>
    )
  }
}

export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
*/


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        countries: [],
        search: ''
      }
  }

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log(response.data[0])
      this.setState({ countries: response.data })
    })    
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value })
  }
  
  countryClicked = (event) => {
    this.setState({ search: event.target.innerText })
  }

  render() {
    const countries =
    this.state.search === '' ?
      this.state.countries :
      this.state.countries.filter(country => country.name.toLowerCase().includes(this.state.search.toLowerCase()) === true)
    let countriesHTML = "too many results";
    if (countries.length < 11 && countries.length > 1) {
      countriesHTML = countries.map(country => <p key={country.name} onClick={this.countryClicked}>{country.name}</p>)
    } else if (countries.length === 1){
      const country = countries[0]
      countriesHTML = <div><h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <img style={{width: '200px'}} src={country.flag}/></div>;
    } else if (countries.length === 0){
      countriesHTML = "no results"
    }
    return (
      <div>
        <form>
        <p>Search:</p> 
        <input
            value={this.state.search}
            onChange={this.handleSearchChange}/>
        </form>
        <br/>
        {countriesHTML}
      </div>
    )
  }
}

export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
