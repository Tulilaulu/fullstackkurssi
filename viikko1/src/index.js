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

const Button = ({clickfunction, title}) => {
  return (    
    <button onClick={clickfunction}>{title}</button>
  )
}

const Statistics = (props) => {
  if (props.state.good === 0 && props.state.neutral === 0 && props.state.bad === 0){
    return (<p>Palautteita ei ole annettu</p>)
  }else{
  return (
    <div>
      <h2>{props.title}</h2>
      <Statistic title="Hyvä" value={props.state.good}/>
      <Statistic title="Neutraali" value={props.state.good}/>
      <Statistic title="Huono" value={props.state.good}/>
      <Statistic title="Keskiarvo" value={round((props.state.bad * -1 + props.state.good * 1) / (props.state.good + props.state.neutral + props.state.bad), 2)}/>
      <Statistic title="Positiivisia" value={round((props.state.good / (props.state.good + props.state.neutral + props.state.bad))*100, 2)+"%"}/>
    </div>
  )}
}

const Statistic = ({value, title}) =>{
  return (
    <p>{title}: {value}</p>
  )
}

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

      addToState = (name) => {
        return () => { this.setState({[name]: this.state[name] + 1}) }
      }
      
      render() {
        return (
          <div>
            <h2>Anna palautetta</h2>
            <Button clickfunction={this.addToState("good")} title="Hyvä"/>
            <Button clickfunction={this.addToState("neutral")} title="Neutraali"/>
            <Button clickfunction={this.addToState("bad")} title="Huono"/>
            <Statistics state={this.state} title="Statistiikka"/>
          </div>
        )
      }
    }
    
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    )

