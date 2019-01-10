import React from 'react'

const Yhteensa = ({osat}) => {
    return (
        <p>yhteensä {osat.reduce((acc, curr)=> acc + curr.tehtavia, 0)} tehtävää</p>
    )
  }

  export default Yhteensa  