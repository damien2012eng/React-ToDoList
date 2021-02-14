import React from 'react';
import Todo from './Todo';

function Todolist({todos,setTodos,filteredTodos}) {

    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map((todo)=>(
                        <Todo key={todo.id}
                              todo={todo}
                              text={todo.text}
                              todos={todos}
                              setTodos={setTodos}/>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Todolist;