import SearchBar from './SearchBar'
import ListOfArticles from './ListOfArticles'
import { useState } from 'react'

const Home = () => {
    const [input,setInput] = useState('');
    const [name, setName] = useState('');

    return <>
        <SearchBar input={input} setInput={setInput} setName={setName}/>
        <ListOfArticles />
    </>
};

export default Home;