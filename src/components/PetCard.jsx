import React from 'react'

function PetCard({name, photo}) {
  return (
    <div style={{ border: '5px solid gray', borderRadius:'15px', display:'block', marginBottom:'10px'}}>
       <h1>{name}</h1>
       <img src={photo} style={{ width:'auto', height:'500px'}}></img>
    </div>
  )
}

export default PetCard

