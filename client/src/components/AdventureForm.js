import React from "react"
import StarRating from './StarRating';
import useApplicationData from './../hooks/useApplicationData';

export default function AdventureForm(props) {
  const { 
    postAdventure
  } = useApplicationData()
  return (
    <main className="adventure__form">
      <form onSubmit={event => event.preventDefault()}>
        <input className="adventure__create-input"
          type="text"
          placeholder="adventure form"
        >
        </input>
        
      </form>
      <button onClick={() => postAdventure(12,'TEST','x','x','x',70,90,true,'98 Westbourne Grove','London','England','W2 5RU','United Kingdom',true,false,15,'Spring','Wellness')
}>Submit</button>
    </main>
  )
}
