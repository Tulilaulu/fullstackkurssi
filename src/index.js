import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (kurssi) => {
  
  return (
    <h1>{kurssi.kurssi.nimi}</h1>
  )
}

const Sisalto = (kurssi) => {
    const osat = kurssi.kurssi.osat
    return (
        <div>
            <Osa osa = {osat[0]}/>
            <Osa osa = {osat[1]}/>
            <Osa osa = {osat[2]}/>
        </div>
    )
  }

  const Osa = (osa) => {
    return (
        <p>{osa.osa.nimi} {osa.osa.tehtavia}</p>
    )
  }

  const Yhteensa = (kurssi) => {
    const osat = kurssi.kurssi.osat
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
)