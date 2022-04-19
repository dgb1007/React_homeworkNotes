import './css/TodoItem.css'

function TodoItem(props){
    return(
        <li className='flex-item'>
            <span>{props.key}</span>
            <p>{props.text}</p>
            <span>{props.completed}</span>
        </li>
    );
}

export { TodoItem };