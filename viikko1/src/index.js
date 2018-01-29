import React from 'react'
import ReactDOM from 'react-dom'

/*const Otsikko = (props) => {
  
  return (
    <h1>{props.kurssi.nimi}</h1>
  )
}

const Sisalto = (props) => {
    const osat = props.kurssi.osat
    return (
        <div>
            <Osa osa = {osat[0]}/>
            <Osa osa = {osat[1]}/>
            <Osa osa = {osat[2]}/>
        </div>
    )
  }

  const Osa = (props) => {
    return (
        <p>{props.osa.nimi} {props.osa.tehtavia}</p>
    )
  }

  const Yhteensa = (props) => {
    const osat = props.kurssi.osat
    return (
        <p>yhteensä {osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia} tehtävää</p>
    )
  }

const App = () => { //Ensimmäinen tehtäväsetti
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }
    return (
      <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto kurssi={kurssi} />
        <Yhteensa kurssi={kurssi} />
      </div>
    )
  }
  ReactDOM.render(
  <App />,
  document.getElementById('root')
)*/

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

class App extends React.Component {
  //tehtäväsetti 2
    constructor(props) {
        super(props)
        this.state = {
          good: 0,
          neutral: 0,
          bad: 0
        }
      }
    
      render() {
        return (
          <div>
            <h2>Anna palautetta</h2>
            <button onClick={()=> this.setState({good: this.state.good + 1})}>Hyvä</button>
            <button onClick={()=> this.setState({neutral: this.state.neutral + 1})}>Neutraali</button>
            <button onClick={()=> this.setState({bad: this.state.bad + 1})}>Huono</button>
            <h2>Statistiikka</h2>
            <p>Hyvä: {this.state.good}</p>
            <p>Neutraali: {this.state.neutral}</p>
            <p>Huono: {this.state.bad}</p>
            <p>Keskiarvo: {round((this.state.bad * -1 + this.state.good * 1) / (this.state.good + this.state.neutral + this.state.bad), 2)} </p>
            <p>Positiivisia: {round((this.state.good / (this.state.good + this.state.neutral + this.state.bad))*100, 2)}%</p>
          </div>
        )
      }
    }
    
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    )

