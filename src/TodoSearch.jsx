import './css/TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue}){

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input 
            name='newTask' 
            autoFocus placeholder="ingresar"
            value={searchValue}
            onChange={onSearchValueChange}/>
    );
        
}

export { TodoSearch };