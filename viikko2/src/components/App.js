import React from 'react'
import Kurssi from './Kurssi'

const App = ({kurssit}) => {
  
    return (
      <div>
        <h1>Opetusohjelma</h1><br/>
        <div>
            {kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi} />)}
        </div>
      </div>
    )
}  

export default App
