import './css/CreateTodoButtom.css'

function CreateTodoButtom(){
    const onClickButton = (msg) => {
        alert(msg);
    };
    return(
        <button
        className='buttonPlus'
        onClick={() => onClickButton('Dimos Click')}
        >+</button>
    );
}

export { CreateTodoButtom };