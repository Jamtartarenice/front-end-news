const HomePage = (props) => {

    const setInput = props.setInput;
    const input = props.input;
    const setName = props.setName;    
    
    const updateInput = (event) => setInput(event.target.value);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setName(props.input);
        setInput('');
    };

    return <form className="inputForm">
    <label id="input-label" htmlFor="name"></label>
        <input className="input-field"
        type ="text"
        onChange={updateInput}
        value={input}
        placeholder="Article ID"
        id="name"
        name="name"
        />
        <button onClick={handleSubmit} id="submitB">Search</button>
    </form>
}

export default HomePage;
