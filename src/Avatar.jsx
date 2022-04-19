import './css/style.css';

function Avatar(props){
    return(
        <div className="avatar">
            <img src={props.urlimage} alt="" />
        </div>
    );
}

export default Avatar;