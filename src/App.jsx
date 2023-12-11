import { useState,useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import ListOfArticles from './components/ListOfArticles'

function App() {

  const [input,setInput] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(name)
  },[name]);

  return (
    <>
      <SearchBar input={input} setInput={setInput} setName={setName}/>
      <ListOfArticles />
    </>
  )
}

export default App
