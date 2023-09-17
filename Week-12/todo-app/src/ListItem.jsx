import React, {useState} from "react"
import deleteIcon from "./img/Delete-button.png";

const ListItem = ({deleteTodo, todo}) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseHover = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    return (
        <div className={"delete-button"} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseOut}>
            {isHovering && 
                <img src= {deleteIcon} class="delete-icon" 
                    onClick = { () => {
                    deleteTodo(todo);
                }}></img>
            }
        </div>
    );

}

export default ListItem;