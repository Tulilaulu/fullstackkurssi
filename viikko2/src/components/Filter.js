import React from 'react'

  const Filter = ({action, filter}) => {
    return (
        <div><form>
        <p>Rajaa:</p> 
        <input
            value={filter}
            onChange={action}/>
      </form></div>
    )
  }

  export default Filter