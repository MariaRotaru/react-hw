import React from 'react'
import PetCard from './PetCard'
function List({ items = []}) {
  return (
    <>
    <ul>
        {items.map((pet) => (
        <PetCard {...pet} />
        ))}
    </ul>
    </>
  );
}

export default List