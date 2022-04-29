import './css/TodoItem.css'

function TodoItem(props){
    const onComplete = () => {
        alert('Ya completaste el todo ' + props.text);
    };

    const onDelete = () => {
        alert('Borrate el todo ' + props.text)
    };

    return(
        <li className='flex-item'>
            <span 
                className={props.completed ? "icon icon--check--completed material-symbols-outlined" : "icon icon--check material-symbols-outlined"}
                onClick={onComplete}>
                check
            </span>
            <p className={props.completed ? 'homework-finished' : ''}>{props.text}</p>
            <span 
                className="icon icon--close material-symbols-outlined push-right" 
                onClick={onDelete}>
                close
            </span>
        </li>
    );
}

export { TodoItem };

