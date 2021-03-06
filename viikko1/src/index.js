import React from 'react'
import ReactDOM from 'react-dom'

//Ensimmäinen tehtäväsetti

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

const App = () => {
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

//Toinen tehtäväsetti
/*
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
      <table><tbody>
        <Statistic title="Hyvä" value={props.state.good}/>
        <Statistic title="Neutraali" value={props.state.good}/>
        <Statistic title="Huono" value={props.state.good}/>
        <Statistic title="Keskiarvo" value={round((props.state.bad * -1 + props.state.good * 1) / (props.state.good + props.state.neutral + props.state.bad), 2)}/>
        <Statistic title="Positiivisia" value={round((props.state.good / (props.state.good + props.state.neutral + props.state.bad))*100, 2)+"%"}/>
      </tbody></table>
    </div>
  )}
}

const Statistic = ({value, title}) =>{
  return (
    <tr><td>{title}:</td><td>{value}</td></tr>
  )
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

class App extends React.Component {

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
    )*/
    const MostVoted = ({anecdotes, votes}) => {
      const index = votes.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
      return (
        <p>{anecdotes[index]}<br/>
        with {votes[index]} votes
        </p>
      )
    }

    class App extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          selected: 0,
          votes: new Array(anecdotes.length).fill(0)
        }
      }
      voteSelected = () => {
        const kopio = [...this.state.votes]
        kopio[this.state.selected] += 1
        this.setState({votes: kopio});
      }    

      render() {
        return (
          <div>
            {this.props.anecdotes[this.state.selected]}<br/>
            Votes: {this.state.votes[this.state.selected]}<br/>
            <button onClick={() => {this.voteSelected()}}>Vote</button><br/>
            <button onClick={() => {this.setState({selected:  Math.floor(Math.random() * this.props.anecdotes.length)})}}>Next anecdote</button>
            <br/><br/>
            Most votes:<br/>
            <MostVoted anecdotes={this.props.anecdotes} votes={this.state.votes}/>
          </div>
        )
      }
    }
    
    const anecdotes = [
      'If it hurts, do it more often',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]
    
    ReactDOM.render(
      <App anecdotes={anecdotes} />,
      document.getElementById('root')
    )

