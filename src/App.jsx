import { useState } from 'react'
import './App.css'
import List from "./components/List"
import CounterButtons from './components/CounterButtons'

function App() {
  const itms = [
   {name: 'Chappy', photo: "https://media.istockphoto.com/id/1266736164/photo/playful-pup-on-the-bed.jpg?s=612x612&w=0&k=20&c=34xMcZiD7MXM8p9Z7CvxfBOC3b5a8gvd5QIPLP34St8="},
   {name: 'Tom', photo:'https://img.freepik.com/free-photo/selective-focus-black-white-adorable-cat-with-its-tongue-out_181624-35744.jpg'}, 
   {name:'Jerry', photo:'https://static5.depositphotos.com/1000152/479/i/600/depositphotos_4792647-stock-photo-funny-rat.jpg'}, 
   {name: 'Peppa', photo:'https://www.boredpanda.com/blog/wp-content/uploads/2022/01/61e019b9dea90_lyiSABO__700.jpg'}]
  return (
   <div className="App">
       <List items={itms} /> 
   </div>
  )
}


export default App
