import deleteIcon from "./img/Delete-button.png";
import React, {useState} from "react"
import ListItem from "./ListItem";

const TodoList = ({list, deleteTodo}) => {

    return(
        <>
        {console.log('Inside Todo list', list)}
        {list?.length > 0 ? (
            <div className="todo-list">
              {list.map((todo, index) => (
                
                <div className="display-todos">
                  <div className='todo-name' key={index}> {todo} </div>
                  
                  <ListItem deleteTodo = {deleteTodo} todo={todo} ></ListItem>

                </div>  
              ))}
            </div>
          ) : ( 
            <div className="display-todos">
              <p className='todo-name' > No tasks found </p>
            </div>
          )}
        </>
    );
};

export default TodoList;